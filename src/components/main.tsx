import { PropsWithChildren } from "react"
import { motion } from "motion/react"

const Main = ({ children }: PropsWithChildren) => {
    return (
        <motion.div
            {...{
                className: "main",
                initial: "hidden",
                animate: "visible",
                exit: "exit",
                variants: {
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.2 },
                    },
                    exit: { opacity: 0, y: -10 },
                },
            }}
        >
            {children}
        </motion.div>
    )
}

export default Main