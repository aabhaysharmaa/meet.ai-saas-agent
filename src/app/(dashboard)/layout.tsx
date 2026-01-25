import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/modules/dashboard/ui/views/dashboard-sidebar"
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<main className="flex flex-col bg-black h-screen w-screen">
				{children}
			</main>
		</SidebarProvider>
	)
}

export default DashboardLayout
