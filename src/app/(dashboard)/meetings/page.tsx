import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { MeetingsView } from "@/modules/meetings/ui/views/meeting-view"
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";



const MeetingPage = () => {
	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(
		trpc.meetings.getMany.queryOptions({})
	)
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<MeetingViewLoading />}>
				<ErrorBoundary fallback={<MeetingViewError />}>
					<MeetingsView />
				</ErrorBoundary>
			</Suspense>
		</HydrationBoundary>
	)
}

export default MeetingPage


export const MeetingViewLoading = () => {
	return (
		<LoadingState
			title="Loading Meetings"
			description="This mat take a few seconds" />
	)
}

export const MeetingViewError = () => {
	return (
		<ErrorState
			title="Error Loading Meetings"
			description="Please try again Later"
		/>
	)
}