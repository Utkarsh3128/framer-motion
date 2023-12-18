import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="btn"
        layout // if true this component will automatically animate to its new position when its layout changes
      >
        Click Here
      </motion.button>

      {/* AnimatePresence allows components to animate out when they're removed from the React tree. */}
      <AnimatePresence mode="popLayout">  {/* if true then show div else don't show */}
        {isVisible && ( 
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicOfMotion;
