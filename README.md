# Charli.info

Astro site for Charlotte Joanne Tyrer, now with a server-side Pinecone Assistant chat endpoint and an accessible visitor chat interface on the home page.

## Local setup

1. Install dependencies:

```sh
npm install
```

2. Create a local `.env` file from `.env.example`.

3. Add a valid Pinecone API key and assistant name:

```dotenv
PINECONE_API_KEY=your-real-pinecone-api-key
PINECONE_ASSISTANT_NAME=charli-site-assistant
```

4. Run the site:

```sh
npm run dev
```

## Pinecone assistant notes

- The browser must never receive the Pinecone API key. All Pinecone calls are made from the Astro server endpoint at `/api/chat`.
- If the configured assistant does not already exist, the server creates it automatically and waits for it to become ready.
- Default assistant instructions are provided in code, but you can override them with `PINECONE_ASSISTANT_INSTRUCTIONS`.

## Secret hygiene

- Plaintext Pinecone keys should never be committed to the repo.
- Any Pinecone key previously stored in local root text files should be treated as compromised and rotated in Pinecone before deployment.
- Keep `.env` files local and out of source control.

## Commands

- `npm run dev` starts the local Astro dev server.
- `npm run check` runs Astro's project checks and diagnostics.
- `npm run build` builds the server-rendered site.
- `npm run preview` previews the production build locally.
