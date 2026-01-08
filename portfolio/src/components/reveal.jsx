import { useRef } from "react";
import useReveal from "../hooks/useReveal";

export const Reveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <div ref={ref} className={`reveal-base ${className}`}>
      {children}
    </div>
  );
};