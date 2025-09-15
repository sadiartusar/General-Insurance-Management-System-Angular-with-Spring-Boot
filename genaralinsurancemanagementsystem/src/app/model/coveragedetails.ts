import { HealthInsurancePolicy } from "./health.model";
export interface CoverageDetails {
  hospitalization: boolean;
  preHospitalizationDays: number;
  postHospitalizationDays: number;
  maternityCoverage: boolean;
  ambulanceChargesCovered: boolean;
  criticalIllnessCoverage: boolean;
  covidCoverage: boolean;
  annualHealthCheckup: boolean;
  health : HealthInsurancePolicy;
}