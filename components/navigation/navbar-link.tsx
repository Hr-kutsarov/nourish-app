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
            ${active ? 'text-green-700/70' : "text-slate-600"}

        `}>
            <Icon size={20} />
            <span className={mitr.className}>{label}</span>
        </Link>
    )
}

export default NavbarLink