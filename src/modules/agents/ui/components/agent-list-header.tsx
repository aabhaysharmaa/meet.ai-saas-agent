"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import NewAgentDialog from "./new-agent-dialog";

export const AgentListHeaders = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<>
			<NewAgentDialog onOpenChange={setIsDialogOpen} open={isDialogOpen} />
			<div className="py-4 px-4  md:px-8 flex flex-col">
				<div className="flex items-center justify-between">
					<h5 className="font-medium text-xl">My Agents</h5>
					<Button onClick={() => setIsDialogOpen((prev) => !prev)} className="font-semibold">
						<PlusIcon />
						New Agent
					</Button>
				</div>
			</div>
		</>
	)
}
