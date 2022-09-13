import { useEffect, useState } from "react";

export const Mobile = () => {
  const [Width, SetWidth] = useState(window.innerWidth);
  const IsMobile = () => {
    return Width < 1023;
  };

  useEffect(() => {
    const handleWindowResize = () => SetWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return IsMobile();
};
