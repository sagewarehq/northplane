import type React from "react";

import { Switch as ShadcnSwitch } from "~/components/ui/switch";

export interface SwitchProps {
  label: string;
  className?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export default function Switch(props: SwitchProps) {
  return (
    <ShadcnSwitch
      aria-label={props.label}
      checked={props.checked}
      className={props.className}
      defaultChecked={props.defaultChecked}
      disabled={props.disabled}
      name={props.name}
      onCheckedChange={props.onCheckedChange}
    />
  );
}

interface SwitchFieldProps extends SwitchProps {
  description?: React.ReactNode;
}

export function SwitchField({ label, description, ...props }: SwitchFieldProps) {
  return (
    <label className="flex items-center justify-between gap-4">
      <span>
        <span className="block font-medium">{label}</span>
        {description && <span className="text-muted-foreground block">{description}</span>}
      </span>
      <Switch label={label} {...props} />
    </label>
  );
}
