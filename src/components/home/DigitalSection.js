// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export const DigitalSection = () => {
//   const [hovered, setHovered] = useState(false);

//   const handleHover = () => {
//     setHovered(true);
//     setTimeout(() => {
//       setHovered(false);
//     }, 2000); // Adjust timing as needed
//   };

//   const letters = "EZ KODE".split("");

//   const letterVariants = {
//     initial: { opacity: 0, x: 100 },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: -100,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   return (
//     <div className="overflow-hidden" style={{ height: "max-content" }}>
//       <h1
//         data-aos="fade-up"
//         className={`text-medium-blue text-82 font-bold`}
//         onMouseEnter={handleHover}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {letters.map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={letterVariants}
//             initial="initial"
//             animate={hovered ? "animate" : "initial"}
//             exit="exit"
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </h1>
//     </div>
//   );
// };

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1>Box {num} </h1>
    </motion.div>
  );
};

export const DigitalSection = () => {
  return (
    <div className="App">
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
    </div>
  );
}
