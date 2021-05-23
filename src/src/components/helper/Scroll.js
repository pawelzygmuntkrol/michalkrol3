import { useEffect } from "react";

export const Scroll = () => {
  window.scrollTo(0, 0);
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
};
