import * as Sequelize from 'sequelize';
import { DB_STRING } from './constants';

export const db = new Sequelize(DB_STRING);