import { useEffect } from "react"

export default function useScrollOnTop() {

    useEffect(() => {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          // @ts-ignore
          behavior: "instant", // Optional if you want to skip the scrolling animation
        });
      }, []);
  
  }