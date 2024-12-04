"use server"

import  {stripe} from '@/lib/stripe'

export  async function createStripeConnectLoginLink(stripeAccountId: string) {
   if(!stripeAccountId) {
       throw new Error("Now Stripe account ID provided")
   }

   try {
       const loginLink = await stripe.accounts.createLoginLink(stripeAccountId);
       return loginLink.url;
   } catch (error) {
       console.log('Error creating Stripe Connect Login Link', error);
       throw new Error("Failed to creating Stripe Connect Login Link");
   }
}