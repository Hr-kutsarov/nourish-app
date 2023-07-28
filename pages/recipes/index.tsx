import { useQuery } from "@tanstack/react-query";

import {getPosts} from '../api/hello'

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export function Recipes() {
    const query = useQuery({ queryKey: ['todos'], queryFn: getPosts })

    return (
        <div>
            <h1>This is my Recipes page</h1>
            {query.data?.map((post: Post) => (
                <div className='grid grid-cols-3 bg-slate-300 text-pink-950 p-4 m-4 rounded-lg' key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Recipes;