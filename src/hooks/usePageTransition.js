import { motion } from "framer-motion";

const PageTransition = (OriginalContent) => {

    // const styles = {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     color: 'red',
    //     fontSize: '20px',
    //     height: '100%'
    //   };
    return () => (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.5 }}>
                <OriginalContent />
            </motion.div>
            <motion.div 
                className="slide"
                initial={{ y: "-100%" }}
                // animate={{ y: ["-100%", "0%", "0%", "100%"] }}
                animate={{ y: ["-100%", "0%", "100%"] }}
                exit={{ y: "-100%" }}
                // transition={{ delay: 0.3, duration: 2, ease: [ 0.5, 1, 0.36, 1 ] }}
                transition={{ delay: 0.3, duration: 2, ease: [ 0.22, 1, 0.36, 1 ] }}
            >
                {/* <p style={styles}>JENKIM</p> */}
            </motion.div>
        </>
    )
} 

export default PageTransition