import type { ReactNode } from "react";

import { Tooltip as ShadcnTooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
}

export default function Tooltip({ children, content, className }: TooltipProps) {
  return (
    <ShadcnTooltip>
      <TooltipTrigger
        className="focus-visible:ring-ring/50 inline-flex items-center justify-center rounded-md outline-none focus-visible:ring-3"
        closeDelay={0}
        delay={0}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent className={className}>{content}</TooltipContent>
    </ShadcnTooltip>
  );
}
