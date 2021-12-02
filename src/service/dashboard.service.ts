import { IBaseService, BaseService } from './base.service';
import { DashboardRequestModel, DashboardModel, ProjectSearchModel, BidRequestModel, ApproveRequestModel,
     ReviewRequestModel, FilterRequestModel, BitReceivedModel, BitAuditmodel } from '@/model';

export interface IDashboardService extends IBaseService<any, DashboardModel> {
    GetProjectList(request: DashboardRequestModel): Promise<Array<DashboardModel>>;
    GetMyProjectList(request: DashboardRequestModel): Promise<Array<DashboardModel>>;
    GetProjectEnquiry(request: DashboardRequestModel): Promise<DashboardModel>;
    GetProjectListByFilter(request: ProjectSearchModel): Promise<Array<DashboardModel>>;
    CreateProject(request: DashboardModel): Promise<any>;
    SearchProject(request: DashboardModel): Promise<Array<DashboardModel>>;
    BidProject(request: BidRequestModel): Promise<any>;
    GetCompany(companyId: string): Promise<any>;
    ApproveBid(request: ApproveRequestModel): Promise<any>;
    Review(request: ReviewRequestModel): Promise<any>;
    FilterRejectedBids(request: FilterRequestModel): Promise<Array<BitReceivedModel>>;
    GetBidAudit(projectId:string):Promise<BitAuditmodel>;

}
export class DashboardService extends BaseService<any, any> implements IDashboardService {

    constructor() {
        super('dashboard');
    }

    public GetProjectList(request: DashboardRequestModel): Promise<Array<DashboardModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpGet('Dashboard', request).then(response => {
            return response.data;
        });
    }
    public GetMyProjectList(request: DashboardRequestModel): Promise<Array<DashboardModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpGet('GetMyProjectList', request).then(response => {
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
    public ApproveBid(request: ApproveRequestModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/dashboard"
        return this.httpPost('ApproveBid?projectId=' + request.projectId + '&bidId=' + request.bidId + '&status=' + request.status + '&message=' + request.message + '&approvalAdminId=' + request.approvalAdminId, null).then(response => {
            return response.data;
        });
    }

    public GetCompany(companyId: string): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('GetCompany?companyId=' + companyId, null).then(response => {
            return response.data;
        });
    }

    public Review(request: ReviewRequestModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        return this.httpPost('Review', request).then(response => {
            return response.data;
        });
    }

    public  FilterRejectedBids(request: FilterRequestModel): Promise<Array<BitReceivedModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/Dashboard"
        return this.httpPost('FilterRejectedBids', request).then(response => {
            return response.data;
        });
    }

    public GetBidAudit(projectId:string):Promise<BitAuditmodel>{
        this.apiUrl = "https://tikdev-api.azure-api.net/Dashboard"
        return this.httpPost('GetBidAudit?projectId='+projectId, null).then(response => {
            return response.data;
        });
    }

}