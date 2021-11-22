import { IBaseService, BaseService } from './base.service';
import { EmployeeRequestModel, EmployeeModel, RoleResponseModel, AdminRequestModel, MasterAdminResponseModel, ApprovalAdminResponseModel, MerchandiserResponseModel } from '@/model';

export interface IEmployeeService extends IBaseService<any, EmployeeModel> {
    GetEmployees(request: EmployeeRequestModel): Promise<Array<EmployeeModel>>;
    GetEmployee(EmployeeId:string): Promise<EmployeeModel>;
    GetRoles(): Promise<Array<RoleResponseModel>>;
    GetMerchandiser(request: AdminRequestModel): Promise<Array<MerchandiserResponseModel>>;
    GetMasterAdmin(request: AdminRequestModel): Promise<Array<MasterAdminResponseModel>>;
    GetApprovalAdmin(request: AdminRequestModel): Promise<Array<ApprovalAdminResponseModel>>;
    CreateEmployee(request: EmployeeModel): Promise<any>;
    DeleteEmployee(EmployeeId: string): Promise<any>
    EditEmployee(request: EmployeeModel, EmployeeId: string): Promise<any>;
}

export class EmployeeService extends BaseService<any, EmployeeModel> implements IEmployeeService {

    constructor() {
        super('public');
    }

    public GetEmployees(request: EmployeeRequestModel): Promise<Array<EmployeeModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpGet('GetEmployees', request).then(response => {
            return response.data;
        });
    }
    GetEmployee(EmployeeId:string): Promise<EmployeeModel>
    {this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpGet('GetEmployee?employeeId='+ EmployeeId, null).then(response => {
            return response.data;
        });

    }
    GetMerchandiser(request: AdminRequestModel): Promise<Array<MerchandiserResponseModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('GetMerchandiser', request).then(response => {
            return response.data;
        });
    }
    public GetMasterAdmin(request: AdminRequestModel): Promise<Array<MasterAdminResponseModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('GetMasterAdmin', request).then(response => {
            return response.data;
        });
    }
    public GetApprovalAdmin(request: AdminRequestModel): Promise<Array<ApprovalAdminResponseModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('GetApprovalAdmin', request).then(response => {
            return response.data;
        });
    }
    public GetRoles(): Promise<Array<RoleResponseModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('GetRoles', null).then(response => {
            return response.data;
        });
    }
    public CreateEmployee(request: EmployeeModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpPost('CreateEmployee', request).then(response => {
            return response.data;
        });
    }

    public DeleteEmployee(EmployeeId: string): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpPost('DeleteEmployee?EmployeeId=' + EmployeeId, null).then(response => {
            return response.data;
        });
    }

    public EditEmployee(request: EmployeeModel, EmployeeId: string): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpPost('EditEmployee?EmployeeId=' + EmployeeId, request).then(response => {
            return response.data;
        });
    }

}