import { BaseModel, DataRequest } from './base.model';

export class EmployeeRequestModel {
    id: string;
}
export class RoleResponseModel {
    Id: string;
    EmployeeRole: string;
}
export class AdminRequestModel {
    companyId: string;   
}
export class MasterAdminResponseModel {
    Id: string;
    MasterAdminEmailId: string;
}
export class ApprovalAdminResponseModel {
    Id: string;
    ApprovalAdminEmailId: string;
}
export class EmployeeModel {
    id: string;
    FirstName: string;
    LastName: string;
    Gender:string;
    EmailAddress: string;
    Password:string;
    PhoneNumber: number;
    Address:string;
    EmployeeRole: string=" ";
    MasterAdminId:string;
    ApprovalAdminId: string;
    ApprovalAdminAccess:string="0"; 
    EmployeeId: string;   
}
