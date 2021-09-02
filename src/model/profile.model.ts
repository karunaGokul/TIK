import { BaseModel, DataRequest } from './base.model';

export class GetProfileRequestModel  {
    accessToken: string;
    id: number;
}

export class ProfileResponse {
    id: string;
    unitName: string;
    title: string;
    description: string;
    address: string;
    phoneNumber1: string;
    phoneNumber2: string;
    email: string;
    imageName: string;
}


