import { ChevronDown, ChevronUp } from "lucide-react";
import type React from "react";

import {
  Table as ShadcnTable,
  TableBody as ShadcnTableBody,
  TableCell as ShadcnTableCell,
  TableHead,
} from "~/components/ui/table";
import cn from "~/utils/cn";

// shadcn's Table, with rows written as plain `<tr>` by the callers.
export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="-mx-2">
      <ShadcnTable {...props} className={cn("min-w-160 whitespace-normal", className)} />
    </div>
  );
}

export function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <ShadcnTableBody
      {...props}
      className={cn(
        "align-top [&>tr]:border-t [&>tr]:transition-colors [&>tr:hover]:bg-muted/50",
        className,
      )}
    />
  );
}

export function TableHeader({ className, ...props }: React.ComponentProps<"th">) {
  return <TableHead {...props} className={cn("text-muted-foreground h-9", className)} />;
}

export function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <ShadcnTableCell {...props} className={cn("py-2.5 whitespace-normal", className)} />;
}

export type SortDirection = "asc" | "desc";

export interface SortHeaderProps<T extends string> extends Omit<
  React.ComponentProps<"th">,
  "onClick"
> {
  field: T;
  sortField: T;
  sortDirection: SortDirection;
  onSort: (field: T) => void;
  suffix?: React.ReactNode;
}

export function SortHeader<T extends string>({
  field,
  sortField,
  sortDirection,
  onSort,
  suffix,
  children,
  ...props
}: SortHeaderProps<T>) {
  const isActive = field === sortField;
  const Icon = sortDirection === "asc" ? ChevronUp : ChevronDown;

  return (
    <TableHeader
      {...props}
      aria-sort={isActive ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
    >
      <button
        className="focus-visible:ring-ring/50 hover:text-foreground -mx-1 inline-flex items-center gap-1 rounded-sm px-1 align-middle outline-none focus-visible:ring-3"
        onClick={() => onSort(field)}
        type="button"
      >
        {children}
        {isActive && <Icon className="size-3" />}
      </button>
      {suffix}
    </TableHeader>
  );
}
