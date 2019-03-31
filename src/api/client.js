import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { AUTH_TOKEN } from './constants'

const httpLink = new HttpLink({ uri: 'http://localhost:4567/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem(AUTH_TOKEN);

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      // Todo: Might need to add Bearer here.
      authorization: token ? `${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

export default client;