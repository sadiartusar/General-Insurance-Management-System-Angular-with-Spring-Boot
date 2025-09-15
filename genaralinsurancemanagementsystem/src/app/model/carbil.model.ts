import { CarModel } from "./car.model";

export class CarBillModel{
     "id"!: number;
    "carRate"!: number
    "rsd"!: number;
    "netPremium"!: number;
    "tax"!: number;
    "grossPremium"!: number;
     carPolicy!: CarModel;
}