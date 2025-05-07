import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

type SocialLinksProps = {
  variant?: "default" | "footer"
}

export function SocialLinks({ variant = "default" }: SocialLinksProps) {
  const iconSize = variant === "footer" ? 16 : 20
  const baseClasses = "transition-transform hover:scale-110 focus:scale-110"
  const colorClasses =
    variant === "footer"
      ? "text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-400"
      : "text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400"

  return (
    <div className="flex items-center gap-4 justify-center w-full">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${colorClasses}`}
        aria-label="Follow us on Instagram"
      >
        <Instagram size={iconSize} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${colorClasses}`}
        aria-label="Follow us on Facebook"
      >
        <Facebook size={iconSize} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${colorClasses}`}
        aria-label="Follow us on Twitter"
      >
        <Twitter size={iconSize} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${colorClasses}`}
        aria-label="Follow us on LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
    </div>
  )
}
