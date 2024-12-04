'use server'


import {ConvexHttpClient} from "convex/browser";
import {auth} from "@clerk/nextjs/server";
import {api} from "../../convex/_generated/api";

if (!process.env.NEXT_PUBLIC_SERVER_URL) {
    throw new Error('Missing NEXT_PUBLIC_SERVER_URL')
}

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_SERVER_URL);

export async function getStripeConnectAccount() {
    const {userId} = await auth();

    if (!userId) {
        throw new Error("Not authorized");
    }

    const stripeConnectId = await  convex.query(
        api.users.getUserStripeConnectId,
        {userId}
    )

    return {
        stripeConnectId: stripeConnectId || null,
    }
}