import React from "react";
import { motion } from "framer-motion";
import honeybadgerGlitch from "../../../assets/images/honeybadger-glitch.jpg";

const BannerGlitch = () => {
    return (
        <motion.div
            className="banner-glitch position-absolute bg-black w-100 h-100 start-0 top-0"
        >

            <svg className="Playground__svg" viewBox="0 0 2000 1000">
                <defs>
                    <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">

                        <feMorphology operator="dilate" radius="10 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="morphology1"></feMorphology>
                    </filter>
                    <filter id="filter-2" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">

                        <feMorphology operator="dilate" radius="10 2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="morphology1"></feMorphology>
                    </filter>
                    <filter id="filter-3" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">

                        <feMorphology operator="dilate" radius="15 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="morphology1"></feMorphology>
                    </filter>
                </defs>

                <image x="0%" y="0%" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref={honeybadgerGlitch} id="my-image"></image>
            </svg>
        </motion.div>
    )
}

export default BannerGlitch