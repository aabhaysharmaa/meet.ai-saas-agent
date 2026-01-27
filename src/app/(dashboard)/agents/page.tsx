import { auth } from '@/lib/auth';
import { loaderSearchParams } from '@/modules/agents/params';
import { AgentListHeaders } from '@/modules/agents/ui/components/agent-list-header';
import { AgentsViewError, AgentsViewLoading, AgentView } from '@/modules/agents/ui/view/agents-view';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import type { SearchParams } from 'nuqs';
import { Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";

interface Props {
	searchParams: Promise<SearchParams>
}


const Agents = async ({ searchParams }: Props) => {
	const filters = await loaderSearchParams(searchParams);
	const session = await auth.api.getSession({
		headers: await headers()
	})
	if (!session) {
		redirect("sign-in")
	}

	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions({
		...filters
	}));

	return (
		<>
			<AgentListHeaders />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Suspense fallback={<AgentsViewLoading />}>
					<ErrorBoundary fallback={<AgentsViewError />}>
						<AgentView />
					</ErrorBoundary>
				</Suspense>
			</HydrationBoundary>
		</>
	)
}

export default Agents
