"use client";

import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agents-form";
import { AgentGetOne } from "../../types";

interface UpdateDialogProps {
	open: boolean;
	onOpenChange: (ope: boolean) => void;
	initialValues: AgentGetOne
}

const UpdateAgentDialog = ({ open, onOpenChange, initialValues }: UpdateDialogProps) => {
	return (
		<ResponsiveDialog title="Edit Agent"
			description="Edit the agent details"
			open={open}
			onOpenChange={onOpenChange}>
			<AgentForm
				onSuccess={() => onOpenChange(false)}
				onCancel={() => onOpenChange(false)}
				initialValues={initialValues}
			/>
		</ResponsiveDialog>
	)
}

export default UpdateAgentDialog
