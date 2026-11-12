import { Combobox } from "@base-ui/react/combobox";
import { ChevronDown } from "lucide-react";

import Field, { controlClass } from "~/components/field";
import {
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  useComboboxAnchor,
} from "~/components/ui/combobox";
import cn from "~/utils/cn";

export interface SelectItem {
  value: string;
  label: string;
}

export interface SelectProps {
  items: SelectItem[];
  label: string;
  name?: string;
  className?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
}

export default function Select({
  items,
  label,
  className,
  placeholder,
  description,
  required,
  disabled,
  invalid,
  errorMessage,
  value,
  defaultValue,
  onValueChange,
  name,
}: SelectProps) {
  const selectedItem =
    value !== undefined ? (items.find((i) => i.value === value) ?? null) : undefined;
  const defaultSelectedItem =
    defaultValue !== undefined ? (items.find((i) => i.value === defaultValue) ?? null) : undefined;

  const anchor = useComboboxAnchor();

  return (
    <Field
      className={className}
      description={description}
      disabled={disabled}
      errorMessage={errorMessage}
      invalid={invalid}
      label={label}
      name={name}
    >
      <Combobox.Root
        items={items}
        value={selectedItem}
        defaultValue={defaultSelectedItem}
        onValueChange={(item) => onValueChange?.(item?.value ?? null)}
        name={name}
      >
        <div className={cn(controlClass, "relative")} ref={anchor}>
          <Combobox.Input
            placeholder={placeholder}
            required={required}
            className="h-full w-full bg-transparent pr-8 pl-2.5 outline-hidden"
            data-1p-ignore
          />
          <Combobox.Trigger
            className={cn(
              "absolute inset-y-0 right-0 flex items-center pr-2.5",
              "text-muted-foreground hover:text-foreground",
            )}
          >
            <ChevronDown className="size-4" />
          </Combobox.Trigger>
        </div>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxList>
            {(item: SelectItem) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox.Root>
    </Field>
  );
}
