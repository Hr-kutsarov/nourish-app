import { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'
import { getPosts } from "../api/hello";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts()
    return {
      props: { data: posts }
    }
}

const Browse: NextPage = ({ data } : InferGetStaticPropsType<typeof getStaticProps>)=> {
    return (
        <div>
            <h1>This is my Browse page</h1>

            {data.map((post: Post) => {
                return (
                    <div key={post.id}>
                        <p>{post.userId}</p>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Browse;


