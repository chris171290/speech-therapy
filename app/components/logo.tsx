import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary dark:bg-purple-600 flex items-center justify-center text-white font-serif font-bold">
        TB
      </div>
      <span className="font-serif font-bold text-xl text-purple-900 dark:text-purple-100">
        Talk &amp; Bloom
      </span>
    </Link>
  );
}
