import { LoaderCircle } from "lucide-react";
import type React from "react";

import { Button as ShadcnButton } from "~/components/ui/button";

// Northplane's button names onto shadcn's variants. `secondary` (the default)
// is shadcn's outline button; the panel's main action is `primary`.
const variants = {
  primary: "default",
  secondary: "outline",
  ghost: "ghost",
  danger: "destructive",
  icon: "ghost",
} as const;

const sizes = { md: "default", sm: "sm" } as const;
const iconSizes = { md: "icon", sm: "icon-sm" } as const;

export interface ButtonProps extends Omit<
  React.ComponentProps<typeof ShadcnButton>,
  "variant" | "size"
> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  pending?: boolean;
}

export default function Button({
  variant = "secondary",
  size = "md",
  pending,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton
      {...props}
      aria-busy={pending || undefined}
      disabled={disabled || pending}
      focusableWhenDisabled={pending}
      size={variant === "icon" ? iconSizes[size] : sizes[size]}
      variant={variants[variant]}
    >
      {pending && <LoaderCircle className="animate-spin" data-icon="inline-start" />}
      {children}
    </ShadcnButton>
  );
}
