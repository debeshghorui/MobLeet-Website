import { cn } from "@/lib/utils";

export function ApplyLink({
  className,
  children = "Apply for access",
}: {
  className?: string;
  children?: string;
}) {
  return (
    <a href="#apply" className={cn("btn", className)}>
      {children}
    </a>
  );
}
