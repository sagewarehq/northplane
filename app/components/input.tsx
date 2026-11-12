import type { ComponentProps } from "react";

import Field, { type FieldProps } from "~/components/field";
import { Input as ShadcnInput } from "~/components/ui/input";

export interface InputProps
  extends
    Omit<ComponentProps<typeof ShadcnInput>, "onChange" | "children" | "className">,
    Omit<FieldProps, "children"> {
  onChange?: (value: string) => void;
}

export default function Input({
  label,
  labelHidden,
  labelTooltip,
  description,
  invalid,
  errorMessage,
  className,
  name,
  disabled,
  validate,
  onChange,
  ...props
}: InputProps) {
  return (
    <Field
      className={className}
      description={description}
      disabled={disabled}
      errorMessage={errorMessage}
      invalid={invalid}
      label={label}
      labelHidden={labelHidden}
      labelTooltip={labelTooltip}
      name={name}
      validate={validate}
    >
      <ShadcnInput
        {...props}
        className="group-data-invalid:border-destructive group-data-invalid:ring-destructive/20"
        onChange={onChange ? (event) => onChange(event.currentTarget.value) : undefined}
      />
    </Field>
  );
}
