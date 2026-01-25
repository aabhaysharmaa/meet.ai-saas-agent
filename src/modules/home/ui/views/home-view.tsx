"use client";

import { authClient } from '@/lib/auth-client';

export const HomeView = () => {
	const { data: session } = authClient.useSession();
	if (!session) {
		return <div className="text-2xl font-bold">
			Loading...
		</div>
	}
	return (
		<div className='text-white'>
			{JSON.stringify(session.user)}
		</div>
	)
}

