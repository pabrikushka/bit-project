import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import FaqGroup from "./FaqGroup";
import FaqNavigation from "./FaqNavigation";
import { useQuery } from "@apollo/client";
import { GET_ALL_FAQ_CATEGORIES } from "../../services/graphql/faqCategoriesQuery";
import { GET_ALL_FAQS } from "../../services/graphql/faqsQuery";
import { categoryItemToIFaqCategory, createFaqGroups } from "./helpers";
import { IFaqCategory, IFaqGroup } from "./types";
import TransitAnimator from "../../shared/TransitAnimator";

const FaqWidget = (props: any) => {
  const [faqCategories, setFaqCategories] = useState<IFaqCategory[]>([]);
  const [faqGroups, setFaqGroups] = useState<IFaqGroup[]>([]);

  const { data: queryDataCategories } = useQuery(GET_ALL_FAQ_CATEGORIES, { errorPolicy: "all" });
  const { data: queryDataFaqs } = useQuery(GET_ALL_FAQS, { errorPolicy: "all" });

  useEffect(() => {
    if (queryDataCategories) {
      const categories = queryDataCategories.faqCategoriesCollection.items.map(categoryItemToIFaqCategory);
      setFaqCategories(categories);
    }
  }, [queryDataCategories]);

  useEffect(() => {
    if (queryDataFaqs) {
      const groups = createFaqGroups(queryDataFaqs);
      setFaqGroups(groups);
    }
  }, [queryDataFaqs]);

  return (
    <>
      <motion.main
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
                      skewY: -30,
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
                <FaqNavigation faqCategories={faqCategories} />
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
                  {faqGroups.map((item: IFaqGroup) => (
                    <FaqGroup faqGroup={item} key={item.groupId} />
                  ))}
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </motion.main>
      <TransitAnimator image={null} />
    </>
  );
};

export default FaqWidget;
