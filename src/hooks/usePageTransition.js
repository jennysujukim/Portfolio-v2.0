import { motion } from "framer-motion";
import submark from '../assets/images/submark.png'

const PageTransition = (OriginalContent) => {

    return () => (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }} >
                <OriginalContent />
            </motion.div>
            <motion.div 
                className="slide"
                initial={{ y: "-100%" }}
                animate={{ y: ["-100%", "0%", "0%", "100%"] }}
                transition={{ duration: 2.5, ease: [ 0.5, 1, 0.36, 1 ] }}
            >
                <img src={submark} alt="submark of Jen Kim" className="transition-submark"/>
            </motion.div>
        </>
    )
} 

export default PageTransition