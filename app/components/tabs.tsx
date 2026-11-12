import type { ComponentProps, ReactNode } from "react";

import {
  Tabs as ShadcnTabs,
  TabsContent,
  TabsList as ShadcnTabsList,
  TabsTrigger,
} from "~/components/ui/tabs";
import cn from "~/utils/cn";

export interface TabsProps {
  label: string;
  className?: string;
  defaultValue?: string | number;
  value?: string | number;
  onValueChange?: (value: string | number) => void;
  children: ReactNode;
}

function Tabs({ label, className, children, ...props }: TabsProps) {
  return (
    <ShadcnTabs
      {...props}
      aria-label={label}
      className={className}
      defaultValue={props.defaultValue ?? 0}
    >
      {children}
    </ShadcnTabs>
  );
}

function TabList({ children, className }: { children: ReactNode; className?: string }) {
  return <ShadcnTabsList className={cn("max-w-full", className)}>{children}</ShadcnTabsList>;
}

function Tab({ children, ...props }: ComponentProps<typeof TabsTrigger>) {
  return <TabsTrigger {...props}>{children}</TabsTrigger>;
}

// The panel frames its content, since the ACL editor fills it edge to edge.
function Panel({ className, children, ...props }: ComponentProps<typeof TabsContent>) {
  return (
    <TabsContent {...props} className={cn("w-full overflow-clip rounded-lg border", className)}>
      {children}
    </TabsContent>
  );
}

export { Tabs, TabList as TabsList, Tab as TabsTab, Panel as TabsPanel };
