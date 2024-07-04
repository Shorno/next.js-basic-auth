import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import prisma from "@/prisma/db";
import GitHub from "next-auth/providers/github"


const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    throw new Error("GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be set up in .env file")

}

export const {handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
        })
    ],

    callbacks: {
        //fixing for next-auth
        async session({session, user}: any) {
            if (session && user) {
                session.user.id = user.id
            }
            return session;
        }
    }
})
