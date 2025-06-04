"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { FaExternalLinkAlt, FaVideo } from "react-icons/fa";

interface BlogContentProps {
  content: ReactNode;
}

export function BlogContent({ content }: BlogContentProps) {
  return <div>{content}</div>;
}
