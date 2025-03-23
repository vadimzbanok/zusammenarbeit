import { motion } from "framer-motion";

const pageVariants = {
  initial: { y: "100vh", scale: 0.8 },
  in: { y: 0, scale: 1 },
  out: { y: "-100vh", scale: 0.8 }
};

const pageTransition = {
  type: "spring",
  stiffness: 70,
  damping: 20,
  duration: 0.8
};

const PageTransitionComponent = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    style={{ position: "absolute", width: "100%" }}
  >
    {children}
  </motion.div>
);

export default PageTransitionComponent;
