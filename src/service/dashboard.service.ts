import { IBaseService, BaseService } from './base.service';
import { DashboardRequestModel, DashboardModel, ProjectSearchModel, BidRequestModel, ApproveRequestModel } from '@/model';

export interface IDashboardService extends IBaseService<any, DashboardModel> {
    GetProjectList(request: DashboardRequestModel): Promise<Array<DashboardModel>>;
    GetProjectEnquiry(request: DashboardRequestModel): Promise<DashboardModel>;
    GetProjectListByFilter(request: ProjectSearchModel): Promise<Array<DashboardModel>>;
    CreateProject(request: DashboardModel): Promise<any>;
    SearchProject(request: DashboardModel): Promise<Array<DashboardModel>>;
    BidProject(request: BidRequestModel): Promise<any>;
    GetCompany(request: DashboardRequestModel): Promise<any>;

}
export class DashboardService extends BaseService<any, DashboardModel> implements IDashboardService {

    constructor() {
        super('dashboard');
    }

    public GetProjectList(request: DashboardRequestModel): Promise<Array<DashboardModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpGet('Dashboard', request).then(response => {
            return response.data;
        });
    }
    public GetProjectEnquiry(request: DashboardRequestModel): Promise<DashboardModel> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpGet('GetProjectEnquiry', request).then(response => {
            return response.data;
        });
    }
    GetProjectListByFilter(request: ProjectSearchModel): Promise<Array<DashboardModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpPost('GetProjectListByFilter', request).then(response => {
            return response.data;
        });
    }

    public CreateProject(request: DashboardModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpPost('CreateProject', request).then(response => {
            return response.data;
        });
    }

    public SearchProject(request: DashboardModel): Promise<Array<DashboardModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpPost('SearchProjectFunc', request).then(response => {
            return response.data;
        });
    }

    public BidProject(request: BidRequestModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpPost('BidProject?projectId=' + request.projectId, request).then(response => {
            return response.data;
        });
    }
    public ApproveBid(request: ApproveRequestModel): Promise<any>{
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpPost('ApproveBid?projectId=' + request.projectId+'&bidId='+request.bidId+'&status='+request.status,null).then(response => {
            return response.data;
        });
    }

    public GetCompany(request: DashboardRequestModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('GetCompany?companyId=' + request.id, null).then(response => {
            return response.data;
        });
    }

}