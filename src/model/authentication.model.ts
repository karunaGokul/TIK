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
    role: string;
    companyId: string;
    category: string;
    approvalAdminAccess: string;
    userId?: string;
  
}

export class AuthenticationState {
    accessToken: string = "";
    refreshToken: string = "";
    id: string = "";
    role: string = "";
    companyId: string = "";
    category: string = "";
    approvalAdminAccess: string = "";
    // stages: string = "";
}

export class ForgotPasswordRequestModel {
    email: string = "";
}

export class ForgotPasswordResponse {
    status: string = "";
}

export class ResetPasswordRequestModel {
    newPassword: string = "";
    confirmPassword: string = "";
    temporaryPassword: string = "";
    id: string = "";
}

export class ResetPasswordResponse {
}