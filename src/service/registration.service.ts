import { IBaseService, BaseService } from './base.service';
import { RegistrationRequestModel } from '@/model';

export interface IRegistrationService extends IBaseService<RegistrationRequestModel, any> {
    registration(request: RegistrationRequestModel): Promise<any>;
}
export class RegistrationService extends BaseService<RegistrationRequestModel, any> implements IRegistrationService {

    constructor() {
        super('public');
    }

    public registration(request: RegistrationRequestModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/login"
        return this.httpPost('registration', request).then(response => {
            return response.data;
        });
    }
}