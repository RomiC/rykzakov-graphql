import express from 'express';
import expressGraphQL from 'express-graphql';

import { schema } from './schema/index';

const root = {
  orders: () => [
    {
      id: '56',
      deliveryId: 1,
      deliveryPrice: 200,
      paymentNotAvailable: false,
      paymentMethodId: 9,
      paid: true,
      paymentDate: new Date('2011-06-06 21:26:45'),
      closed: false,
      date: new Date('2011-06-03 20:30:11'),
      name: 'Александр Селезнёв',
      address: '394088 Воронеж,ул.Вл. Невского д. 26 кв. 70',
      phone: '',
      email: 'fry85@list.ru',
      payer: null,
      comment: 'заказ отправлен, № отправления EA195623187RU',
      status: 2,
      url: '43e3e3670cba3d2cabe35e3980809b61',
      paymentDetails: '',
      ip: '46.72.234.74',
      totalPrice: 4190,
      note: '',
      discount: 0,
      couponDiscount: 0,
      couponCode: '',
      separateDelivery: false,
      modified: new Date('2014-03-16 00:10:19')
    }
  ]
};

const app = express();
app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);

process.stdout.write('Running a GraphQL API server at localhost:4000/graphql\n');