import type { APIRoute } from 'astro';
import { getAssistant, type ChatMessage } from '../../lib/pineconeAssistant';

const MAX_HISTORY_MESSAGES = 10;
const MAX_MESSAGE_LENGTH = 2_000;

function normalizeHistory(history: unknown): ChatMessage[] {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .filter((entry): entry is ChatMessage => {
      if (!entry || typeof entry !== 'object') {
        return false;
      }

      const { role, content } = entry as Record<string, unknown>;

      return (
        (role === 'user' || role === 'assistant') &&
        typeof content === 'string' &&
        content.trim().length > 0
      );
    })
    .slice(-MAX_HISTORY_MESSAGES);
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let payload: { message?: unknown; history?: unknown };

  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400);
  }

  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!message) {
    return json({ error: 'Please enter a message before sending.' }, 400);
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return json(
      { error: `Messages must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
      400,
    );
  }

  const history = normalizeHistory(payload.history);

  try {
    const assistant = await getAssistant();
    const response = await assistant.chat({
      messages: [...history, { role: 'user', content: message }],
    });

    const content = response.message?.content?.trim();

    if (!content) {
      return json({ error: 'Pinecone Assistant returned an empty response.' }, 502);
    }

    return json({
      message: content,
      citations: response.citations ?? [],
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'Unknown server error';
    const isMissingEnv = detail.includes('Missing required environment variable');
    const status = isMissingEnv ? 500 : 502;

    return json(
      {
        error: isMissingEnv
          ? detail
          : 'The assistant could not answer right now. Please try again in a moment.',
      },
      status,
    );
  }
};
