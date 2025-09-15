import { ReceiptModel } from "./receipt.model";


export class User {

    id!: number;
    name!: string;
    email!: string;
    password!: string;
    role!: string;
    phone!:string
    photo!: string;
    receipts!: ReceiptModel;
   

}
