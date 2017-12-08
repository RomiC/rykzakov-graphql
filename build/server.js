'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var expressGraphQL = _interopDefault(require('express-graphql'));
var graphql = require('graphql');

const OrderType = `
  type Order {
    # Order ID
    id: ID!

    # Delevery ID
    deliveryId: Int

    # Delivery price
    deliveryPrice: Int!

    # Flag showing if payment is available for the customer
    paymentNotAvailable: Boolean!

    # Payment method ID
    paymentMethodId: Int

    # Flag of pyament status: paid or not
    paid: Boolean!

    # Date of a payment
    paymentDate: String!

    # Flag
    closed: Boolean!

    # Order creation date
    date: String

    # User ID
    userId: Int!

    # Contact's name
    name: String!

    # Contact's address
    address: String!

    # Contact's phoneInt
    phone: String!

    # Contact's email
    email: String!

    # Contact's payer info
    payer: String

    # User's comment for the order
    comment: String!

    # Order's status
    status: Int!

    # Order's url hash
    url: String

    # Payment's info
    paymentDetails: String!

    # Contact's ip
    ip: String!

    # Order's total amount
    totalPrice: Int!

    # Admin's note for the order
    note: String!

    # Amount of the discount
    discount: Int!

    # Coupon's discount value
    couponDiscount: Int!

    # Applied coupon
    couponCode: String!

    # Flag of separately paid of delivery
    separateDelivery: Boolean!

    # Modifying date
    modified: String!

    # Yandex market's id
    marketOrderId: Int

    # Yandex market's order status
    marketStatus: Int
  }
`;

const OrderQuery = `
  orders: [Order]
`;

const schema = graphql.buildSchema(`
  ${OrderType}

  type Query {
    ${OrderQuery}
  }
`);

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
