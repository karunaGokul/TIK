import { IBaseService, BaseService } from './base.service';
import { EmployeeRequestModel, EmployeeModel, RoleResponseModel } from '@/model';

export interface IEmployeeService extends IBaseService<any, EmployeeModel> {
    GetEmployees(request: EmployeeRequestModel): Promise<Array<EmployeeModel>>;
    GetRoles(): Promise<Array<RoleResponseModel>>;
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
    public GetRoles(): Promise<Array<RoleResponseModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('roles', null).then(response => {
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