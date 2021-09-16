import { BaseModel, DataRequest } from './base.model';

export class EmployeeRequestModel {
    id: string;
}

export class EmployeeResponse {
    id: string;
    FirstName: string;
    LastName: string;
    Designation: string;
    EmailAddress: string;
    PhoneNumber: number;
    EmployeeRole: string;
    EmployeeId: string;
}