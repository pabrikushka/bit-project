import _ from "lodash";
import { IFaq, IFaqCategory, IFaqGroup } from "./types";

const categoryItemToIFaqCategory = (categoryItem: any): IFaqCategory => {
  return {
    id: categoryItem.sys.id,
    name: categoryItem.name,
  };
};

const faqItemToIFaq = (faqItem: any): IFaq => {
  return {
    id: faqItem.sys.id,
    name: faqItem.name,
    content: faqItem.content,
    categoryId: faqItem.category.sys.id,
    category: categoryItemToIFaqCategory(faqItem.category),
  };
};

const createFaqGroups = (queryDataFaqs: any): IFaqGroup[] => {
  const faqs = queryDataFaqs.faqItemsCollection.items.map(faqItemToIFaq);
  const groupedFaqs = _.groupBy(faqs, "categoryId");

  const faqGroups = _.toPairs<[string, IFaq[]][]>(groupedFaqs).map((pair) => {
    return {
      groupId: `gr${pair[0]}`,
      faqs: pair[1] as unknown as IFaq[],
      category: (pair[1] as unknown as IFaq[])[0].category,
    };
  });

  const faqGroupsOrdered = _.orderBy(faqGroups, item => item.category.name, ['asc'] );

  return faqGroupsOrdered;
};

export { categoryItemToIFaqCategory, createFaqGroups };
