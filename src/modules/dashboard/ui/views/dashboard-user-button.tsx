import { GeneratedAvatar } from "@/components/generated-avatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from "@/components/ui/drawer";


import { authClient } from "@/lib/auth-client";
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export const DashboardUserButton = () => {
	const router = useRouter();
	const { data, isPending } = authClient.useSession();
	const isMobile = useIsMobile();
	const onLogOut = () => {
		authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/sign-in")
				}
			}
		})
	}

	if (isPending || !data?.user) {
		return null
	}
	if (isMobile) {
		return (
			<Drawer>
				<DrawerTrigger className="rounded-lg  cursor-pointer relative  border-border/10 p-3 w-full flex items-center bg-white/5
			 hover:bg-white/10 overflow-hidden">
					{data.user.image ? (
						<Avatar>
							<AvatarImage src={data.user.image} />
						</Avatar>
					) :
						<GeneratedAvatar seed={data.user.name} variant="initials" className="size-9 mr-2" />
					}
					<div className="flex flex-col gap-0.5 text-left overflow-hidden ml-3 flex-1 min-w-0">
						<p className="text-sm w-full truncate">{data.user.name}</p>
						<p className="text-sm truncate w-full">{data.user.email}</p>
					</div>
					<ChevronDownIcon className="size-4 shrink-0 absolute right-5 top-4" />
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>{data.user.name}</DrawerTitle>
						<DrawerDescription>{data.user.email}</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button variant="outline" onClick={() =>{}}>
							Billing
							<CreditCardIcon className="size-4 text-black"/>
						</Button>
						<Button variant="outline" onClick={onLogOut}>
							logout
							<LogOutIcon className="size-4"/>
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		)
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="rounded-lg  cursor-pointer relative  border-border/10 p-3 w-full flex items-center bg-white/5
			 hover:bg-white/10 overflow-hidden
			">
				{data.user.image ? (
					<Avatar>
						<AvatarImage src={data.user.image} />
					</Avatar>
				) :
					<GeneratedAvatar seed={data.user.name} variant="initials" className="size-9 mr-2" />
				}
				<div className="flex flex-col gap-0.5 text-left overflow-hidden ml-3 flex-1 min-w-0">
					<p className="text-sm w-full truncate">{data.user.name}</p>
					<p className="text-sm truncate w-full">{data.user.email}</p>
				</div>
				<ChevronDownIcon className="size-4 shrink-0 absolute right-5 top-4" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-72 focus-visible:ring-0" align="end" side="right">
				<DropdownMenuLabel>
					<div className="flex flex-col gap-1">
						<span className="font-medium truncate">{data.user.name}</span>
						<span className="text-sm font-normal text-muted-foreground truncate">{data.user.email}</span>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="flex cursor-pointer items-center justify-between">
					Billing
					<CreditCardIcon className="size-4" />
				</DropdownMenuItem>
				<DropdownMenuItem onClick={onLogOut} className="flex cursor-pointer items-center justify-between">
					LogOut
					<LogOutIcon className="size-4" />
				</DropdownMenuItem>

			</DropdownMenuContent>
		</DropdownMenu>
	)
}
