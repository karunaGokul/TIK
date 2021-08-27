import { IBaseService, BaseService } from './base.service';
import { GetProfileRequestModel, ProfileResponse, EditProfileRequestModel } from '@/model';

export interface IProfileService extends IBaseService<GetProfileRequestModel, ProfileResponse > {
    getProfile(request: GetProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: EditProfileRequestModel): Promise<ProfileResponse>;
}

export class ProfileService extends BaseService<GetProfileRequestModel, ProfileResponse> implements IProfileService {

    constructor() {
        super('public');
    }

    public getProfile(request: GetProfileRequestModel): Promise<ProfileResponse> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile/loadprofile"
        return this.httpGet('getProfile', request).then(response => {
            return response.data;
        });
    }

    public editProfile(request: EditProfileRequestModel): Promise<ProfileResponse> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile/EditProfile"
        return this.httpPost('editProfile', request).then(response => {
            return response.data;
        });
    }
}