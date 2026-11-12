import { Avatar as ShadcnAvatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import cn from "~/utils/cn";

export interface AvatarProps {
  name: string;
  src?: string;
  className?: string;
}

// Base UI's Avatar shows the initial until the image loads, and keeps it when
// the image fails, before or after hydration.
export default function Avatar({ name, src, className }: AvatarProps) {
  return (
    <ShadcnAvatar aria-label={name} className={cn("size-7", className)} role="img">
      {src && <AvatarImage alt={name} src={src} />}
      <AvatarFallback className="text-[11px] font-semibold">
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </ShadcnAvatar>
  );
}
