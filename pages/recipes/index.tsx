import { useSession } from "next-auth/react"

export function Recipes() {
    const { data: session }: any = useSession()

    return (
        <div>
            <h1>This is my Recipes page</h1>
            <p>{session?.user.email}</p>
        </div>
    )
}

export default Recipes;