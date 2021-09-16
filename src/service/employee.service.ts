import { IBaseService, BaseService } from './base.service';
import { EmployeeRequestModel, EmployeeResponse } from '@/model';

export interface IEmployeeService extends IBaseService<any, EmployeeResponse> {
    GetEmployees(request: EmployeeRequestModel): Promise<EmployeeResponse>;

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

}