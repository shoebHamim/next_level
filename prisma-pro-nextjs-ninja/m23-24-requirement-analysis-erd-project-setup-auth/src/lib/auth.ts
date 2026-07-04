import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma.config";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true, 
    autoSignIn:false,
  },
  emailVerification:{
    sendVerificationEmail: async ( { user, url, token }, request) => {
         // void sendEmail({
         //   to: user.email,
         //   subject: "Verify your email address",
         //   text: `Click the link to verify your email: ${url}`,
         // });
         console.log('verification email sent!');
       },
  }
});
