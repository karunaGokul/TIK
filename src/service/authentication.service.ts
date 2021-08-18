import { IBaseService, BaseService } from './base.service';
import { AuthenticationRequestModel, AuthenticationResponse } from '@/model';

export interface IAuthenticationService extends IBaseService<AuthenticationRequestModel, any> {
    login(request: AuthenticationRequestModel): Promise<any>;
}
export class AuthenticationService extends BaseService<AuthenticationRequestModel, AuthenticationResponse> implements IAuthenticationService {

    constructor() {
        super('public');
    }

    public login(request: AuthenticationRequestModel): Promise<AuthenticationResponse> {
        this.apiUrl = "https://tiklogin20210806073346.azurewebsites.net/api"
        return this.httpPost('Authenticate', request).then(response => {
            return response.data;
        });
    }
}