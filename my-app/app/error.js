"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Unhandled error caught by route boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0f111d] text-white flex items-center justify-center px-6 py-24 relative overflow-hidden font-body">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#DF0425]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[#DF0425]/5 blur-3xl"
      />

      <div className="max-w-md w-full text-center relative z-10 bg-[#16192b] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="mx-auto w-16 h-16 rounded-full bg-[#DF0425]/10 flex items-center justify-center mb-6 text-[#DF0425]">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h2 className="font-display text-2xl font-bold text-white mb-2">
          Something went wrong
        </h2>

        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {error?.message || "An unexpected error occurred while loading this page. Please try again or return to the home page."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#DF0425] hover:bg-[#b8031e] text-white font-medium text-sm transition-colors duration-200 cursor-pointer shadow-lg shadow-[#DF0425]/20"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
