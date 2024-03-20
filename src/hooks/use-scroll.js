// import { useStore } from "lib/store";
import { useEffect } from "react";
import { useStore } from "../lib/store";

export function useScroll(callback, deps = []) {
  const handleLenis = ({ lenis }) => lenis;
  const lenis = useStore(handleLenis);

  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", callback);
    lenis.emit();

    return () => {
      lenis.off("scroll", callback);
    };
  }, [lenis, callback, [...deps]]);
}
