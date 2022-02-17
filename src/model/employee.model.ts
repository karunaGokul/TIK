import { NotificationModel } from '.';
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

export class MerchandiserResponseModel {
    Id: string;
    Merchandiser: string;
}
export class MasterAdminResponseModel {
    Id: string;
    MasterAdmin: string;
}
export class ApprovalAdminResponseModel {
    Id: string;
    ApprovalAdmin: string;
}
export class EmployeeModel {
    id: string;
    FirstName: string;
    LastName: string;
    Gender: string;
    EmailAddress: string;
    Password: string;
    PhoneNumber: number;
    Address: string;
    EmployeeRole: string = null;
    MerchandiserId?: string;
    MasterAdminId?: string;
    Category: string;
    ApprovalAdminId?: string;
    ApprovalAdminAccess: string = "0";
    EmployeeId: string;
    Notification: NotificatioRequestModel;
    StatusList: Array<GetNotificationResponseModel>;
    IsSMS: boolean;
    IsEmail: boolean;
    IsWhatsApp: boolean;
}

export class GetNotificationResponseModel {
    id: number;
    status: string;
}

export class NotificatioRequestModel {
    
    IsSMS: boolean;
    IsEmail: boolean;
    IsWhatsApp: boolean;
}
