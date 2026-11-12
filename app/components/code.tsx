import cn from "~/utils/cn";

export interface CodeProps {
  children: string | string[] | number;
  className?: string;
}

export default function Code({ children, className }: CodeProps) {
  return (
    <code
      className={cn(
        "bg-muted border border-border px-1 py-0.5 font-mono rounded-sm text-[0.875em]",
        className,
      )}
    >
      {children}
    </code>
  );
}
