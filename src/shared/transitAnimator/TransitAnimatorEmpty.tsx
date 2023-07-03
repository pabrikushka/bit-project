import { motion } from "framer-motion";

interface TransitAnimatorEmptyProps {}

const TransitAnimatorEmpty = (props: TransitAnimatorEmptyProps) => {
  return (
    <>
      <motion.div className="animator-wrapper">
        <motion.div className="animator-holder vw-100 vh-100 mt-0">
          <motion.div className="animator-curtains">
            <motion.div
              className="animator-curtain"
              initial={{
                y: "100%",
              }}
              exit={{
                y: "0",
              }}
              transition={{
                delay: 0.5,
                duration: 0.3,
                ease: "easeOut",
              }}
            ></motion.div>
            <motion.div
              className="animator-curtain"
              initial={{
                y: "100%",
              }}
              exit={{
                y: "0",
              }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeOut",
              }}
            ></motion.div>
            <motion.div
              className="animator-curtain"
              initial={{
                y: "100%",
              }}
              exit={{
                y: "0",
              }}
              transition={{
                delay: 0.1,
                duration: 0.3,
                ease: "easeOut",
              }}
            ></motion.div>
            <motion.div
              className="animator-curtain"
              initial={{
                y: "100%",
              }}
              exit={{
                y: "0",
              }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeOut",
              }}
            ></motion.div>
            <motion.div
              className="animator-curtain"
              initial={{
                y: "100%",
              }}
              exit={{
                y: "0",
              }}
              transition={{
                delay: 0.5,
                duration: 0.3,
                ease: "easeOut",
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TransitAnimatorEmpty;
