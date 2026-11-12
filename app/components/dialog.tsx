import React from "react";

import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import {
  Dialog as ShadcnDialog,
  DialogClose as ShadcnDialogClose,
  DialogContent,
  DialogDescription as ShadcnDialogDescription,
  DialogFooter,
  DialogTitle as ShadcnDialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import cn from "~/utils/cn";

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onOpenChangeComplete?: (open: boolean) => void;
  trigger?: React.ReactElement;
  className?: string;
  children: React.ReactNode;
}

// Long forms scroll inside the dialog rather than past the window.
const contentClass = "max-h-[90dvh] overflow-y-auto sm:max-w-lg";

export function Dialog({
  open,
  onOpenChange,
  onOpenChangeComplete,
  trigger,
  className,
  children,
}: DialogProps) {
  return (
    <ShadcnDialog
      onOpenChange={(next) => onOpenChange?.(next)}
      onOpenChangeComplete={onOpenChangeComplete}
      open={open}
    >
      {trigger && <DialogTrigger render={trigger} />}
      <DialogContent className={cn(contentClass, className)} showCloseButton={false}>
        {children}
      </DialogContent>
    </ShadcnDialog>
  );
}

export function AlertDialog({
  open,
  onOpenChange,
  onOpenChangeComplete,
  trigger,
  className,
  children,
}: DialogProps) {
  return (
    <ShadcnAlertDialog
      onOpenChange={(next) => onOpenChange?.(next)}
      onOpenChangeComplete={onOpenChangeComplete}
      open={open}
    >
      {trigger && <AlertDialogTrigger render={trigger} />}
      <AlertDialogContent className={cn(contentClass, className)}>{children}</AlertDialogContent>
    </ShadcnAlertDialog>
  );
}

// Base UI's Title, Description and Close work in both dialog kinds.
export function DialogTitle(props: React.ComponentProps<typeof ShadcnDialogTitle>) {
  return <ShadcnDialogTitle {...props} />;
}

export function DialogDescription(props: React.ComponentProps<typeof ShadcnDialogDescription>) {
  return <ShadcnDialogDescription {...props} />;
}

export function DialogActions(props: React.ComponentProps<typeof DialogFooter>) {
  return <DialogFooter {...props} />;
}

export const DialogClose = ShadcnDialogClose;
