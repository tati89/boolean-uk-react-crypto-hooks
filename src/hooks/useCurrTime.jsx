import { useEffect, useState } from "react";

function useCurrTime() {
  const [currTime, setCurrTime] = useState(currentTime());

  function currentTime() {
    return Math.round(Date.now() / 1000);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime((current) => current + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setCurrTime]);
  return { currTime };
}

export default useCurrTime;
