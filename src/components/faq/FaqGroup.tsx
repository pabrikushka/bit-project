import React from "react";
import FaqItem from "./FaqItem";
import { Accordion } from "react-bootstrap";
import { IFaq, IFaqGroup } from "./types";

interface FaqGroupProps {
  faqGroup: IFaqGroup;
}

const FaqGroup = (props: FaqGroupProps) => {
  const { faqGroup } = props;
  return (
    <section id={faqGroup.category.id} className="pb-5 pt-5">
      <header>
        <h2 className="fw-400 text-uppercase mb-3">{faqGroup.category.name}</h2>
        <Accordion>
          {faqGroup.faqs.map((item: IFaq) => (
            <FaqItem faq={item} key={item.id} />
          ))}
        </Accordion>
      </header>
    </section>
  );
};

export default FaqGroup;
