// "use client";
// import { useCallback, useState } from "react";

// import { useTypingEffect } from "./components/useTypingEffect";

// export default function Home() {
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState("");
//   const [runtime, setRuntime] = useState<number | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const displayedResult = useTypingEffect(result, 5);

//   const handlePrompt = useCallback(async (input: string) => {
//     if (input.length > 3) {
//       setIsLoading(true);
//       setResult("");
//       const startTime = performance.now();
      
//       try {
//         const response = await fetch('/api/chat', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ prompt: input }),
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setResult(data.result);
        
//         const endTime = performance.now();
//         const runTime = endTime - startTime;
        
//         setRuntime(runTime);
//       } catch (error) {
//         console.error("Error in AI prompt:", error);
//         setResult("An error occurred while processing your request.");
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setResult("");
//       setRuntime(null);
//     }
//   }, []);

//   return (
//     <main className="flex h-screen w-full flex-col items-center justify-between">

//       <div className="w-full flex flex-col items-center justify-between h-full pb-10 gap-5 pt-4">
//         <div className="border bg-black text-white p-2 rounded-md drop-shadow-2xl">
//           <p>Runtime: {runtime !== null ? runtime.toFixed(2) : "0000.00"} ms</p>
//         </div>
//         <div className="items-center text-pretty text-center justify-center border drop-shadow-2xl rounded-md w-[800px] h-[400px] overflow-auto p-4 ">
//           {isLoading && <p>Loading...</p>}
//           {result && <p className="drop-shadow-2xl">{displayedResult}</p>}
//         </div>
//         <div className="w-full items-center flex flex-cols justify-center px-24 pt-4">
//           <input 
//             className="w-full h-10 p-2 rounded-md border drop-shadow-2xl"
//             type="text"
//             placeholder="Ask Ollama anything!"
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter') {
//                 handlePrompt(prompt);
//               }
//             }}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
// "use client";
// import { useCallback, useEffect, useState } from "react";
// // import NavBar from "./components/NavBar";

// export default function Home() {
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState("");
//   const [runtime, setRuntime] = useState<number | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = useCallback(async (input: string) => {
//     if (input.length > 3) {
//       setIsLoading(true);
//       setResult("");
//       const startTime = performance.now();
      
//       try {
//         const response = await fetch('/api/chat', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ prompt: input }),
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const reader = response.body?.getReader();
//         if (!reader) {
//           throw new Error('Failed to get reader from response');
//         }

//         let fullResponse = "";
//         while (true) {
//           const { done, value } = await reader.read();
//           if (done) break;
//           const chunk = new TextDecoder().decode(value);
//           fullResponse += chunk;
//           setResult(fullResponse);
//         }
        
//         const endTime = performance.now();
//         const runTime = endTime - startTime;
        
//         setRuntime(runTime);
//       } catch (error) {
//         console.error("Error in AI prompt:", error);
//         setResult("An error occurred while processing your request.");
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setResult("");
//       setRuntime(null);
//     }
//   }, []);

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       handlePrompt(prompt);
//     }, 300);
//     return () => clearTimeout(debounceTimer);
//   }, [prompt, handlePrompt]);

//   return (
//     <main className="flex h-screen w-full flex-col items-center justify-between">
  
//       <div className="w-full flex flex-col items-center justify-between h-full pb-10 gap-5 pt-4">
//         <div className="border bg-black text-white p-2 rounded-md drop-shadow-2xl">
//           <p>Runtime: {runtime !== null ? runtime.toFixed(2) : "0000.00"} ms</p>
//         </div>
//         <div className="items-center text-pretty text-center justify-center border drop-shadow-2xl rounded-md w-[800px] h-[400px] overflow-auto p-4 ">
//           {isLoading && <p>Loading...</p>}
//           {result && <p className="drop-shadow-2xl">{result}</p>}
//         </div>
//         <div className="w-full items-center flex flex-cols justify-center px-24 pt-4">
//           <input 
//             className="w-full h-10 p-2 rounded-md border drop-shadow-2xl"
//             type="text"
//             placeholder="Ask Ollama anything!"
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
/// almost perfect 
// 'use client'
// import React, { useState } from "react";

// export default function Home() {
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState("");
//   const [runtime, setRuntime] = useState<number | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handlePrompt = async (input: string) => {
//     if (input.length > 3) {
//       setIsLoading(true);
//       setResult("");
//       const startTime = performance.now();
      
//       try {
//         const response = await fetch('/api/chat', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ prompt: input }),
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const reader = response.body?.getReader();
//         if (!reader) {
//           throw new Error('Failed to get reader from response');
//         }

//         while (true) {
//           const { done, value } = await reader.read();
//           if (done) break;
//           const chunk = new TextDecoder().decode(value);
//           setResult(prev => prev + chunk);
//         }
        
//         const endTime = performance.now();
//         const runTime = endTime - startTime;
        
//         setRuntime(runTime);
//       } catch (error) {
//         console.error("Error in AI prompt:", error);
//         setResult("An error occurred while processing your request.");
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setResult("");
//       setRuntime(null);
//     }
//   };

//   return (
//     <main className="flex h-screen w-full flex-col items-center justify-between">
//       <div className="w-full flex flex-col items-center justify-between h-full pb-10 gap-5 pt-4">
//         <div className="border bg-black text-white p-2 rounded-md drop-shadow-2xl">
//           <p>Runtime: {runtime !== null ? runtime.toFixed(2) : "0000.00"} ms</p>
//         </div>
//         <div className="items-center text-pretty text-center justify-center border drop-shadow-2xl rounded-md w-[800px] h-[400px] overflow-auto p-4 ">
//           {isLoading && <p>Loading...</p>}
//           {result && <p className="drop-shadow-2xl">{result}</p>}
//         </div>
//         <div className="w-full items-center flex flex-cols justify-center px-24 pt-4">
//           <input 
//             className="w-full h-10 p-2 rounded-md border drop-shadow-2xl"
//             type="text"
//             placeholder="Ask Ollama anything!"
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter') {
//                 handlePrompt(prompt);
//               }
//             }}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
'use client'
import React, { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [runtime, setRuntime] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrompt = useCallback(async (input: string) => {
    if (input.length > 3) {
      setIsLoading(true);
      setResult("");
      const startTime = performance.now();
      
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: input }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error('Failed to get reader from response');
        }

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = new TextDecoder().decode(value);
          setResult(prev => prev + chunk);
        }
        
        const endTime = performance.now();
        const runTime = endTime - startTime;
        
        setRuntime(runTime);
      } catch (error) {
        console.error("Error in AI prompt:", error);
        setResult("An error occurred while processing your request.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setResult("");
      setRuntime(null);
    }
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handlePrompt(prompt);
    }, 300); // Adjust this delay as needed

    return () => clearTimeout(debounceTimer);
  }, [prompt, handlePrompt]);

  return (
    <main className="flex h-screen w-full flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center justify-between h-full pb-10 gap-5 pt-4">
        <div className="border bg-black text-white p-2 rounded-md drop-shadow-2xl">
          <p>Runtime: {runtime !== null ? runtime. toFixed(2) : "0000.00"} ms</p>
        </div>
        <div className="items-center text-pretty text-center justify-center border drop-shadow-2xl rounded-md w-[800px] h-[400px] overflow-auto p-4 ">
          {isLoading && <p>Loading...</p>}
          {result && <p className="drop-shadow-2xl">{result}</p>}
        </div>
        <div className="w-full items-center flex flex-cols justify-center px-24 pt-4">
          <input 
            className="w-full h-10 p-2 rounded-md border drop-shadow-2xl"
            type="text"
            placeholder="Ask Ollama anything!"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
}