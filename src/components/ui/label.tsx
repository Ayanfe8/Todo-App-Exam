import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  className?: string;
}

/**
 * Renders a styled label element for form controls.
 *
 * @param className - Additional CSS class names to merge with the component's default styles.
 * @param props - Additional props to be passed through to the underlying label element.
 * @returns A React element representing the label with composed classes and forwarded props.
 */
function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Label }