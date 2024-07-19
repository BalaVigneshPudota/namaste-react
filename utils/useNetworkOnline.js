import { useEffect, useState } from "react";

const useNetworkOnline = () => {
  const [isUserOnline, setIsUserOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setIsUserOnline(false);
    });
    window.addEventListener("online", (event) => {
      setIsUserOnline(true);
    });
  }, []);

  return isUserOnline;
};

export default useNetworkOnline;
