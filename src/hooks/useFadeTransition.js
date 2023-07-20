import { motion } from "framer-motion";

const FadeTransition = (OriginalContent) => {

    return () => (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }} >
                <OriginalContent />
            </motion.div>
        </>
    )
} 

export default FadeTransition