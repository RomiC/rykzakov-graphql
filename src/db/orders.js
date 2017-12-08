import * as Sequelize from 'sequelize';
import { db } from './index';

export const orders = db.define(
  'order',
  {
    id: {
      type: Sequelize.BIGINT(20),
      autoIncrement: true,
      primaryKey: true
    },
    delivery_id: {
      type: Sequelize.INT(11),
      allowNull: true
    },
    delivery_price: {
      type: Sequelize.FLOAT(11, 2),
      defaultValue: 0.0
    },
    payment_not_available: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    payment_method_id: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    paid: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    payment_date: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    closed: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    date: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    user_id: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    name: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    address: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    phone: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    email: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    payer: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    comment: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    status: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    url: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    payment_details: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    ip: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    total_price: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    note: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    discount: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    coupon_discount: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    coupon_code: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    separate_delivery: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    modified: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    market_order_id: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
    market_status: {
      type: ,
      defaultValue: ,
      primaryKey:
    },
  },
  {}
);