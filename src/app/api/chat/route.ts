// import { ChatOllama } from "@langchain/ollama";
// import type { NextRequest } from "next/server";

// const ollama = new ChatOllama({
//   baseUrl: "http://localhost:11434", // Adjust this if your Ollama instance is running elsewhere
//   model: "smollm:135m", // Change this to the model you're using
// });

// export async function POST(req: NextRequest) {
//   const { prompt } = await req.json();

//   try {
//     const stream = await ollama.stream(prompt);

//     const textEncoder = new TextEncoder();
//     const readableStream = new ReadableStream({
//       async start(controller) {
//         for await (const chunk of stream) {
//           controller.enqueue(textEncoder.encode(chunk.content));
//         }
//         controller.close();
//       },
//     });

//     return new Response(readableStream, {
//       headers: {
//         'Content-Type': 'text/event-stream',
//         'Cache-Control': 'no-cache',
//         'Connection': 'keep-alive',
//       },
//     });
//   } catch (error) {
//     console.error("Error in Ollama chat:", error);
//     return new Response(JSON.stringify({ error: "An error occurred while processing your request." }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }
///////// almost perfect 
// import { ChatOllama } from "@langchain/ollama";
// import type { NextRequest } from "next/server";

// const ollama = new ChatOllama({
//   baseUrl: "http://localhost:11434", // Adjust this if your Ollama instance is running elsewhere
//   model: "smollm:1.7b", // Change this to the model you're using
// });

// // Simple in-memory cache
// const responseCache = new Map<string, string>();

// export async function POST(req: NextRequest) {
//   const { prompt } = await req.json();

//   // Check if we have a cached response for this prompt
//   if (responseCache.has(prompt)) {
//     const cachedResponse = responseCache.get(prompt);
//     return new Response(cachedResponse, {
//       headers: { 'Content-Type': 'text/plain' },
//     });
//   }

//   try {
//     const stream = await ollama.stream(prompt);

//     const textEncoder = new TextEncoder();
//     let fullResponse = "";

//     const readableStream = new ReadableStream({
//       async start(controller) {
//         for await (const chunk of stream) {
//           fullResponse += chunk.content;
//           controller.enqueue(textEncoder.encode(chunk.content));
//         }
//         // Cache the full response
//         responseCache.set(prompt, fullResponse);
//         controller.close();
//       },
//     });

//     return new Response(readableStream, {
//       headers: {
//         'Content-Type': 'text/event-stream',
//         'Cache-Control': 'no-cache',
//         'Connection': 'keep-alive',
//       },
//     });
//   } catch (error) {
//     console.error("Error in Ollama chat:", error);
//     return new Response(JSON.stringify({ error: "An error occurred while processing your request." }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }
import { ChatOllama } from "@langchain/ollama";
import type { NextRequest } from "next/server";

const ollama = new ChatOllama({
  baseUrl: "http://localhost:11434", // Adjust this if your Ollama instance is running elsewhere
  model: "smollm:360m", // Change this to the model you're using
});

// Simple in-memory cache
const responseCache = new Map<string, string>();

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  // Only process if the prompt is more than 3 characters
  if (prompt.length <= 3) {
    return new Response("", { status: 204 });
  }

  // Check if we have a cached response for this prompt
  if (responseCache.has(prompt)) {
    const cachedResponse = responseCache.get(prompt);
    return new Response(cachedResponse, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  try {
    const stream = await ollama.stream(prompt);

    const textEncoder = new TextEncoder();
    let fullResponse = "";

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          fullResponse += chunk.content;
          controller.enqueue(textEncoder.encode(chunk.content));
        }
        // Cache the full response
        responseCache.set(prompt, fullResponse);
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error("Error in Ollama chat:", error);
    return new Response(JSON.stringify({ error: "An error occurred while processing your request." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}