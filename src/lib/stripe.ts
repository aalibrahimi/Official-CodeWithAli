import 'server-only'

import Stripe from 'stripe'
// double check laater

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing STRIPE_SECRET_KEY environment variable');
  }
  
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY )