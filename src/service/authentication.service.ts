import { ServiceHelper } from './base.service';
import { AuthenticationRequestModel, AuthenticationResponse, ForgotPasswordRequestModel, ForgotPasswordResponse, ResetPasswordRequestModel, ResetPasswordResponse } from '@/model';
import axios from 'axios';

export interface IAuthenticationService  {
    login(request: AuthenticationRequestModel): Promise<AuthenticationResponse>;

    ForgotPassword(request: ForgotPasswordRequestModel): Promise<any>;
    ResetPassword(request: ResetPasswordRequestModel): Promise<any>;
}
export class AuthenticationService extends ServiceHelper implements IAuthenticationService {

    public login(request: AuthenticationRequestModel): Promise<AuthenticationResponse> {
        return axios.post("https://tiklogin20210806073346.azurewebsites.net/api/authenticate", request).then(response => {
            return response.data;
        });
    }

    public ForgotPassword(request: ForgotPasswordRequestModel): Promise<any> {
        return this.httpPost('common/ForgetPassword?EmailAddress=' +request.email,null).then(response => {
            return response.data
        })
    }

    public ResetPassword(request: ResetPasswordRequestModel): Promise<any> {
        return this.httpPost('common/ChangePassword', request).then(response => {
            return response.data
        })
    }
}