import { IBaseService, BaseService } from './base.service';
import { ProfileRequestModel, ProfileResponse } from '@/model';

export interface IProfileService extends IBaseService<any, ProfileResponse> {
    getProfile(request: ProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: ProfileResponse): Promise<any>;
}

export class ProfileService extends BaseService<any, ProfileResponse> implements IProfileService {

    constructor() {
        super('public');
    }

    public getProfile(request: ProfileRequestModel): Promise<ProfileResponse> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        return this.httpGet('loadprofile', request).then(response => {
            return response.data;
        });
    }

    public editProfile(request: ProfileResponse): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        return this.httpPost('EditProfile', request).then(response => {
            return response.data;
        });
    }
}