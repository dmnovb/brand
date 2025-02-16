interface Props {
    children: React.ReactNode
    className?: string
}

const Section = ({ children, className }: Props) => {
    return (
        <div {...{ className }}>
            {children}
        </div>
    )
}

export default Section