import { BaseModel, DataRequest } from './base.model';

export class ProfileRequestModel {
    id: string;
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


