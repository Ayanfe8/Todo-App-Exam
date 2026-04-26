import { z } from "zod";

export const todoSchema = z.object({
  name: z.string().min(3, "Title must be at least 3 characters"),
  completed: z.boolean().optional(),
});

export type TodoFormData = z.infer<typeof todoSchema>;