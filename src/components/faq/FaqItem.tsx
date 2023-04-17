import React from "react";
import { Accordion } from "react-bootstrap";
import ArrowIcon from "../../assets/icons/arrow";
import { IFaq } from "./types";
import ReactMarkdown from "react-markdown";
import { adjustLongText } from "../../shared/markdownHelpers";

interface FaqItemProps {
  faq: IFaq;
}

const FaqItem = (props: FaqItemProps) => {
  const { faq } = props;
  return (
    <Accordion.Item eventKey={faq.id} className="faq-accordion">
      <Accordion.Header className="">
        <h3 className="lead mb-0 pe-3">{faq.name}</h3>
        <ArrowIcon />
      </Accordion.Header>
      <Accordion.Body>
        <ReactMarkdown>{adjustLongText(faq.content)}</ReactMarkdown>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default FaqItem;
