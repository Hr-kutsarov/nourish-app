import { useMemo } from 'react'
import NavbarLink from './navbar-link'
import { 
    IoIosList,
    IoIosHelpCircleOutline,
    IoIosApps,
    IoMdSearch,
    IoIosFolderOpen

} from 'react-icons/io'

const TopsideNav: React.FC = () => {

    const navbarLinks = useMemo(() => [
        {
             label: 'Search',
             icon: IoMdSearch,
             description: 'test',
             href: '/search',
             active: false
        },
        {
            label: 'Browse',
            icon: IoIosFolderOpen,
            description: 'test',
            href: '/browse',
            active: false
        },
        {
            label: 'Recipes',
            icon: IoIosList,
            description: 'test',
            href: '/recipes',
            active: false
        },
        {
            label: 'Tips',
            icon: IoIosApps,
            description: 'test',
            href: '/tips',
            active: false
        },
        {
            label: 'About',
            icon: IoIosHelpCircleOutline,
            description: 'test',
            href: '/project-info',
            active: false
        }
    ], [])

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