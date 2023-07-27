import { useSession } from "next-auth/react"

export function Stats() {
    const { data: session }: any = useSession()

    return (
        <div>
            <h1>This is my Stats page</h1>
            <p>{session?.user.email}</p>
        </div>
    )
}

export default Stats;