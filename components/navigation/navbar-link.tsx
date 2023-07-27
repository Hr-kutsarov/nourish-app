import Link from 'next/link'
import { IconType } from 'react-icons'
import { mitr } from '../header/LogoBox'

interface NavbarLinkProps {
    label: string
    icon: IconType
    description?: string
    href: string
    active?: boolean
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
    label,
    icon: Icon,
    description,
    href,
    active
}) => {
    return (
        <Link href={href} className={`
            flex
            flex-row
            gap-2
            items-center
            p-1
            cursor-pointer
            hover:text-slate-300
            font-md
            ${active ? 'border-b-2' : 'border-b-0'}
            ${active ? 'text-slate-300' : "text-slate-600"}
            ${active ? 'border-b-2' : "border-0"}
            ${active ? ' border-slate-300' : 'border-transparent'}

        `}>
            <Icon size={20} />
            <span className={mitr.className}>{label}</span>
        </Link>
    )
}

export default NavbarLink