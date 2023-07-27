import { useSession } from "next-auth/react"

export function Main() {
    const { data: session }: any = useSession()

    return (
        <div>
            <h1>This is my Main page</h1>
            <p>{session?.user.email}</p>
        </div>
    )
}

export default Main;