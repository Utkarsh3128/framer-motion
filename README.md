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
**In the provided code snippet, the <motion.div> component from the Framer Motion library is used to create a dynamic and animated div element.The properties used are:**

1. **Initial**:
 ```javascript
 initial={{
  rotate: "0deg",
  scale: 0,
  y: 0,
 }}
 ```
_The initial prop specifies the initial state of the component before any animations occur._

2. **animate**:
```javascript
animate={{
 rotate= "180deg",
 scale: 1,
 y: [0, 150, -150, -150, 0],
}}
```
_The animate prop defines the target state of the component during the animation_

3. **exit**
```javascript
exit={{
  rotate: "0deg",
  scale: 0,
  y: 0,
}}
 ```
_The exit prop specifies the state of the component when it is being removed_

4. **transition**
```javascript
transition={{
 duration: 1,
 ease: "backInOut",
 times: [0, 0.25, 0.5, 0.85, 1]
}}
```
_The transition prop configures the timing and easing of the animation:_
- **duration: 1**: The duration of the animation is set to 1 second.
- **ease: "backInOut"**: The easing function used for the animation. In this case, it's a "backInOut" easing, which combines a back ease-in and a back ease-out effect.
- **times: [0, 0.25, 0.5, 0.85, 1]**: Keyframes at which different parts of the animation occur. It specifies the progression of the animation over time, allowing for more complex and controlled animations.
