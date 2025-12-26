import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { ReactNode } from "react";
import { PiLink } from "react-icons/pi";
import { PiArrowBendDoubleUpRight } from "react-icons/pi";
import Link from "next/link";

interface ProjectCardProps {
  children: ReactNode;
  title: string;
  repoLink: string;
  liveLink: string;
  theme?: "youfit" | "payzap";
}

export const ProjectCard = ({
  children,
  title,
  repoLink,
  liveLink,
  theme,
}: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "mb-6 w-72 lg:hover:scale-99 lg:transition-all lg:cursor-pointer",
        theme === "youfit"
          ? "bg-linear-to-r from-zinc-50 via-blue-100/70 to-zinc-50"
          : "bg-linear-to-r from-stone-100 via-stone-200 to-stone-100"
      )}
    >
      <div
        className={cn(
          "pt-3 font-medium text-center text-xl",
          theme === "youfit"
            ? "bg-linear-to-r from-blue-100 via-blue-400 to-blue-700 bg-clip-text text-transparent"
            : "bg-linear-to-r from-stone-300 via-stone-600 to-stone-700 bg-clip-text text-transparent"
        )}
      >
        {title}
      </div>
      <div className="w-full">{children}</div>
      <div className="mt-2 pb-3 flex px-4 justify-between">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex gap-x-1 lg:hover:underline text-xs lg:text-sm font-medium",
            theme === "youfit" ? "text-blue-400" : "text-stone-500"
          )}
        >
          <div>Link</div>
          <PiLink />
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex gap-x-1 lg:hover:underline text-xs lg:text-sm font-medium",
            theme === "youfit" ? "text-blue-400" : "text-stone-500"
          )}
        >
          <div>Repo</div>
          <PiArrowBendDoubleUpRight />
        </a>
      </div>
    </Card>
  );
};
