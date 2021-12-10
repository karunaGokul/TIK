import { ServiceHelper } from './base.service';
import { EmployeeRequestModel, EmployeeModel, RoleResponseModel, AdminRequestModel, MasterAdminResponseModel, ApprovalAdminResponseModel, MerchandiserResponseModel } from '@/model';

export interface IEmployeeService {
    GetEmployees(request: EmployeeRequestModel): Promise<Array<EmployeeModel>>;
    GetEmployee(EmployeeId: string): Promise<EmployeeModel>;
    GetRoles(): Promise<Array<RoleResponseModel>>;
    GetMerchandiser(request: AdminRequestModel): Promise<Array<MerchandiserResponseModel>>;
    GetMasterAdmin(request: AdminRequestModel): Promise<Array<MasterAdminResponseModel>>;
    GetApprovalAdmin(request: AdminRequestModel): Promise<Array<ApprovalAdminResponseModel>>;
    CreateEmployee(request: EmployeeModel): Promise<any>;
    DeleteEmployee(EmployeeId: string): Promise<any>
    EditEmployee(request: EmployeeModel, EmployeeId: string): Promise<any>;
}

export class EmployeeService extends ServiceHelper implements IEmployeeService {

    public GetEmployees(request: EmployeeRequestModel): Promise<Array<EmployeeModel>> {
        return this.httpGet('employee/GetEmployees', request).then(response => {
            return response.data;
        });
    }

    GetEmployee(EmployeeId: string): Promise<EmployeeModel> {
        return this.httpGet('employee/GetEmployee?employeeId=' + EmployeeId, null).then(response => {
            return response.data;
        });

    }
    GetMerchandiser(request: AdminRequestModel): Promise<Array<MerchandiserResponseModel>> {
        return this.httpGet('common/GetMerchandiser', request).then(response => {
            return response.data;
        });
    }
    public GetMasterAdmin(request: AdminRequestModel): Promise<Array<MasterAdminResponseModel>> {
        return this.httpGet('common/GetMasterAdmin', request).then(response => {
            return response.data;
        });
    }
    public GetApprovalAdmin(request: AdminRequestModel): Promise<Array<ApprovalAdminResponseModel>> {
        return this.httpGet('common/GetApprovalAdmin', request).then(response => {
            return response.data;
        });
    }
    public GetRoles(): Promise<Array<RoleResponseModel>> {
        return this.httpGet('common/GetRoles', null).then(response => {
            return response.data;
        });
    }
    public CreateEmployee(request: EmployeeModel): Promise<any> {
        return this.httpPost('employee/CreateEmployee', request).then(response => {
            return response.data;
        });
    }

    public DeleteEmployee(EmployeeId: string): Promise<any> {
        return this.httpPost('employee/DeleteEmployee?EmployeeId=' + EmployeeId, null).then(response => {
            return response.data;
        });
    }

    public EditEmployee(request: EmployeeModel, EmployeeId: string): Promise<any> {
        return this.httpPost('employee/EditEmployee?EmployeeId=' + EmployeeId, request).then(response => {
            return response.data;
        });
    }

}