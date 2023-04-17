import React from "react";
import { animateScroll, Link } from "react-scroll";
import { IFaqCategory } from "./types";

interface FaqNavigationProps {
  faqCategories: IFaqCategory[];
}

const FaqNavigation = (props: FaqNavigationProps) => {
  const { faqCategories } = props;

  return (
    <nav className="faq-nav pt-5">
      <ul className="faq-nav-items">
        {faqCategories.map((data: IFaqCategory, index: number) => (
          <li className="history-nav-item" key={`link${index}`}>
            <Link
              className="nav-link small history-nav-link font-aeonik"
              activeClass="active"
              to={data.id.toString()}
              spy={true}
              delay={50}
              smooth={false}
            >
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FaqNavigation;
