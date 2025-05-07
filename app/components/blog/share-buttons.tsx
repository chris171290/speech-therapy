"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiLinkedinBoxLine } from "react-icons/ri";

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium mr-1">Share:</span>
      {/* <button
        className="items-center justify-items-center border-gray-400 border rounded-full h-8 w-8"
        aria-label="Share on Facebook"
      >
        <FaFacebookF className="h-4 w-4" />
      </button>
      <button
        className="items-center justify-items-center border-gray-400 border rounded-full h-8 w-8"
        aria-label="Share on Twitter"
      >
        <FaInstagram className="h-4 w-4" />
      </button>
      <button
        className="items-center justify-items-center border-gray-400 border rounded-full h-8 w-8"
        aria-label="Share on LinkedIn"
      >
        <RiLinkedinBoxLine className="h-4 w-4" />
      </button>
      <button
        className="items-center justify-items-center border-gray-400 border rounded-full h-8 w-8"
        aria-label="Share via Email"
      >
        <IoIosMail className="h-4 w-4" />
      </button> */}
      <button
        className="items-center justify-items-center border-gray-400 border rounded-full h-8 w-8"
        aria-label="Copy link"
        onClick={handleCopyLink}
      >
        {copied ? (
          <FaCheckCircle className="h-4 w-4 text-green-500" />
        ) : (
          <FaLink className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
