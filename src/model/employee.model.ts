import { BaseModel, DataRequest } from './base.model';

export class EmployeeRequestModel {
    id: string;
}

export class EmployeeResponse {
    firstName: string;
    lastName: string;
    designation: string;
    emailAddress: string;
    phoneNumber: number;
}