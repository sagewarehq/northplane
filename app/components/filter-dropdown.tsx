import { ChevronDown } from "lucide-react";

import { Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger } from "~/components/menu";
import { buttonVariants } from "~/components/ui/button";
import cn from "~/utils/cn";

export interface FilterDropdownProps {
  label: string;
  value: string | null;
  options: readonly { value: string; label: string }[];
  onChange: (value: string | null) => void;
}

export default function FilterDropdown({ label, value, options, onChange }: FilterDropdownProps) {
  const activeOption = options.find((o) => o.value === value) ?? null;
  const isActive = activeOption !== null;

  return (
    <Menu>
      <MenuTrigger
        className={cn(
          buttonVariants({ variant: "outline" }),
          !isActive && "text-muted-foreground border-dashed",
        )}
      >
        {isActive ? (
          <>
            {label}: <span className="font-medium">{activeOption.label}</span>
          </>
        ) : (
          label
        )}
        <ChevronDown className="size-3" />
      </MenuTrigger>
      <MenuContent>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => onChange(value === option.value ? null : option.value)}
          >
            {option.value === value ? (
              <span className="text-brand font-medium">{option.label}</span>
            ) : (
              option.label
            )}
          </MenuItem>
        ))}
        {isActive && (
          <>
            <MenuSeparator />
            <MenuItem onClick={() => onChange(null)}>Clear filter</MenuItem>
          </>
        )}
      </MenuContent>
    </Menu>
  );
}
