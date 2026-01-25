import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../index"; // your drizzle instance
import * as schema from "@/db/schema"
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        github: {
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID!,
            clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET!
        }, google: {
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET!
        }
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            ...schema
        }
    }),
});