import { useState, useEffect } from "react";

const UseIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState();
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    //  return () => {
    //    second
    //  }
  }, []);

  return isDesktop;
};

export default UseIsDesktop;
