import { BaseModel, DataRequest } from './base.model';

export class EmployeeRequestModel {
    id: string;
}
export class RoleResponseModel {
    id: string;
    employeeRole: string;
}
export class EmployeeModel {
    id: string;
    FirstName: string;
    LastName: string;
    EmailAddress: string;
    PhoneNumber: number;
    EmployeeRole: string;
    EmployeeId: string;
}
