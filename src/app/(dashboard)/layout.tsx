import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardNavbar from "@/modules/dashboard/ui/views/dashboard-navbar";
import DashboardSidebar from "@/modules/dashboard/ui/views/dashboard-sidebar"
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<main className="flex flex-col bg-muted h-screen w-screen">
				<DashboardNavbar />
				{children}
			</main>
		</SidebarProvider>
	)
}

export default DashboardLayout
