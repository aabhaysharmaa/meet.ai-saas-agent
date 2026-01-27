import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { AgentIdView } from "@/modules/agents/ui/view/agent-id-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
	params: Promise<{ agentId: string }>
}
const Agent = async ({ params }: Props) => {
	const { agentId } = await params;
	const queryClient = getQueryClient()
	void queryClient.prefetchQuery(
		trpc.agents.getOne.queryOptions({ id: agentId })
	)
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<AgentsIdViewLoading />}>
				<ErrorBoundary fallback={<AgentsIdViewError />}>
					<AgentIdView
						agentId={agentId}
					/>
				</ErrorBoundary>
			</Suspense>
		</HydrationBoundary>
	)
}

export default Agent



export const AgentsIdViewLoading = () => {
	return (
		<LoadingState
			title="Loading Agent"
			description="This mat take a few seconds" />
	)
}

export const AgentsIdViewError = () => {
	return (
		<ErrorState
			title="Error Loading Agent"
			description="Please try again Later"
		/>
	)
}