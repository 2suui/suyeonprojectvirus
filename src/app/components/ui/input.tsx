import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "tw-891765b85b",
        "tw-447c8d1a33",
        "tw-d856479d52",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
