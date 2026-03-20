import { Pinecone } from '@pinecone-database/pinecone';

const DEFAULT_INSTRUCTIONS =
  'Answer in polite, short sentences. Use British English spelling and vocabulary. When relevant, speak knowledgeably about Charlotte Joanne Tyrer, the CharliVerse, AI, accessibility, and philosophy. If you do not know an answer, say so clearly.';

const READY_STATUS = 'Ready';
const CREATE_TIMEOUT_MS = 30_000;
const POLL_INTERVAL_MS = 2_000;

let cachedAssistantPromise: Promise<ReturnType<Pinecone['assistant']>> | undefined;

function requireEnv(name: string): string {
  const value = import.meta.env[name];

  if (!value || typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value.trim();
}

function getClient(): Pinecone {
  return new Pinecone({
    apiKey: requireEnv('PINECONE_API_KEY'),
  });
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ensureAssistantReady(pc: Pinecone, name: string) {
  const assistants = await pc.listAssistants();
  const existingAssistant = assistants.assistants?.find((assistant) => assistant.name === name);

  if (!existingAssistant) {
    await pc.createAssistant({
      name,
      instructions: import.meta.env.PINECONE_ASSISTANT_INSTRUCTIONS?.trim() || DEFAULT_INSTRUCTIONS,
      region: import.meta.env.PINECONE_ASSISTANT_REGION?.trim() || 'us',
    });
  }

  const startedAt = Date.now();

  while (Date.now() - startedAt < CREATE_TIMEOUT_MS) {
    const assistant = await pc.describeAssistant(name);

    if (assistant.status === READY_STATUS) {
      return;
    }

    await sleep(POLL_INTERVAL_MS);
  }

  throw new Error(`Assistant "${name}" was not ready within ${CREATE_TIMEOUT_MS / 1000} seconds.`);
}

export async function getAssistant() {
  if (!cachedAssistantPromise) {
    cachedAssistantPromise = (async () => {
      const assistantName = requireEnv('PINECONE_ASSISTANT_NAME');
      const pc = getClient();

      await ensureAssistantReady(pc, assistantName);

      return pc.assistant({ name: assistantName });
    })().catch((error) => {
      cachedAssistantPromise = undefined;
      throw error;
    });
  }

  return cachedAssistantPromise;
}

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};
