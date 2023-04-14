import React from "react";
import { motion } from "framer-motion";
import { IArtPiece } from "./types";
import { createBTCLebel, formatEventDate } from "../../shared/artHelpers";

interface ArtHeaderProps {
  artPiece: IArtPiece | undefined;
}

const ArtHeader = (props: ArtHeaderProps) => {
  const { artPiece } = props;

  if(!artPiece) return null;

  return (
    <motion.header className="title-block art-title-block">
      <motion.div className="art-title-holder pb-4">
        <motion.h1
          className="art-title h1-mini"
          initial={{
            y: 300,
            opacity: 0,
            skewY: -30,
          }}
          animate={{
            y: 0,
            opacity: 1,
            skewY: 0,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
        >
          {artPiece.title}
        </motion.h1>
      </motion.div>

      <motion.div
        className="art-details d-flex align-items-end justify-content-between pt-4 pt-lg-2"
        initial={{
          y: 40,
          opacity: 0,
          // skewY: -30
        }}
        animate={{
          y: 0,
          opacity: 1,
          skewY: 0,
          transition: {
            delay: 0.2,
            duration: 0.3,
            ease: "easeOut",
          },
        }}
      >
        <h2 className="h3 font-aeonik text-light-70">{formatEventDate(artPiece.eventDate)}</h2>
        <h3 className="h3 font-aeonik text-light-70">{createBTCLebel(artPiece.btcPrice)}</h3>
      </motion.div>
    </motion.header>
  );
};

export default ArtHeader;
