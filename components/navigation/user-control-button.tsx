import {IconType} from 'react-icons'
import Link from 'next/link'

interface UserControlBtnProps {
    icon: IconType
    href: string
    active?: boolean
}

const UserControlButton: React.FC<UserControlBtnProps> = ({
    icon: Icon,
    href,
    active

}) => {
    return (
        <Link href={href} className='flex flex-row gap-2 px-3 py-2'>
            <Icon />
        </Link>   
    )
}

export default UserControlButton;