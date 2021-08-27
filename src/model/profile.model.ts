import { BaseModel, DataRequest } from './base.model';

export class GetProfileRequestModel extends DataRequest {
    accessToken: string;
    id: number;
}

export class ProfileResponse {
    logoText: string;
    aboutFirstText: string;
    aboutSecondText: string;
    address: string;
    phoneNofirst: string;
    phoneNoSecond: string;
    email: string;
}

export class EditProfileRequestModel extends DataRequest {
    accessToken: string;
    id: number;
    onChange?: (...params: any) => void;
}

