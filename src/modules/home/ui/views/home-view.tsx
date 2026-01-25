"use client";

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation';

export const HomeView = () => {
	const router = useRouter();
	const { data: session } = authClient.useSession();
	if (!session) {
		return <div className="text-2xl font-bold">
			Loading...
		</div>
	}
	return (
		<div>
			{JSON.stringify(session)}
			<Button onClick={() => {
				authClient.signOut({fetchOptions : {onSuccess : () => router.push("/sign-in")}})
			}} >Sign Out</Button>
		</div>
	)
}

