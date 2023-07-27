import { useSession } from "next-auth/react"

export function Tips() {
    const { data: session }: any = useSession()

    return (
        <div>
            <h1>This is my Tips page</h1>
            <p>{session?.user.email}</p>
        </div>
    )
}

export default Tips;