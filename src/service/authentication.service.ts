import { IBaseService, BaseService } from './base.service';
import { AuthenticationRequestModel, AuthenticationResponse, ForgotPasswordRequestModel, ForgotPasswordResponse, ResetPasswordRequestModel, ResetPasswordResponse } from '@/model';

export interface IAuthenticationService extends IBaseService<AuthenticationRequestModel, any> {
    login(request: AuthenticationRequestModel): Promise<AuthenticationResponse>;

    ForgotPassword(request: ForgotPasswordRequestModel): Promise<any>;
    ResetPassword(request: ResetPasswordRequestModel): Promise<any>;
}
export class AuthenticationService extends BaseService<any, any> implements IAuthenticationService {

    constructor() {
        super('public');
    }

    public login(request: AuthenticationRequestModel): Promise<AuthenticationResponse> {
        this.apiUrl = "https://tiklogin20210806073346.azurewebsites.net/api"
        return this.httpPost('Authenticate', request).then(response => {
            return response.data;
        });
    }

    public ForgotPassword(request: ForgotPasswordRequestModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpPost('ForgetPassword?EmailAddress=' +request.email,null).then(response => {
            return response.data
        })
    }

    public ResetPassword(request: ResetPasswordRequestModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpPost('ChangePassword', request).then(response => {
            return response.data
        })
    }
}