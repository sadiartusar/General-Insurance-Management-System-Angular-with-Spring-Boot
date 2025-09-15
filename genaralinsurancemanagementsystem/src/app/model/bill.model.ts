import { PolicyModel } from "./policy";


export class BillModel {
    "id"!: number;
    "fire"!: number
    "rsd"!: number;
    "netPremium"!: number;
    "tax"!: number;
    "grossPremium"!: number;

    firePolicy!: PolicyModel;

}