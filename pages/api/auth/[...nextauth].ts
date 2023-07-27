import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'

import { NextApiRequest, NextApiResponse } from "next"


import { MongoDBAdapter} from '@next-auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    })

    // TODO: add login system
  ],
  // session: {
  //   strategy: "jwt"
  // },
}

// exporting this as a function will cause a console message 
// which is this 'API handler should not return a value, received object.'
// this is because function NextAuth should have no return statement 
// https://github.com/vercel/next.js/discussions/48951#discussioncomment-6478128
// export default NextAuth(authOptions)

export default async function auth(req: NextApiRequest, res: NextApiResponse) { await NextAuth(req, res, authOptions); }