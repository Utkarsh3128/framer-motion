import { motion, useAnimationControls, MotionConfig } from "framer-motion";
import { useState } from "react";

const AnimationControls = () => {
  const [value, setValue] = useState(true);
  const control = useAnimationControls();

  const handleClick = () => {
    // control.start("flip");
    value ? control.start("flip") : control.start("exit");
    setValue(!value)
  };
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="btn">
        Flip it
      </button>
      <MotionConfig transition={{ duration: 0.75, ease: "backInOut" }}>
        <motion.div
          style={{
            width: 150,
            height: 150,
            background: "black",
          }}
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "360deg",
              scale: 1.15,
            },
            exit: {
              rotate: "0deg",
              scale: 1,
            },
          }}
          initial="initial"
          animate={control}
          exit="exit"
        ></motion.div>
      </MotionConfig>
    </div>
  );
};

export default AnimationControls;
