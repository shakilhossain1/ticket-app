"use server";

import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

export async function createStripeConnectAccountLink(account: string) {
  try {
    const headerList = await headers();
    const origin = headerList.get("origin") || "";

    const accountLink = await stripe.accountLinks.create({
      account,
      refresh_url: `${origin}/connect/refresh/${account}`,
      return_url: `${origin}/connect/return/${account}`,
      type: "account_onboarding",
    });

    return { url: accountLink.url };
  } catch (error) {
    console.log("An error occured creating Stripe Connect Login Link", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknow error occured");
  }
}
