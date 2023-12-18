import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { useEffect } from "react";

const ViewBasedAnimation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true}); // once will animate only once 

//   useEffect(() => {
//     console.log("hello world -> ", inView);
//   }, [inView]);

  return (
    <>
      <div
        style={{
          height: "20vh",
        }}
      />
      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: inView ? "blue" : "red",
          transition: "1.5s ease-in background",
        }}
      />
    </>
  );
};

export default ViewBasedAnimation;
