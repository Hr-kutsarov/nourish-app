import { useSession } from "next-auth/react"

export function Search() {
    const { data: session }: any = useSession()

    return (
        <div>
            <h1>This is my Search page</h1>
            <p>{session?.user.email}</p>
        </div>
    )
}

export default Search;