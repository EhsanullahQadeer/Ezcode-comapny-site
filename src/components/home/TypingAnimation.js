import { TypeAnimation } from "react-type-animation";

export const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "leveraging their existing data and",
        0,
        "leveraging their existing data and automate with custom software solutions.",
        3000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-navy-blue sm:text-32 text-27 font-bold"
    />
  );
};
