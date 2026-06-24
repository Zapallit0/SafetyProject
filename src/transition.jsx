import { motion } from "framer-motion";
import { useEffect } from "react";

const transition = (Component) => {
  function TransitionedPage(props) {
    // Reset scroll on mount. With AnimatePresence mode="wait" the new page
    // mounts after the old one exits, while the curtain still covers the
    // screen — so the jump to the top is hidden.
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <>
        <Component {...props} />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  }

  TransitionedPage.displayName = `Transitioned(${Component.displayName || Component.name || "Component"})`;
  return TransitionedPage;
};

export default transition;
