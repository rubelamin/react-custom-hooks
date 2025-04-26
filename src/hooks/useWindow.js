import { useEffect, useState } from "react";

function useWindow() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  

  useEffect(() => {
      const handler = () => {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight)
      }
      
      handler() // For first time to set the height and width

      window.addEventListener("resize", handler);

      return ()=> window.removeEventListener("resize", handler)
  }, []);


  return {
    windowHeight,
    windowWidth,
  };
}

export default useWindow;
