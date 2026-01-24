/* eslint-disable @next/next/no-img-element */
"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, OctagonAlertIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FcGoogle } from "react-icons/fc";
const font = Poppins({
	subsets: ['latin'],
	weight: ['600']
})

import { ImGithub } from "react-icons/im";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const formSchema = z.object(({
	name: z.string().min(1, "Name cannot be empty"),
	email: z.email(),
	password: z.string().min(1, "Password cannot be empty"),
	confirmPassword: z.string().min(1, "password cannot be empty"),
})).refine((data) => (data.password === data.confirmPassword)
	, {
		message: "password don't match",
		path: ["confirmPassword"]
	})

export const SignUpView = () => {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [isPending, setIsPending] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({

		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	})
	const onSubmit = (data: z.infer<typeof formSchema>) => {
		setError("")
		setIsPending(true)
		authClient.signUp.email({
			name: data.name,
			email: data.email,
			password: data.password,
		}, {
			onSuccess: () => {
				setIsPending(false)
				router.push("/")
			}, onError: (err) => {
				setError(err.error.message)
				setIsPending(false)
			}
		})
	}
	return (
		<div className="flex flex-col gap-5">
			<Card className="overflow-hidden p-0 border-0">
				<CardContent className="grid p-0 md:grid-cols-2">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8">
							<div className="flex flex-col  gap-6">
								<div className="flex flex-col items-center justify-center">
									<h1 className="text-2xl font-bold">Create an account</h1>
									<p className="text-muted-foreground text-balance">Start a new journey </p>
								</div>
								<div className="grid gap-3">
									<FormField
										name="name"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name</FormLabel>
												<FormControl>
													<Input placeholder="johnDoe" disabled={isPending} className="focus-visible:ring-0" type="text"  {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										name="email"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input placeholder="johnDoe@gmail.com" disabled={isPending} className="focus-visible:ring-0" type="email"  {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										name="password"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input placeholder="********" type="password" disabled={isPending} className="focus-visible:ring-0"   {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										name="confirmPassword"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Confirm Password</FormLabel>
												<FormControl>
													<Input placeholder="********" type="password" disabled={isPending} className="focus-visible:ring-0"     {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								{!!error && (
									<Alert className="bg-destructive/10 border-none">
										<OctagonAlertIcon className="size-4 text-destructive/10 " />
										<AlertTitle>
											{error}
										</AlertTitle>
									</Alert>
								)}
								<Button className="" disabled={isPending}>
									{isPending ? <Loader2 className="size-5 animate-spin" /> : "Create an account"}
								</Button>
								<div className="after-border-border relative text-center text-sm after:absolute after:top-1/2 after:flex after:border-t after:z-0 after:items-center after:inset-0 after">
									<span className="w-full bg-card text-muted-foreground z-10 relative px-2 ">Or Continue with</span>
								</div>
								<div className="flex flex-row gap-6 items-center justify-center w-full">
									<Button variant="outline" type="button" className="w-1/2">
										<FcGoogle calcMode="size-5" />
									</Button>
									<Button variant="outline" type="button" className="w-1/2">
										<ImGithub />
									</Button>
								</div>
								<div className=" flex items-center justify-center gap-2">
									<p>Already have an account</p>
									<Link href="/sign-in" className="underline underline-offset-4">
										Sign In
									</Link>
								</div>
							</div>
						</form>
					</Form>
					<div className="hidden md:flex flex-col bg-radial space-y-6 from-green-700 to-green-900 items-center justify-center">
						<img src="/logo.svg" alt="logo" className="size-23" />
						<p className={cn("text-2xl  font-semibold text-green-200", font.className)}>MEET.AI</p>
					</div>
				</CardContent>
			</Card>
			<div className="text-muted-foreground *:hover:text-primary  text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">By Clicking continue , you are agree to our <a href="#">Terms of services</a> and {" "}
				<a href="#">privacy policy</a>
			</div>
		</div>
	)
}