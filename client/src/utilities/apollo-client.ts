import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'

// GraphQL叩くためのクライアント作成
const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache()
})

export { client }
