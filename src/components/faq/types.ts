export interface IFaqCategory {
    id: string,
    name: string
  }

export interface IFaq {
    id: string,
    name: string,
    content: string,
    categoryId: string,
    category: IFaqCategory
}

export interface IFaqGroup {
    groupId: string,
    category: IFaqCategory,
    faqs: IFaq[]
  }