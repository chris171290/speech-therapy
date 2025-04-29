// ReadMoreButton.tsx
import { FC, MouseEvent, useState } from "react";

interface ReadMoreButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const ReadMoreButton: FC<ReadMoreButtonProps> = ({
  onClick,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      className={`group inline-flex items-center gap-1 font-medium text-primary transition-all duration-300 ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Read more details"
      type="button"
    >
      <span className="relative font-bold">
        Read More
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transform transition-transform duration-300 ${
          isHovered ? "translate-x-1" : ""
        }`}
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  );
};
