# Framer-Motion

## In this project we will cover how to use Framer Motion
Framer Motion is a powerful motion library for React

### The ```<motion/>``` component
The core of Motion is the motion component. It offers props that allows us to 
- Animate
- Drag
- Respond to gestures
- Deeply animate via variants

## File Structure

### ```BasicsOfAnimation.jsx```
There is a motion component for every HTML and SVG element. 
For eg, in this file we have ```<motion.div/>``` & ```<motion.button/>```
``` javascript
<motion.div
  initial={{
   rotate: '0deg',
   scale: 0,
   y: 0,
  }}
  animate={{
   rotate: "180deg",
   scale: 1,
   y: [0, 150, -150, -150, 0],
  }}
></motion.div>
```

**AnimatePresence**
