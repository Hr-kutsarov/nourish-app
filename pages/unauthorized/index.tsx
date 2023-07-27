import { useSession } from "next-auth/react"

export function Unauthorized() {
    const { data: session }: any = useSession()

    return (
        <div>
            <h1>This is my Unauthorized page</h1>
            <p>{session?.user.email}</p>
        </div>
    )
}

export default Unauthorized;