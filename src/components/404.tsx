import React from "react"
import { motion } from "framer-motion"
import TransitAnimator from "../shared/TransitAnimator";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <motion.main
                className="not-found py-5 mb-5"
                initial={{
                    y: "0rem",
                    scale: 1,
                    opacity: 1,
                }}
                exit={{
                    y: "-4rem",
                    scale: 0.8,
                    opacity: 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    scale: {
                        duration: 1,
                    },
                }}
            >

                <motion.img
                    src={require("../assets/images/404.gif")}
                />
                <h1 className="h3 text-uppercase  ">
                    Page not found
                </h1>
                <div className="mt-5">
                    <Link className="btn btn-primary bit-btn" to={"/"}>
                        Back to homepage
                    </Link>
                </div>

            </motion.main>
            <TransitAnimator image={null} />
        </>
    );
}