import { useEffect, useReducer, useRef, useState } from "react";
import { LAPTOP, TABLET } from "../constants/variables";

export const useMounted = () => {
  const mounted = useRef(true);
  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
  const isMounted = () => {
    return mounted.current;
  };
  return { isMounted };
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    function updateBreakpoint() {
      if (typeof window === "undefined") {
        return;
      }

      const isTablet =
        window.innerWidth < LAPTOP && window.innerWidth >= TABLET;
      const isDesktop = window.innerWidth >= LAPTOP;
      let value = "mobile";

      if (isTablet) {
        value = "tablet";
      }

      if (isDesktop) {
        value = "laptop";
      }

      breakpoint !== value && setBreakpoint(value);
    }

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  });

  return breakpoint;
};

/* todo: refactor */
export const useForceUpdate = () => {
  return useReducer(() => ({}), {})[1];
};
