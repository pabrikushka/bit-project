import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import AnimatedArrow from "../../../assets/icons/animatedArrow";

const BannerShare = () => {
    return (
        <motion.div
            className="banner-share position-absolute end-0 top-0 z-10 p-2 d-none d-lg-block"
        >
            <Button className="bit-btn icon-btn banner-btn d-flex p-0 bg-transparent border-0 relative">
                <div className="text-holder uppercase bg-dark text-primary d-flex align-items-center justify-content-center me-1">
                    <span className="btn-text">
                        Share
                    </span>
                </div>
                <div className="icon-holder d-flex align-items-center justify-content-center text-dark">
                    <AnimatedArrow/>
                </div>
            </Button>
        </motion.div>
    )
}

export default BannerShare