import { useEffect, useRef } from "react";

export const useOutsideClick = (handleEvent) => {
  const ref = useRef();

  useEffect(() => {
    const callback = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handleEvent(e);
    };
    document.addEventListener("click", callback);

    return () => document.removeEventListener("click", callback);
  }, [handleEvent]);

  return ref;
};
