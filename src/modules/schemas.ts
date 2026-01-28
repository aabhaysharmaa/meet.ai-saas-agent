import { z } from "zod";

export const agentInsertSchema = z.object({
	name: z.string().min(1, "Name are required"),
	instructions: z.string().min(1, "instruction are required"),
})

export const agentUpdateSchema = agentInsertSchema.extend({
	id: z.string().min(1, "Id is required")
})