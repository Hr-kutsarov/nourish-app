import { useSession } from "next-auth/react"

export function About() {
    const { data: session }: any = useSession()

    return (
        <div>
            <h1>This is my About page</h1>
            <p>{session?.user.email}</p>
        </div>
    )
}

export default About;