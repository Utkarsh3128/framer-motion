import "./App.css";
import AnimationControls from "./Components/AnimationControls";
import BasicOfMotion from "./Components/BasicOfMotion";
import Gestures from "./Components/Gestures";
import ScrollBasedAnimation from "./Components/ScrollBasedAnimation";
import SimpleAnimation from "./Components/SimpleAnimation";
import ViewBasedAnimation from "./Components/ViewBasedAnimation";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(245,245,245)", "rgb(1,245,13)"]
  ); // this will animate the scrollYProgress from 0% to 100% with responding color

  return (
    <>
      <motion.div
        style={{
          scaleX,
          // background: "blue",
          backgroundColor,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "15px",
        }}
      />
      <BasicOfMotion />
      <Gestures />
      <SimpleAnimation/>
      <AnimationControls />
      <ViewBasedAnimation />
      <ScrollBasedAnimation />
    </>
  );
}

export default App;
