import * as React from "react"

import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Renders the outer container for a Card UI with default styling and `data-slot="card"`.
 *
 * @returns The card container div element with default classes merged with `className` and all remaining props forwarded.
 */
function Card({
  className,
  ...props
}: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props} />
  );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Renders the card header container used inside a Card.
 *
 * The rendered <div> has `data-slot="card-header"`, default layout and spacing classes,
 * and merges any provided `className`. Additional HTML attributes are forwarded to the element.
 *
 * @returns The header `<div>` element for a Card with merged classes and forwarded props.
 */
function CardHeader({
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Renders the card title container with title-specific styling.
 *
 * @param className - Additional CSS classes to merge with the component's default title styles
 * @returns The card title `<div>` element
 */
function CardTitle({
  className,
  ...props
}: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  );
}
  
interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Renders the card description element with muted foreground and small text styling.
 *
 * @returns The `<div>` for the card description with `data-slot="card-description"` and merged `className`.
 */
function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Renders the Card action area used within a card header, positioned and aligned to the top-right.
 *
 * @returns A JSX element representing the card action container with layout classes applied that forwards remaining div attributes to the underlying element.
 */
function CardAction({
  className,
  ...props
}: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Renders the card content container.
 *
 * Forwards any additional HTML div attributes to the rendered element.
 *
 * @param className - Additional CSS classes to merge with the default horizontal padding
 * @returns The rendered card content div element with `data-slot="card-content"`
 */
function CardContent({
  className,
  ...props
}: CardContentProps) {
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Renders the card footer container.
 *
 * @param className - Additional CSS classes merged with the component's default footer styles.
 * @returns The footer `div` element with `data-slot="card-footer"` and default layout styling.
 */
function CardFooter({
  className,
  ...props
}: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
