import { motion } from "framer-motion";

export default function FadeIn({ children, component = "div", ...restProps }) {
  const MotionEl = motion.create(component);
  return (
    <MotionEl
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      {...restProps}
    >
      {children}
    </MotionEl>
  );
}
