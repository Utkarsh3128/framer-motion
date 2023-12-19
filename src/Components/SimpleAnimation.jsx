import { motion } from "framer-motion";

const SimpleAnimation = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 0],
          borderRadius: ["0%", "50%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          width: 150,
          height: 150,
          background: "blue",
        }}
      ></motion.div>
    </div>
  );
};

export default SimpleAnimation;
