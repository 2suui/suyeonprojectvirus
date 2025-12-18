import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("tw-ce5e6734d4", className)}
      {...props}
    />
  );
}

export { Skeleton };
