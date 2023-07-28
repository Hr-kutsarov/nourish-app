import {RxCross1} from 'react-icons/rx'
import useAuthModal from '@/hooks/useAuthModal'
import {motion} from 'framer-motion'
import { useSession, signIn, signOut } from "next-auth/react"

import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle, FaGithub } from 'react-icons/fa6'

export const AuthModal: React.FC = () => {
    const handler = useAuthModal()
    const { data: session }:any = useSession();

    return (
        <>
        {handler.isOpen && !session && (
        <span className='flex items-center justify-center'>
            <motion.div
            initial={{opacity: 0, y: '-100vh'}}
            animate={{opacity: 1, y: '0'}}
            transition={{
                duration: 0.4,
                type: "spring",
                bounce: 0.15,
            }}
            
            className={`
                flex 
                flex-col 
                items-center
                bg-white 
                rounded-lg 
                shadow-lg
                absolute
                w-[60vw]
                h-auto
                top-[15vh]
                `}>
                    <span className="flex flex-row w-full justify-between items-center">
                        <label className="pl-8 text-2xl font-semibold text-slate-600">Log In</label>
                        <button onClick={handler.onClose} className='p-4 text-3xl text-slate-400 hover:text-green-400'><RxCross1 /></button>
                    </span>
                    <span
                    className="grid grid-cols-3 gap-4 w-full px-8 py-4 border-slate-50 border-y-2">
                        <span className="flex justify-center items-center border-2 rounded-xl py-4 gap-4 hover:text-green-300 hover:bg-slate-600 hover:border-0"><FaGithub /><button className='font-semibold' onClick={() => signIn('github')}>Sign in with GitHub</button></span>
                        <span className="flex justify-center items-center border-2 rounded-xl py-4 gap-4 hover:text-blue-50 hover:bg-slate-600 hover:border-0"><FaGoogle /><button className='font-semibold' onClick={() => signIn('google')}>Sign in with Google</button></span>
                        <span className="flex justify-center items-center border-2 rounded-xl py-4 gap-4 hover:text-cyan-200 hover:bg-slate-600 hover:border-0"><FaFacebookF /><button className='font-semibold' onClick={() => signIn('google')}>Sign in with Facebook</button></span>
                    </span>
                    <span className='flex gap-2 py-4 font-semibold text-slate-800'>
                        <p>Not a member yet?</p>
                        <p className='hover:underline cursor-pointer underline-offset-2' onClick={() => {console.log('open register')}}>Register here.</p>
                    </span>
            

            </motion.div>
        </span>
        )}
        </>
    )
}

export default AuthModal;