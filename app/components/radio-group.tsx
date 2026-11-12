import type { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import type React from "react";

import { RadioGroup as ShadcnRadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import cn from "~/utils/cn";

interface RadioGroupProps {
  children: React.ReactNode;
  label: string;
  className?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, eventDetails: BaseRadioGroup.ChangeEventDetails) => void;
}

function RadioGroup({ children, label, className, ...props }: RadioGroupProps) {
  return (
    <ShadcnRadioGroup {...props} aria-label={label} className={cn("gap-2.5", className)}>
      {children}
    </ShadcnRadioGroup>
  );
}

interface RadioItemProps {
  value: string;
  label: string;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

function RadioItem({ children, label, className, value, disabled }: RadioItemProps) {
  return (
    <label className="flex items-center gap-2.5">
      <RadioGroupItem aria-label={label} className={className} disabled={disabled} value={value} />
      {children}
    </label>
  );
}

export default Object.assign(RadioGroup, { Radio: RadioItem });
