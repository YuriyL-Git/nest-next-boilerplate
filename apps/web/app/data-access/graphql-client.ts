import { getGraphqlClient } from '@next-nest-boilerplate/web/data-access-graphql';

export const gql = getGraphqlClient('http://localhost:3333/graphql');
