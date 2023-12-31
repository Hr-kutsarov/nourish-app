import TopsideNav from "../navigation/topside";
import UserControls from "../navigation/user-controls";
import LogoBox from './LogoBox'

const Header: React.FC = () => {
    return (
        <span className="flex w-full h-[8vh] shadow-md justify-between items-center p-2 relative">
            <span className='flex flex-row items-center gap-2'>
                <LogoBox />
                <TopsideNav />
            </span>
            <span className="flex flex-row mr-4">
                <UserControls />
            </span>
        </span>
    )
}

export default Header;