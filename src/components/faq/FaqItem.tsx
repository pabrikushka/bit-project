import React from "react";
import { Accordion } from "react-bootstrap";
import ArrowIcon from "../../assets/icons/arrow";

interface FaqItemProps {
    eventKey: any;
    faqTitle: any;
    children: any;
  }
  
const FaqItem = (props: FaqItemProps) => {
    const { eventKey,faqTitle, children } = props;
    return (
        <Accordion.Item eventKey={eventKey} className="faq-accordion">
            <Accordion.Header className="">
                <h3 className="lead mb-0 pe-3">What is this project?</h3>
                <ArrowIcon/>
            </Accordion.Header>
            <Accordion.Body>
                {children}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default FaqItem