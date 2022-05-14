import { OrderItem } from './order-item';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from '@tejb/users';

export class Order {
  id?: string;
  orderItems?: any;
  shippingAddress1?: string;
  shippingAddress2?: string;
  city?: string;
  zip?: string;
  country?: string;
  phone?: string;
  status?: number;
  totalPrice?: string;
  user?: any;
  dateOrdered?: string;
}


export interface Status {
  value: string;
  viewValue: string;
}