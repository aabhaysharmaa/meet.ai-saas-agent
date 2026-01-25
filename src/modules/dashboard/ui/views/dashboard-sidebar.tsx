"use client";
import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { BotIcon, Star, VideoIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";

const font = Poppins({
	subsets: ['latin'],
	weight: ["600"]
})

const firstSection = [
	{
		icon: VideoIcon,
		label: "Meetings",
		href: "/meetings"
	},
	{
		icon: BotIcon,
		label: "Agents",
		href: "/agents"
	}
]

const secondSection = [
	{
		icon: Star,
		label: "Upgrade",
		href: "/upgrade"
	}
]

const DashboardSidebar = () => {
	const pathname = usePathname();
	return (
		<Sidebar className="">
			<SidebarHeader className="text-sidebar-accent-foreground " >
				<Link href={"/"} className="flex items-center gap-2 px-2 pt-2">
					<Image src={"/logo.svg"} height={36} width={36} alt="meet.ai" />
					<p className={cn("text-2xl font-semibold", font.className)}>Meet.AI</p>
				</Link>
			</SidebarHeader>
			<div className="px-4 py-2">
				<Separator className="opacity-10 text-[#5D6B6BA]" />
			</div>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{firstSection.map((item) => (
								<SidebarMenuItem key={item.href}>
									<SidebarMenuButton asChild className={cn("h-10 hover:bg-linear-to-r/oklch border-transparent hover:border-[#5D6B6B]/10 border-0 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50", pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]")}
										isActive={pathname === item.href}
									>
										<Link href={item.href} className="flex items-center gap-x-2">
											<item.icon className="size-5" />
											<span className="text-sm tracking-tight font-semibold">{item.label}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<div className="px-4 py-2">
					<Separator className="opacity-10 text-[#5D6B6BA]" />
				</div>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{secondSection.map((item) => (
								<SidebarMenuItem key={item.href}>
									<SidebarMenuButton asChild className={cn("h-10 hover:bg-linear-to-r/oklch border-transparent hover:border-[#5D6B6B]/10 border-0 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50", pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]")}
										isActive={pathname === item.href}
									>
										<Link href={item.href} className="flex items-center gap-x-2">
											<item.icon className="size-5" />
											<span className="text-sm tracking-tight font-semibold">{item.label}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="text-white py-6 px-3">
				<DashboardUserButton />
			</SidebarFooter>
		</Sidebar>
	)
}

export default DashboardSidebar
