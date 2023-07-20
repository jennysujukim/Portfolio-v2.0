import { motion } from "framer-motion";
import submark from '../assets/images/submark.png'

const SlideTransition = (OriginalContent) => {

    return () => (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }} 
            >
                <OriginalContent />
            </motion.div>
            <motion.div 
                className="slide"
                initial={{ y: "-100%" }}
                animate={{ y: ["-100%", "0%", "0%", "100%"] }}
                transition={{ duration: 1.2, ease: [ 0.5, 0.7, 0.36, 0.7 ] }}
            >
                <img 
                    src={submark} 
                    alt="submark of Jen Kim" 
                    className="transition-submark"
                />
            </motion.div>
        </>
    )
} 

export default SlideTransition