/* eslint-disable @next/next/no-img-element */
"use client"

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, OctagonAlertIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import * as z from "zod";
const font = Poppins({
	subsets: ['latin'],
	weight: ['600']
})

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


const formSchema = z.object({
	email: z.email().min(1, "Email is required"),
	password: z.string().min(1, "Password is required")
})

export const SignInView = () => {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null)
	const [isPending, setIsPending] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	})
	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		setError("")
		setIsPending(true);
		authClient.signIn.email({
			email: data.email,
			password: data.password
		}, {
			onError: (error) => {
				setError(error.error.message)
				setIsPending(false)
			},
			onSuccess: () => {
				setIsPending(false)
				router.push("/")
			}
		})
	}
	return (
		<div className="flex flex-col gap-5">
			<Card className="overflow-hidden p-0 border-0">
				<CardContent className="grid p-0 md:grid-cols-2  ">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 p-6 lg:p-8  ">
							<div className="flex flex-col gap-6">
								<div className="flex flex-col items-center text-center">
									<h1 className="text-2xl font-bold">Welcome Back</h1>
									<p className="text-balance  text-muted-foreground">
										Login to your account
									</p>
								</div>
								<div className="grid gap-3">
									<FormField
										name="email"
										control={form.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input className="focus-visible:ring-0 focus-visible:ring-green-500" type="email" placeholder="Johndoe@gmail.com" {...field} />
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
													<Input className="focus-visible:ring-0 focus-visible:ring-green-500" type="password" placeholder="********" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								{!!error && (
									<Alert className="bg-destructive/10 border-none">
										<OctagonAlertIcon className="size-4 text-destructive/10" />
										<AlertTitle>{error}</AlertTitle>.
									</Alert>
								)}
								<Button type="submit" disabled={isPending} className="w-full">
									{isPending ? <Loader2 className="size-5 animate-spin" /> : "Sign In"}
								</Button>

								<div className="after:border-border relative text-center text-sm after:absolute after:top-1/2 after:flex after:border-t after:z-0  after:items-center after:inset-0 after">
									<span className="bg-card text-muted-foreground relative z-10 px-2">Or Continue with</span>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<Button disabled={isPending} variant="outline" type="button" className="w-full">
										{isPending ? <Loader2 className="animate-spin size-5" /> : <FcGoogle className="size-4" />}
									</Button>
									<Button disabled={isPending} variant="outline" type="button" className="w-full">
										{isPending ? <Loader2 className="animate-spin size-5" /> : <ImGithub className="size-4" />}
									</Button>
								</div>
								<div className="text-center text-sm">
									Don&apos;t have an account?
									<Link className="underline underline-offset-4 font-medium" href={"/sign-up"}>{" "}
										Sign up</Link>
								</div>
							</div>
						</form>
					</Form>
					<div className=" bg-radial from-green-700  to-green-900 relative hidden md:flex flex-col gap-y-6
					 items-center justify-center
					">
						<img src={"/logo.svg"} alt="image" className="h-23 w-23" />
						<p className={cn("text-2xl font-semibold text-green-200", font.className)}>MEET.AI</p>
					</div>
				</CardContent>
			</Card>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				By clicking continue, you agree to our <a href="#">Terms of Services</a> and
				<a href="#"> privacy policy</a>
			</div>
		</div>
	)
}
