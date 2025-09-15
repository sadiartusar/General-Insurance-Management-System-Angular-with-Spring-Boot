import { BillModel } from "./bill.model";


export class ReceiptModel {
    id?: number;
    issuingOffice?: string;
    classOfInsurance?: string;
    date?: Date;
    modeOfPayment?: string;
    issuedAgainst?: string;

    fireBill?: BillModel;
}
