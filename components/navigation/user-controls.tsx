import { useSession, signOut } from "next-auth/react"

import {RxLockOpen1} from 'react-icons/rx'
import { HiOutlineBars3 } from "react-icons/hi2"
import { RxExit } from 'react-icons/rx'
import UserControlButton from "./user-control-button"
import useAuthModal from "@/hooks/useAuthModal"
import { useCallback } from "react"


export function UserControls() {
    const { data: session }: any = useSession()
    const handler = useAuthModal()

    const closeModal = useCallback(() => {
        handler.onOpen()
    }, [handler.isOpen])

    if (session) {
        return (
            <span className="flex flex-row gap-2 text-slate-600 py-2 px-3 items-center text-3xl">
                <button className='text-lg' onClick={() => {signOut()}}><RxExit /></button>
                <UserControlButton icon={HiOutlineBars3} href='/profile' />
            </span>
        )
    } else {
        return (
            <span 
            className="flex text-3xl px-6 py-4 text-slate-600 cursor-pointer gap-2"
            onClick={(e) => {
                e.stopPropagation()
                closeModal()
            }}>
                <RxLockOpen1 />
            </span>
        )
    }
    

}

export default UserControls;