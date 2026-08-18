"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Critical root error caught by global boundary:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#0f111d] text-white min-h-screen flex items-center justify-center font-sans p-6">
        <div className="max-w-md w-full text-center bg-[#16192b] border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-[#DF0425] mb-3">Critical Error</h1>
          <p className="text-gray-300 text-sm mb-6">
            A application-wide failure occurred. Please refresh or click the button below to recover.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#DF0425] hover:bg-[#b8031e] text-white text-sm font-semibold rounded-xl transition-colors shadow-lg cursor-pointer"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
