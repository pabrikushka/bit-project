import React from "react";
import FaqItem from "./FaqItem";
import { Accordion } from "react-bootstrap";

interface FaqGroupProps {
    faqGroupId: any;
    faqGroupTitle: any
  }

const FaqGroup = (props: FaqGroupProps) => {
    const { faqGroupId,faqGroupTitle } = props;
    return (
        <section id={faqGroupId} className="pb-5 pt-5">
            <header>
                <h2 className="fw-400 text-uppercase mb-3">{faqGroupTitle}</h2>
                <Accordion>
                    <FaqItem faqTitle={"What is this project?"} eventKey="0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat suscipit rem, consequatur repellendus repudiandae ipsum atque! Quod numquam, aliquid id voluptatum odit rem reprehenderit adipisci quae nihil, repellat eligendi unde!
                    </FaqItem>

                    <FaqItem faqTitle={"What is this project?"} eventKey="1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime accusamus rerum magnam dolorum vel quo nostrum! Veniam incidunt ut dolorum repellendus similique cumque culpa magni nisi odit mollitia. Veniam.
                    </FaqItem>
                    <FaqItem faqTitle={"What is this project?"} eventKey="2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime accusamus rerum magnam dolorum vel quo nostrum! Veniam incidunt ut dolorum repellendus similique cumque culpa magni nisi odit mollitia. Veniam.
                    </FaqItem>
                    
                </Accordion>
            </header>
        </section>
    )
}

export default FaqGroup