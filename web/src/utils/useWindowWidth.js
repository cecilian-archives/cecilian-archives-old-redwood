import { useState, useEffect } from "react";

export default function () {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );

  useEffect(() => {
    const handleResize = () =>
      setWidth(typeof window !== "undefined" && window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}
