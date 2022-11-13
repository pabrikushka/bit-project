import React from "react";

const mobileWidth = 992;

export default function useWindowParams() {
    const notBrowser = typeof window === "undefined";
    const [windowSize, setWindowSize] = React.useState({
        windowWidth: notBrowser ? 1281 : window.innerWidth,
        windowHeight: notBrowser ? 801 : window.innerHeight,
        isMobile: notBrowser? false : window.innerWidth < mobileWidth
    });

    const changeWindowSize = () => {
        setWindowSize({ 
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            isMobile: window.innerWidth < mobileWidth
        });
    }

    React.useEffect(() => {
        window.addEventListener("resize", changeWindowSize);

        return () => {
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);

    return windowSize;
}