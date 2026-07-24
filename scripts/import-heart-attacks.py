from __future__ import annotations

import json
from pathlib import Path

from docx import Document
from docx.document import Document as DocumentType
from docx.table import Table
from docx.text.paragraph import Paragraph


SOURCE_DIR = Path(
    r"C:\Users\Charli-Jo\OneDrive\Documents\narrative web\Heart Attacks"
)
OUTPUT = Path(__file__).parents[1] / "src" / "content" / "heart-attacks.ts"

SOURCES = [
    {
        "file": "01 Who Is Skiing the Mountain.docx",
        "title": "Who Is Skiing the Mountain?",
        "slug": "who-is-skiing-the-mountain",
        "description": (
            "Britain’s Emma Heart prepares to become the first totally blind athlete "
            "to race Paralympic Super-G without a human guide."
        ),
        "section_paragraphs": [17, 34, 56, 92, 114, 145, 162, 184, 199],
        "intro_paragraph": 1,
    },
    {
        "file": "02 Heart and Reed win Paralympic downhill silver for Great Britain.docx",
        "title": "Heart and Reed win Paralympic downhill silver for Great Britain",
        "slug": "heart-and-reed-win-paralympic-downhill-silver",
        "description": (
            "Emma Heart and guide Daniel Reed win downhill silver two days before "
            "Heart’s historic guide-free Super-G."
        ),
        "section_paragraphs": [16, 17, 30, 44, 60, 68],
        "intro_paragraph": 1,
    },
    {
        "file": "03 The Question.docx",
        "title": "The Question",
        "slug": "the-question",
        "description": (
            "The morning after Emma Heart wins gold, Big Charli and Jessica Martinez "
            "confront the question everyone wants the victory to answer."
        ),
        "section_paragraphs": [],
    },
    {
        "file": "03.5 Here it is as Big Charli saw it.docx",
        "title": "Here It Is as Big Charli Saw It",
        "slug": "here-it-is-as-big-charli-saw-it",
        "description": (
            "Big Charli reads the finish-line image as the instant Emma Heart’s race "
            "becomes something everyone else will try to claim."
        ),
        "section_paragraphs": [],
    },
    {
        "file": "04 The host allowed the applause to settle.docx",
        "title": "The Host Allowed the Applause to Settle",
        "slug": "the-host-allowed-the-applause-to-settle",
        "description": (
            "Emma Heart is asked what she wants after the medal and gives an answer "
            "smaller, more personal and more consequential than another victory."
        ),
        "section_paragraphs": [],
    },
]


def iter_blocks(parent: DocumentType):
    for child in parent.element.body.iterchildren():
        if child.tag.endswith("}p"):
            yield Paragraph(child, parent)
        elif child.tag.endswith("}tbl"):
            yield Table(child, parent)


def rich_runs(paragraph: Paragraph) -> list[dict[str, object]]:
    runs = []
    for run in paragraph.runs:
        if not run.text:
            continue
        runs.append(
            {
                "text": run.text,
                "bold": bool(run.bold),
                "italic": bool(run.italic),
            }
        )
    if not runs and paragraph.text:
        runs.append({"text": paragraph.text, "bold": False, "italic": False})
    return runs


def import_object(config: dict[str, object]) -> dict[str, object]:
    document = Document(SOURCE_DIR / str(config["file"]))
    paragraph_index = {paragraph._p: index for index, paragraph in enumerate(document.paragraphs)}
    section_paragraphs = set(config.get("section_paragraphs", []))
    intro_paragraph = config.get("intro_paragraph")
    blocks = []

    for block in iter_blocks(document):
        if isinstance(block, Paragraph):
            index = paragraph_index[block._p]
            if index == 0 or not block.text.strip():
                continue
            if index in section_paragraphs:
                blocks.append({"type": "heading", "text": block.text})
                continue
            blocks.append(
                {
                    "type": "paragraph",
                    "intro": index == intro_paragraph,
                    "runs": rich_runs(block),
                }
            )
        else:
            rows = [
                [[{"text": cell.text, "bold": False, "italic": False}] for cell in row.cells]
                for row in block.rows
            ]
            blocks.append({"type": "table", "rows": rows})

    return {
        "title": config["title"],
        "slug": config["slug"],
        "description": config["description"],
        "blocks": blocks,
    }


def main() -> None:
    objects = [import_object(config) for config in SOURCES]
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(objects, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        "export const heartAttacksObjects = " + payload + " as const;\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
