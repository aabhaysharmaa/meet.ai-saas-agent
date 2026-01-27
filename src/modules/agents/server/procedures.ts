import { agents } from "@/db/schema";
import { db } from "@/index";
import { agentInsertSchema } from "@/modules/schemas";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { eq, getTableColumns, sql } from "drizzle-orm";
import { z } from "zod";

export const agentsRouter = createTRPCRouter({
	getOne: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
		const data = await db
			.select({
				//  TODO : change the actual count
				meetingCount: sql<number>`5`,
				...getTableColumns(agents),
			})
			.from(agents)
			.where(eq(agents.id, input.id))
		return data
	}),
	getMany: protectedProcedure.query(async () => {
		const existingAgent = await db
			.select()
			.from(agents)
		return existingAgent
	}),
	create: protectedProcedure
		.input(agentInsertSchema)
		.mutation(async ({ input, ctx }) => {
			const [createdAgent] = await db
				.insert(agents)
				.values({
					...input,
					userId: ctx.auth.user.id
				}).returning()
			return createdAgent
		})
})