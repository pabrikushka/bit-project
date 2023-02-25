import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const enviroment = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT;
const token = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
const cms_url = `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${enviroment}`;

const httpLink = new HttpLink({
  uri: cms_url,
  headers: {
    authorization: `Bearer ${token}`,
  },
});

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
});

export default apolloClient;