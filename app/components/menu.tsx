import type { ComponentProps, JSX, ReactNode } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import cn from "~/utils/cn";

// Northplane's menu API on shadcn's DropdownMenu.

export const Menu = ({
  children,
  disabled,
}: {
  children: ReactNode;
  disabled?: boolean;
}): JSX.Element => <DropdownMenu disabled={disabled}>{children}</DropdownMenu>;

export const MenuTrigger = ({
  className,
  children,
  disabled,
  onClick,
}: Pick<
  ComponentProps<typeof DropdownMenuTrigger>,
  "className" | "children" | "disabled" | "onClick"
>): JSX.Element => (
  <DropdownMenuTrigger
    className={cn(
      "inline-flex items-center justify-center outline-none",
      "focus-visible:ring-3 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </DropdownMenuTrigger>
);

export const MenuContent = ({
  children,
  className,
  side = "bottom",
  sideOffset = 4,
  align = "start",
}: {
  children: ReactNode;
  className?: string;
  side?: ComponentProps<typeof DropdownMenuContent>["side"];
  sideOffset?: number;
  align?: ComponentProps<typeof DropdownMenuContent>["align"];
}): JSX.Element => (
  <DropdownMenuContent
    align={align}
    className={cn("w-auto min-w-48", className)}
    side={side}
    sideOffset={sideOffset}
  >
    {children}
  </DropdownMenuContent>
);

export const MenuItem = ({
  className,
  variant,
  children,
  disabled,
  onClick,
}: Pick<
  ComponentProps<typeof DropdownMenuItem>,
  "className" | "children" | "disabled" | "onClick"
> & {
  variant?: "danger";
}): JSX.Element => (
  <DropdownMenuItem
    className={className}
    disabled={disabled}
    onClick={onClick}
    variant={variant === "danger" ? "destructive" : "default"}
  >
    {children}
  </DropdownMenuItem>
);

export const MenuSeparator = ({ className }: { className?: string }): JSX.Element => (
  <DropdownMenuSeparator className={className} />
);
