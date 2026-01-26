"use client"

import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription
} from "@/components/ui/dialog";

import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription
} from "@/components/ui/drawer";

interface ResponsiveDialogProps {
	title: string;
	description: string;
	children: ReactNode;
	open: boolean
	onOpenChange: (open: boolean) => void
}

export const ResponsiveDialog = ({
	title,
	description,
	children,
	onOpenChange,
	open
}: ResponsiveDialogProps) => {
	const isMobile = useIsMobile();
	if (isMobile) {
		return (
			<Drawer onOpenChange={onOpenChange} open={open}>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>{title}</DrawerTitle>
						<DrawerDescription>{description}</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						{children}
					</div>
				</DrawerContent>
			</Drawer>
		)
	}
	return (
		<Dialog onOpenChange={onOpenChange} open={open}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	)
}
