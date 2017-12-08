import { buildSchema } from 'graphql';

import { OrderType, OrderQuery } from './orders';

export const schema = buildSchema(`
  ${OrderType}

  type Query {
    ${OrderQuery}
  }
`);
