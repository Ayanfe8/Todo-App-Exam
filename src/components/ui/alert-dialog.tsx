import * as React from "react";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * Wraps Radix AlertDialog.Root and attaches a `data-slot="alert-dialog"` attribute while forwarding all props.
 *
 * @returns A Radix AlertDialog Root element with forwarded props and `data-slot="alert-dialog"`.
 */
function AlertDialog({
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

/**
 * Render the element that opens the alert dialog.
 *
 * Renders Radix UI's Trigger and sets `data-slot="alert-dialog-trigger"`.
 *
 * @returns The alert dialog trigger element.
 */
function AlertDialogTrigger({
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

/**
 * Renders a portal for AlertDialog content.
 *
 * @returns A Portal element with `data-slot="alert-dialog-portal"` and any provided props forwarded to the underlying portal primitive.
 */
function AlertDialogPortal({
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

/**
 * Render the AlertDialog backdrop with built-in positioning, dimming, and Radix open/close animations.
 *
 * @param className - Additional CSS class names to merge with the overlay's base classes
 * @returns The rendered overlay element
 */
function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

interface AlertDialogContentProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
> {
  size?: string;
  className?: string;
}

/**
 * Renders the alert dialog panel centered in a portal with an overlay and responsive size variants.
 *
 * @param size - The size variant that controls the dialog's max-width (`"sm"` produces a small dialog, `"default"` produces a larger dialog). Defaults to `"default"`.
 * @returns The alert dialog content element (including its overlay) rendered inside a portal.
 */
function AlertDialogContent({
  className,
  size = "default",
  ...props
}: AlertDialogContentProps) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg",
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

/**
 * Layout container for the alert dialog header that positions the title, description, and optional media.
 *
 * @param className - Additional CSS classes to merge with the header's default layout classes
 * @returns A `div` element used as the alert dialog header; includes responsive layout and `data-slot="alert-dialog-header"`
 */
function AlertDialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Layout container for an alert dialog footer that adapts spacing and alignment across sizes.
 *
 * Renders a footer element that stacks controls vertically on narrow screens and arranges them in a right-aligned row on larger screens. Accepts standard div attributes and merges an optional `className`.
 *
 * @returns The footer DOM element for an alert dialog.
 */
function AlertDialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a styled AlertDialog title element.
 *
 * Applies the component's base title classes, merges the provided `className`, and sets `data-slot="alert-dialog-title"`.
 *
 * @returns The AlertDialog title element with merged classes and `data-slot="alert-dialog-title"`.
 */
function AlertDialogTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Render the alert dialog description element.
 *
 * Renders the Radix AlertDialog description and merges any provided `className` with the component's default description styling.
 *
 * @param className - Additional CSS classes to merge with the default description styles
 * @returns The rendered AlertDialog description element
 */
function AlertDialogDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

/**
 * Renders the alert dialog's media container (typically used for an icon).
 *
 * Applies default layout and sizing classes, sets `data-slot="alert-dialog-media"`, and forwards native div attributes.
 *
 * @returns A `div` element serving as the dialog's media area with the `data-slot="alert-dialog-media"` attribute.
 */
function AlertDialogMedia({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "bg-muted mb-2 inline-flex size-16 items-center justify-center rounded-md sm:group-data-[size=default]/alert-dialog-content:row-span-2 [&_svg:not([class*='size-'])]:size-8",
        className,
      )}
      {...props}
    />
  );
}

interface AlertDialogActionProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

/**
 * Renders an action button for use inside an alert dialog.
 *
 * @param className - Additional CSS classes applied to the action element
 * @param variant - Visual variant of the button (e.g., "default", "destructive", "outline", "secondary", "ghost", "link")
 * @param size - Button size (e.g., "default", "sm", "lg", "icon")
 * @returns The action button element to place inside an alert dialog
 */
function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}: AlertDialogActionProps) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={cn(className)}
        {...props}
      />
    </Button>
  );
}

interface AlertDialogCancelProps extends React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

/**
 * Renders a cancel action for an AlertDialog, styled as the library Button and wired to Radix's Cancel primitive.
 *
 * @param className - Additional CSS classes to apply to the underlying cancel element
 * @param variant - Button visual variant; defaults to `"outline"`
 * @param size - Button size; defaults to `"default"`
 * @returns A JSX element: a `Button` (asChild) that wraps Radix's `AlertDialogPrimitive.Cancel` with the provided props and styling
 */
function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogCancelProps) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={cn(className)}
        {...props}
      />
    </Button>
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
