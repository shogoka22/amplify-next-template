import { secret } from '@aws-amplify/backend';

export async function GET() {
    console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
    return new Response(JSON.stringify({ message: process.env.OPENAI_API_KEY }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  