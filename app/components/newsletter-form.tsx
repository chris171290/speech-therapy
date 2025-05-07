"use client";

import type React from "react";

import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setMessage("Thank you for subscribing! We'll keep you updated.");
      setEmail("");
    } catch (error) {
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 max-w-md w-full mx-auto">
      <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
        Get notified when we launch
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3 w-full">
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-1 px-4 rounded-full border-slate-300 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400"
            disabled={isSubmitting}
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="p-1 px-4 rounded-full bg-primary hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                <span className="sr-only">Submitting...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Notify Me</span>
                <Send className="h-4 w-4" />
              </span>
            )}
          </button>
        </div>

        {message && (
          <p className={`text-sm ${isSuccess ? "text-black" : "text-red-600"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
