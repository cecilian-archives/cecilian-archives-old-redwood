import { useEffect } from "react";

const useClickOutside = (ref, isOpen, callback) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!isOpen) return;
      if (!ref?.current?.contains(event.target)) {
        callback();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, ref]);
};

export default useClickOutside;
