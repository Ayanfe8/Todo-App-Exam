import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Composes multiple class-name inputs into a single normalized class string.
 *
 * @param inputs - One or more clsx-compatible class values (strings, arrays, objects, etc.) to be combined
 * @returns A single string of composed class names with duplicate or conflicting Tailwind utilities resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
