
interface Props {
    children: React.ReactNode
}

const Component: React.FC<Props> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Component