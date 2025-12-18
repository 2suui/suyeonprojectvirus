import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "tw-211eddb114",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
