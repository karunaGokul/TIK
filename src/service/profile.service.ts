import { IBaseService, BaseService } from './base.service';
import { CompanyProfileModel, ProfileRequestModel, ProfileResponse } from '@/model';
import { AxiosRequestConfig } from 'axios';

export interface IProfileService extends IBaseService<any, ProfileResponse> {
    getProfile(request: ProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: ProfileResponse, logo: File): Promise<any>;
    CreateMills(): Promise<CompanyProfileModel>;
    AddMills(request: CompanyProfileModel): Promise<any>;
}

export class ProfileService extends BaseService<any, ProfileResponse> implements IProfileService {

    constructor() {
        super('public');
    }

    getProfile(request: ProfileRequestModel): Promise<ProfileResponse> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        return this.httpGet('loadprofile', request).then(response => {
            return response.data;
        });
    }

    public editProfile(request: any, logo: File): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        const config: AxiosRequestConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
        const data = new FormData();

        data.append("image", logo);

        for (const k in request) {
            if (request[k])
                data.append(k, request[k])
        }
        return this.httpPost('EditProfile', data, config).then(response => {
            return response.data;
        });
    }
    AddMills(request: CompanyProfileModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/ProfileMills"
        return this.httpPost('AddMills', request).then(response => {
            return response.data;
        });

    }
    CreateMills(): Promise<CompanyProfileModel> {
        this.apiUrl = "https://tikdev-api.azure-api.net/ProfileMills"
        return this.httpGet('CreateMills', null).then(response => {
            return response.data;
        });
    }

}