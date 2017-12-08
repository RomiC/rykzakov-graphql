export const OrderType = `
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

export const OrderQuery = `
  orders: [Order]
`;