import React, { useEffect, useState } from "react";

export default function useCountDown() {
  const [secondsLeft, setSeconddsLeft] = useState(0);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timeout = setTimeout(() => {
      setSeconddsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  function start(seconds) {
    setSeconddsLeft(seconds);
  }

  return { secondsLeft, start };
}
