import { useSession } from "next-auth/react"
import Link from 'next/link'
import {IoIosHeartHalf} from 'react-icons/io'
import {RxPerson} from 'react-icons/rx'
import { HiBattery50, HiOutlineBars3 } from "react-icons/hi2"
import UserControlButton from "./user-control-button"

import { useMemo } from "react"
export function UserControls() {
    const { data: session }: any = useSession()

    const controlBtns = useMemo(() => {

    }, [])
    if (session) {
        return (
            <span className="flex flex-row gap-2 border-slate-400 border-1 text-slate-600 py-2 px-3 items-center text-3xl">
                <UserControlButton icon={IoIosHeartHalf} href="/stats" />
                <UserControlButton icon={HiOutlineBars3} href='/profile' />
            </span>
        )
    }
    
    return null
}

export default UserControls;