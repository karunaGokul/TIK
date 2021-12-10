import { ServiceHelper } from './base.service';
import { CompanyProfileModel, ProfileRequestModel, ProfileResponse } from '@/model';
import { AxiosRequestConfig } from 'axios';

export interface IProfileService {
    getProfile(request: ProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: ProfileResponse, logo: File): Promise<any>;
    CreateMills(companyId: string): Promise<CompanyProfileModel>;
    AddMills(request: CompanyProfileModel): Promise<any>;
}

export class ProfileService extends ServiceHelper implements IProfileService {


    getProfile(request: ProfileRequestModel): Promise<ProfileResponse> {
        return this.httpGet('profile/loadprofile', request).then(response => {
            return response.data;
        });
    }

    public editProfile(request: any, logo: File): Promise<any> {
        const config: AxiosRequestConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
        const data = new FormData();

        data.append("image", logo);

        for (const k in request) {
            if (request[k])
                data.append(k, request[k])
        }
        return this.httpPost('profile/EditProfile', data, config).then(response => {
            return response.data;
        });
    }
    AddMills(request: CompanyProfileModel): Promise<any> {
        return this.httpPost('ProfileMills/AddMills', request).then(response => {
            return response.data;
        });

    }
    CreateMills(companyId: string): Promise<CompanyProfileModel> {
        return this.httpGet('ProfileMills/CreateMills?companyId=' + companyId, null).then(response => {
            return response.data;
        });
    }

}