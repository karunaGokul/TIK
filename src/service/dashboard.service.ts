import { ServiceHelper } from './base.service';
import {
    DashboardRequestModel, DashboardModel, ProjectSearchModel, BidRequestModel, ApproveRequestModel,
    ReviewRequestModel, FilterRequestModel, BitReceivedModel, BitAuditmodel, UserInfomodel, NotificationModel
} from '@/model';

export interface IDashboardService {
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
    GetBidAudit(projectId: string): Promise<BitAuditmodel>;
    PendingReview(): Promise<Array<DashboardModel>>;
    GetUserFullName(): Promise<UserInfomodel>;
    GetNotification(): Promise<NotificationModel>;

}
export class DashboardService extends ServiceHelper implements IDashboardService {

    public GetProjectList(request: DashboardRequestModel): Promise<Array<DashboardModel>> {
        return this.httpGet('dashboard/Dashboard', request).then(response => {
            return response.data;
        });
    }
    public GetMyProjectList(request: DashboardRequestModel): Promise<Array<DashboardModel>> {
        return this.httpGet('dashboard/GetMyProjectList', request).then(response => {
            return response.data;
        });
    }
    public GetProjectEnquiry(request: DashboardRequestModel): Promise<DashboardModel> {
        return this.httpGet('dashboard/GetProjectEnquiry', request).then(response => {
            return response.data;
        });
    }
    GetProjectListByFilter(request: ProjectSearchModel): Promise<Array<DashboardModel>> {
        return this.httpPost('dashboard/GetProjectListByFilter', request).then(response => {
            return response.data;
        });
    }

    public CreateProject(request: DashboardModel): Promise<any> {
        return this.httpPost('dashboard/CreateProject', request).then(response => {
            return response.data;
        });
    }

    public SearchProject(request: DashboardModel): Promise<Array<DashboardModel>> {
        return this.httpPost('dashboard/SearchProjectFunc', request).then(response => {
            return response.data;
        });
    }

    public BidProject(request: BidRequestModel): Promise<any> {
        return this.httpPost('dashboard/BidProject?projectId=' + request.projectId, request).then(response => {
            return response.data;
        });
    }
    public ApproveBid(request: ApproveRequestModel): Promise<any> {
        return this.httpPost('dashboard/ApproveBid?projectId=' + request.projectId + '&bidId=' + request.bidId + '&status=' + request.status + '&message=' + request.message + '&approvalAdminId=' + request.approvalAdminId, null).then(response => {
            return response.data;
        });
    }

    public GetCompany(companyId: string): Promise<any> {
        return this.httpGet('common/GetCompany?companyId=' + companyId, null).then(response => {
            return response.data;
        });
    }

    public Review(request: ReviewRequestModel): Promise<any> {
        return this.httpPost('profile/Review', request).then(response => {
            return response.data;
        });
    }

    public FilterRejectedBids(request: FilterRequestModel): Promise<Array<BitReceivedModel>> {
        return this.httpPost('dashboard/FilterRejectedBids', request).then(response => {
            return response.data;
        });
    }

    public GetBidAudit(projectId: string): Promise<BitAuditmodel> {
        return this.httpPost('dashboard/GetBidAudit?projectId=' + projectId, null).then(response => {
            return response.data;
        });
    }

    public PendingReview(): Promise<Array<DashboardModel>> {
        return this.httpGet('Dashboard/PendingReview',null).then(response => {
            return response.data;
        });
    }

    public GetUserFullName(): Promise<UserInfomodel> {
        return this.httpGet('Dashboard/GetUserFullName',null).then(response => {
            return response.data;
        });
    }

    public GetNotification(): Promise<NotificationModel> {
        return this.httpGet('Dashboard/GetNotificationCount',null).then(response => {
            return response.data;
        });
    }
} 
