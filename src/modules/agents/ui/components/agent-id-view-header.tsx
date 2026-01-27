import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";


interface Props {
	agentId: string
	agentName: string
	onEdit: () => void
	onRemove: () => void
}

export const AgentIdViewHeader = ({ agentId, agentName, onEdit, onRemove }: Props) => {
	return (
		<div className="flex items-center justify-between">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbList>
						<BreadcrumbLink asChild className="font-medium text-xl">
							<Link href={"/agents"}>
								My Agents
							</Link>
						</BreadcrumbLink>
					</BreadcrumbList>
					<BreadcrumbSeparator className="text-foreground text-xl font-medium [&>svg]:size-4" />
					{/* <ChevronRightIcon className="text-foreground" /> */}
					<BreadcrumbLink asChild className="font-medium text-xl text-foreground">
						<Link href={`/agents/${agentId}`}>
							{agentName}
						</Link>
					</BreadcrumbLink>
				</BreadcrumbList>
			</Breadcrumb>
			{/*without modal={false}, the dialog that this dropdown opens the website to get unClickable   */}
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost">
						<MoreHorizontalIcon />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem onClick={onEdit}>
						<PencilIcon className="size-4 text-sky-500" />
						<span className="text-sky-500">Edit</span>
					</DropdownMenuItem>
						<DropdownMenuItem onClick={onRemove}>
						<TrashIcon className="size-4 text-destructive " />
						<span className="text-destructive">Delete</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
