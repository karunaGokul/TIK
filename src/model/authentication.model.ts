import { BaseModel, DataRequest } from './base.model';

export class AuthenticationRequestModel extends DataRequest {
    EmailAddress: string;
    Password: string;
}