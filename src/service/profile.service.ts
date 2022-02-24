import { ServiceHelper } from './base.service';
import { CompanyProfileModel, ProfileRequestModel, ProfileResponse, DyeingProfileModel } from '@/model';
import { AxiosRequestConfig } from 'axios';

export interface IProfileService {
    getProfile(request: ProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: ProfileResponse, logo: File): Promise<any>;
    CreateMills(companyId: string): Promise<CompanyProfileModel>;    
    AddMills(request: CompanyProfileModel): Promise<any>;
    CreateDyeing(companyId: string): Promise<DyeingProfileModel>;
    AddDyeing(request: DyeingProfileModel): Promise<any>;
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
        return this.httpPost('Profile/AddMills', request).then(response => {
            return response.data;
        });

    }
    CreateMills(companyId: string): Promise<CompanyProfileModel> {
        return this.httpGet('Profile/CreateMills?companyId=' + companyId, null).then(response => {
            return response.data;
        });        
    } 
    
    CreateDyeing(companyId: string): Promise<DyeingProfileModel> {
        return this.httpGet('Profile/CreateDyeing?companyId=' + companyId, null).then(response => {
            return response.data;
        });        
    }
    AddDyeing(request: DyeingProfileModel): Promise<any> {
        return this.httpPost('Profile/AddDyeing', request).then(response => {
            return response.data;
        });

    }

}