import { BaseModel, DataRequest } from './base.model';

export class EmployeeRequestModel extends DataRequest {
    id: string;
}

export class EmployeeResponse {
    FirstName: string;
    LastName: string;
    Designation: string;
    EmailId: string;
    Phone: number;
}