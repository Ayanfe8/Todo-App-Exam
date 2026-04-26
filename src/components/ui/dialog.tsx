import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function Dialog({
  ...props
}) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

/**
 * Renders a dialog portal element and forwards all props to it.
 *
 * @param props - Props to apply to the portal element; all properties are forwarded.
 * @returns The portal element with the provided props applied.
 */
function DialogPortal({
  ...props
}) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

/**
 * Renders a dialog close control and forwards all props to the underlying Close primitive while setting `data-slot="dialog-close"`.
 *
 * @param props - Props forwarded to the Close primitive.
 * @returns The Close element with `data-slot="dialog-close"` and forwarded props.
 */
function DialogClose({
  ...props
}) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> { 
  className?: string;
}

/**
 * Renders the dialog backdrop overlay with default animations, fixed positioning, and a semi-transparent background.
 *
 * @param className - Additional CSS classes to merge with the component's default styles.
 * @returns The rendered dialog overlay element.
 */
function DialogOverlay({
  className,
  ...props
}: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props} />
  );
}

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> { 
  className?: string;
  showCloseButton?: boolean;
  children?: React.ReactNode;
}

/**
 * Renders dialog content inside a portal with an overlay and an optional close button.
 *
 * @param className - Additional CSS classes to apply to the content container
 * @param children - Content to be rendered inside the dialog
 * @param showCloseButton - Whether to show the built-in close icon button; defaults to `true`
 * @returns The dialog content element wrapped in a portal and overlay
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        )}
        {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

/**
 * Renders the dialog header container with responsive layout and merged class names.
 *
 * @param className - Additional class names to merge with the default header styles.
 * @returns The `<div>` element used as the dialog header with any passed HTML attributes forwarded.
 */
function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props} />
  );
}

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  showCloseButton?: boolean;
  children?: React.ReactNode;
}

/**
 * Renders the dialog footer containing action elements.
 *
 * Renders provided children and, when enabled, a Close button that closes the dialog.
 *
 * @param className - Additional CSS classes to apply to the footer container
 * @param showCloseButton - If `true`, renders an outlined "Close" button that triggers dialog close
 * @param children - Elements to display in the footer; rendered before the optional close button
 * @returns A JSX element that serves as the dialog's footer container with layout and controls
 */
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: DialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}>
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

interface DialogTitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {
  className?: string;
}

/**
 * Renders a styled dialog title element used within dialog layouts.
 *
 * Forwards additional props to the underlying title element.
 *
 * @returns A dialog title element with heading typography classes and `data-slot="dialog-title"`.
 */
function DialogTitle({
  className,
  ...props
}: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props} />
  );
}

/**
 * Renders a dialog description element with muted text styling and optional custom classes.
 *
 * @returns The rendered dialog description element
 */
function DialogDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
