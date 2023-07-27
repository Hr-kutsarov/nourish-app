import { Mitr } from 'next/font/google'

import Link from 'next/link'

import Image from 'next/image'
import logo from '@/public/nourish-logo.svg'

export const mitr = Mitr({ subsets: ['latin-ext'], weight: '300'})

const LogoBox: React.FC = () => {
    return (
        <span className='flex flex-row px-2 py-1 gap-2 justify-center items-center cursor-pointer '>
            <Image alt='logo' height={28} width={28} src={logo}/>
            <Link href='/' className={`${mitr.className} hidden md:block text-xl text-green-600 font-bold`}>Nourish</Link>
        </span>
    )
}

export default LogoBox