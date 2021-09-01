import { BaseModel, DataRequest } from './base.model';

export class AuthenticationRequestModel extends DataRequest {
    EmailAddress: string;
    Password: string;
    refresh_token?: string;
}
export class AuthenticationResponse {
    accessToken: string;
    refreshToken: string;
    id: string;
}
export class AuthenticationState {
    accessToken: string = "";
    refreshToken: string = "";
    id: string = "";
    isAdmin: boolean = true;
    sucess: boolean;
}
