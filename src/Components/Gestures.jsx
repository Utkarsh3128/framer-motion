import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig transition={{ duration: 0.125, ease: "easeIn" }}>  {/* this helps to prevent applying transition over and over again */}
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ color: "red", scale: 0.95, rotate: "2.5deg" }}
          className="btn"
        >
          Click me
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.175,
          }}
          whileTap={{ color: "blue", scale: 0.95, rotate: "-2.5deg" }}
          className="btn"
          style={{ background: "red" }}
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
