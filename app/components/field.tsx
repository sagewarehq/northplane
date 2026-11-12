import { Field as BaseField } from "@base-ui/react/field";
import { Info } from "lucide-react";
import type React from "react";

import Tooltip from "~/components/tooltip";
import cn from "~/utils/cn";

// shadcn's input look, for controls that aren't a plain `<Input>` (selects,
// number inputs). Field's `data-invalid` and `data-disabled` drive the states.
export const controlClass = cn(
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent text-sm text-foreground dark:bg-input/30",
  "placeholder:text-muted-foreground outline-none transition-[color,box-shadow,border-color]",
  "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
  "group-data-invalid:border-destructive group-data-invalid:ring-destructive/20",
  "group-data-disabled:cursor-not-allowed group-data-disabled:opacity-50",
);

export interface FieldProps {
  label: string;
  labelHidden?: boolean;
  labelTooltip?: React.ReactNode;
  description?: React.ReactNode;
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  validate?: (value: unknown) => string | null;
  className?: string;
  children: React.ReactNode;
}

export default function Field({
  label,
  labelHidden,
  labelTooltip,
  description,
  name,
  disabled,
  invalid,
  errorMessage,
  validate,
  className,
  children,
}: FieldProps) {
  return (
    <BaseField.Root
      className={cn("group flex w-full flex-col gap-2", className)}
      disabled={disabled}
      invalid={invalid}
      name={name}
      validate={validate}
    >
      {labelTooltip ? (
        <div className={cn("flex items-center gap-1", labelHidden && "sr-only")}>
          <BaseField.Label className="text-sm leading-none font-medium">{label}</BaseField.Label>
          <Tooltip className="w-72" content={labelTooltip}>
            <Info
              aria-label={`About ${label}`}
              className="text-muted-foreground hover:text-foreground size-3.5 transition-colors"
            />
          </Tooltip>
        </div>
      ) : (
        <BaseField.Label
          className={cn("text-sm leading-none font-medium", labelHidden && "sr-only")}
        >
          {label}
        </BaseField.Label>
      )}
      {children}
      {description && (
        <BaseField.Description className="text-muted-foreground text-sm">
          {description}
        </BaseField.Description>
      )}
      <BaseField.Error
        className="text-destructive text-sm"
        {...(errorMessage && { match: invalid, children: errorMessage })}
      />
    </BaseField.Root>
  );
}
