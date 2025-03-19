"use server";

import { StreamClient } from "@stream-io/node-sdk";   
import { currentUser } from "@clerk/nextjs/server";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error('User not logged in');
  if (!apiKey) throw new Error('No API key');
  if (!apiSecret) throw new Error('No API secret');

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.round( new Date().getTime() / 1000) + 3600;
  const issuedAt = Math.round(new Date().getTime() / 1000);
  const token = client.createToken(user.id, exp, issuedAt);

  return token;
}