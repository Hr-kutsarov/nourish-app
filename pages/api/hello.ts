import type { NextApiRequest, NextApiResponse } from 'next'

// load some dummy data
export const getPosts = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
  const posts = await data.json()
  return posts
}