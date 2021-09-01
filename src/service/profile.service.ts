import { IBaseService, BaseService } from './base.service';
import { GetProfileRequestModel, ProfileResponse, EditProfileRequestModel } from '@/model';

export interface IProfileService extends IBaseService<any, ProfileResponse > {
    getProfile(request: GetProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: EditProfileRequestModel): Promise<ProfileResponse>;
}

export class ProfileService extends BaseService<any, ProfileResponse> implements IProfileService {

    constructor() {
        super('public');
    }

    public getProfile(request: GetProfileRequestModel): Promise<ProfileResponse> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        return this.httpGet('loadprofile', request).then(response => {
            return response.data;
        });
    }

    public editProfile(request: EditProfileRequestModel): Promise<ProfileResponse> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        return this.httpPost('EditProfile', request).then(response => {
            return response.data;
        });
    }
}