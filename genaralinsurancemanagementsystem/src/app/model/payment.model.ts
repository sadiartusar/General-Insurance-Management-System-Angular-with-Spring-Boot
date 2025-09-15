import { User } from "./user.model";

export class Payment {
  id?: number;
  amount?: number;
  paymentDate?: Date;
  paymentMode?: string; // UPI, CARD, CASH
  user?: User;
}