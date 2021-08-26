import { IBaseService, BaseService } from './base.service';
import { ProjectFormRequestModel, ProjectFormResponseModel } from '@/model';

export interface IProjectService extends IBaseService<ProjectFormRequestModel, ProjectFormResponseModel> {
    newProject(request: ProjectFormRequestModel): Promise<ProjectFormResponseModel>;
}
export class ProjectService extends BaseService<ProjectFormRequestModel, ProjectFormResponseModel> implements IProjectService {

    constructor() {
        super('public');
    }

    public newProject(request: ProjectFormRequestModel): Promise<ProjectFormResponseModel> {
        this.apiUrl = "https://tikdev-api.azure-api.net/Dashboard"
        return this.httpPost('newproject', request).then(response => {
            return response.data;
        });
    }
}