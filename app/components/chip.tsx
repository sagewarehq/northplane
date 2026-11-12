import React from "react";

import { Badge } from "~/components/ui/badge";
import cn from "~/utils/cn";

// shadcn's Badge, with Northplane's status tones.
const variants = {
  neutral: "border-border bg-muted text-muted-foreground",
  warn: "bg-warn-subtle text-warn",
  bad: "bg-bad-subtle text-bad",
};

export interface ChipProps {
  text: string;
  variant?: keyof typeof variants;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Chip({
  text,
  variant = "neutral",
  className,
  leftIcon,
  rightIcon,
}: ChipProps) {
  return (
    <Badge className={cn(variants[variant], className)} variant="outline">
      {leftIcon}
      {text}
      {rightIcon}
    </Badge>
  );
}
