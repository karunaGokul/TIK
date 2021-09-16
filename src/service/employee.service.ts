import { IBaseService, BaseService } from './base.service';
import { EmployeeRequestModel, EmployeeResponse } from '@/model';

export interface IEmployeeService extends IBaseService<any, EmployeeResponse> {
    GetEmployees(request: EmployeeRequestModel): Promise<EmployeeResponse>;
    CreateEmployee(request: EmployeeResponse): Promise<any>;

}

export class EmployeeService extends BaseService<any, EmployeeResponse> implements IEmployeeService {

    constructor() {
        super('public');
    }

    GetEmployees(request: EmployeeRequestModel): Promise<EmployeeResponse> {
        this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpGet('GetEmployees', request).then(response => {
            return response.data;
        });
    }

    public CreateEmployee(request: EmployeeResponse): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpPost('CreateEmployee', request).then(response => {
            return response.data;
        });
    }

}