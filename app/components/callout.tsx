import { CircleAlert, Info, TriangleAlert, X } from "lucide-react";
import React, { useState } from "react";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import cn from "~/utils/cn";

type Variant = "neutral" | "info" | "warning" | "error";

// shadcn's Alert, with a tone for each kind of notice.
const variants: Record<Variant, { className: string; Icon: typeof Info }> = {
  neutral: { className: "*:[svg]:text-muted-foreground", Icon: Info },
  info: { className: "border-brand/25 bg-brand-subtle *:[svg]:text-brand", Icon: Info },
  warning: { className: "border-warn/25 bg-warn-subtle *:[svg]:text-warn", Icon: TriangleAlert },
  error: { className: "border-bad/25 bg-bad-subtle *:[svg]:text-bad", Icon: CircleAlert },
};

export interface CalloutProps {
  variant?: Variant;
  title?: string;
  icon?: React.ReactElement;
  isDismissable?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function Callout({
  variant = "neutral",
  title,
  icon,
  isDismissable,
  className,
  children,
}: CalloutProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  if (isDismissed) {
    return null;
  }

  const { className: tone, Icon } = variants[variant];
  const isUrgent = variant === "warning" || variant === "error";

  return (
    <Alert className={cn(tone, className)} role={isUrgent ? "alert" : "status"}>
      {icon ?? <Icon />}
      {title && <AlertTitle>{title}</AlertTitle>}
      {children && (
        <AlertDescription className={cn(!title && "text-foreground")}>{children}</AlertDescription>
      )}
      {isDismissable && (
        <AlertAction>
          <Button
            aria-label="Dismiss"
            onClick={() => setIsDismissed(true)}
            size="icon-xs"
            variant="ghost"
          >
            <X />
          </Button>
        </AlertAction>
      )}
    </Alert>
  );
}
