import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import AnimatedArrow from "../../../assets/icons/animatedArrow";
import AnimatedShare from "../../../assets/icons/animatedShare";

interface BannerShareProps {
    isFullScreenBanner: boolean;
}

const BannerShare = (props: BannerShareProps) => {
    const { isFullScreenBanner} = props;

    const animationSettings = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 0.2,
            duration: 0.4,
            type: "spring",
            mass: 0.2,
        },
    };

    return (
        <motion.div
            className="banner-share position-absolute end-0 top-0 z-10 p-3 d-none d-lg-block"
            initial={isFullScreenBanner ? false : animationSettings.initial}
            animate={isFullScreenBanner ? false : animationSettings.animate}
            transition={isFullScreenBanner ? undefined : animationSettings.transition}
        >
            <Button className="bit-btn icon-btn banner-btn d-flex p-0 bg-transparent border-0 relative">
                <div className="text-holder uppercase bg-dark text-primary d-flex align-items-center justify-content-center me-1">
                    <span className="btn-text">
                        Share
                    </span>
                </div>
                <div className="icon-holder d-flex align-items-center justify-content-center">
                    <AnimatedShare />
                </div>
            </Button>
        </motion.div>
    )
}

export default BannerShare