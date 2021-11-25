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
    logo: string;
    bidList?: Array<BitReceivedModel> = [];
    summary?: Array<SummaryModel> = [];
    CreatedBy: string;
    CreatedDate: string;
    bidsReceived: number;
    confirmationDate: number;
    requestedDeliveryDate: number;
    noOfKg: number;

}

export class BitReceivedModel {
    id: string;
    requestPrice: number;
    creditPeriod: number;
    deliveryDate: number;
    approvedBy: string;
    approvedDate: string;
    status: string;
    submittedBy: string;
    submittedDate: string;
    companyId: string;
    companyName: string;
    logo: string;
    review: number;
}

export class SummaryModel {
    label: string;
    value: string;
}
export class ProjectSearchModel {
    stages: string;
    myproject:boolean;
}
export class BidRequestModel {
    projectId: string;
    id: string;
    price: number;
    creditPeriod: number;
    deliveryPeriod: number;
}
export class GetCompanyModel {
    logo: string;
    companyName: string;
    review: string;
}
export class ApproveRequestModel {
    projectId: string;
    bidId: string;
    status: string;
    message?: string = "";
}
export class ReviewRequestModel {
    ReviewRating: string = "";
    Comments: string = " No";
}

export class FilterRequestModel {
    projectId: string;
    price?: string;
    review?:string;
    deliveryPeriod?: string;
    creditPeriod?: string;
}
export class BitAuditmodel {
    projectId: string;
    selectedBy: string;
    confirmedBy: string;
    approveBy: string;
    selectedDate: string;
    confirmedDate: string;
    approveDate: string;
}
