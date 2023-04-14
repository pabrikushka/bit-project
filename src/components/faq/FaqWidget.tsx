import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import FaqGroup from "./FaqGroup";
import FaqNavigation from "./FaqNavigation";

const FaqWidget = (props: any) => {
    return (
        <>
            <motion.main>
                <Container className="px-xl-5">
                    <Row>
                        <Col xs={12}>
                            <motion.header className="title-block h-auto mb-5 ">
                                <motion.div className="pb-4 overflow-hidden">
                                    <motion.h1
                                        className="h1-mini"
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
                                        Answers to your questions
                                    </motion.h1>
                                </motion.div>
                                <motion.div className=" overflow-hidden">
                                    <motion.h2
                                        className="lead text-light-70"
                                        initial={{
                                            y: 40,
                                            opacity: 0,
                                            skewY: -30
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                            skewY: 0,
                                            transition: {
                                                duration: 0.4,
                                                delay: 0.1,
                                                ease: "easeOut",
                                            },
                                        }}
                                    >
                                        Frequently asked questions
                                    </motion.h2>
                                </motion.div>
                            </motion.header>
                        </Col>
                    </Row>
                    <motion.div
                        initial={{
                            y: 50,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                delay: 0.2,
                                ease: "easeOut",
                            },
                        }}
                    >
                        <Row>
                            <Col xs={12} md={4} lg={3}>
                                <FaqNavigation />
                            </Col>

                            <Col xs={12} md={8} lg={9}>
                                <motion.div
                                    initial={{
                                        y: 50,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.3,
                                            delay: 0.25,
                                            ease: "easeOut",
                                        },
                                    }}
                                >
                                    <FaqGroup faqGroupId={"General"} faqGroupTitle={"General"} />
                                    <FaqGroup faqGroupId={"Book"} faqGroupTitle={"The Bit Book"} />
                                    <FaqGroup faqGroupId={"Events"} faqGroupTitle={"Events"} />
                                </motion.div>
                            </Col>
                        </Row>
                    </motion.div>

                </Container>
            </motion.main>
        </>
    )
}

export default FaqWidget;