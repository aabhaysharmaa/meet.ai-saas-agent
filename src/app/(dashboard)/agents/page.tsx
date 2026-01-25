import { AgentsViewError, AgentsViewLoading, AgentView } from '@/modules/agents/ui/view/agents-view';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";

const Agents = async () => {
	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<AgentsViewLoading />}>
				<ErrorBoundary fallback={<AgentsViewError/>}>
					<AgentView />
				</ErrorBoundary>
			</Suspense>
		</HydrationBoundary>
	)
}

export default Agents
