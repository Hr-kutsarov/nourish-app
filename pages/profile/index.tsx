import { useSession } from "next-auth/react"

export function Profile() {
    const { data: session }: any = useSession()

    return (
        <div>
            <h1>This is my profile page</h1>
            <p>{session?.user.email}</p>
        </div>
    )
}

export default Profile;