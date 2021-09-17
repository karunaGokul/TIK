import { IBaseService, BaseService } from './base.service';
import { EmployeeRequestModel, EmployeeModel } from '@/model';

export interface IEmployeeService extends IBaseService<any, EmployeeModel> {
    GetEmployees(request: EmployeeRequestModel): Promise<Array<EmployeeModel>>;
    CreateEmployee(request: EmployeeModel): Promise<any>;
    DeleteEmployee(request: EmployeeRequestModel): Promise<any>
    EditEmployee(request:EmployeeModel): Promise<any>;
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

    public CreateEmployee(request: EmployeeModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpPost('CreateEmployee', request).then(response => {
            return response.data;
        });
    }

    public DeleteEmployee(request: EmployeeRequestModel): Promise<any> {
            this.apiUrl = "https://tikdev-api.azure-api.net/employee"
            return this.httpPost('DeleteEmployee', request).then(response => {
                   return response.data;
              });
           }

    public EditEmployee(request: EmployeeModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/employee"
        return this.httpPost('EditEmployee', request).then(response => {
        return response.data;
        });
    }

}