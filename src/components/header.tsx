import { PropsWithChildren } from 'react'

const Header = ({ children }: PropsWithChildren) => (
    <header {...{ className: 'header' }}>
        {children}
    </header>
)

export default Header