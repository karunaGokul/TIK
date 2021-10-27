import { BaseModel, DataRequest } from './base.model';

export class DashboardRequestModel {
    id: string;
}

export class DashboardModel {
    EnquiryName: string;
    Merchandiser: string;
    Category: string;
    Subcategory: string;
    InStages: string;
    Status: string;
    Id: string;
    CompanyId: string;
    Action: string;
    requestPrice?: number;
    creditPeriod?: number;
    deliveryDate?: number;
    logoName?: string;
    logo?: string;
    bidList?: Array<BitReceivedModel> = [];
    summary?: Array<SummaryModel> = [];
    CreatedBy: string;
    CreatedDate: string;
    bidsReceived: number;

}
export class BitReceivedModel {
    logo: string;
    logoName?: string;
    companyName: string;
    requestPrice: number;
    creditPeriod: number;
    deliveryDate: number;
    approvedBy: string;
    approvedDate: string;
    status: string;
    review: string;
}

export class SummaryModel {
    label: string;
    value: string;
}
export class ProjectSearchModel {
    stages: string;
}
export class BidRequestModel {
    projectId: string;
    id: string;
    price: number;
    creditPeriod: number;
    deliveryPeriod: number;
}
