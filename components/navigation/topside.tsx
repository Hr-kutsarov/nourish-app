import { useMemo } from 'react'
import NavbarLink from './navbar-link'
import { 
    IoIosList,
    IoIosHelpCircleOutline,
    IoIosApps,
    IoMdSearch,
    IoIosFolderOpen

} from 'react-icons/io'

import {usePathname} from 'next/navigation';

const TopsideNav: React.FC = () => {
    const pathname = usePathname()

    const navbarLinks = useMemo(() => [
        {
             label: 'Search',
             icon: IoMdSearch,
             description: 'test',
             href: '/search',
             active: pathname === '/search'
        },
        {
            label: 'Browse',
            icon: IoIosFolderOpen,
            description: 'test',
            href: '/browse',
            active: pathname === '/browse'
        },
        {
            label: 'Recipes',
            icon: IoIosList,
            description: 'test',
            href: '/recipes',
            active: pathname === '/recipes'
        },
        {
            label: 'Tips',
            icon: IoIosApps,
            description: 'test',
            href: '/tips',
            active: pathname === '/tips'
        },
        {
            label: 'About',
            icon: IoIosHelpCircleOutline,
            description: 'test',
            href: '/project-info',
            active: pathname === '/project-info'
        }
    ], [pathname])

    return (
        <nav className='
        flex 
        flex-row
        justify-between
        items-center
        gap-6
        overflow-auto
        mx-4
        '>
           {navbarLinks.map((i) => <NavbarLink 
            key={i.label} 
            label={i.label}
            icon={i.icon}
            description={i.description}
            href={i.href}
            active={i.active}
             />)}
        </nav>
    )
}

export default TopsideNav