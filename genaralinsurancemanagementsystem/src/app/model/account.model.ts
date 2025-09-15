import { User } from "./user.model";

export class Account {
  id!: number;
  amount!: number;
  paymentDate!: Date;
  paymentMode!: string; // UPI, CARD, CASH
  user!: User;
}