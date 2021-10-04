import { BaseModel, DataRequest } from './base.model';

export class DashboardRequestModel {
    id: number;
}

export class DashboardModel {
    EnquiryName: string;
    Merchandiser: string;
    Category: string;
    Subcategory: string;
    InStages: string;
    Status?: string;
    Review: number;
    CreatedCompanyLogo: string;
    CreatedBy: string;
    CreatedDateTime: string;
    RequestedPrice: number;
    RequestedCredit: number;
    RequestedDelivery: number;
    Summary: SummaryModel;
    Approved?: ApprovedModel;
}
export class SummaryModel {
    YarnContent: string;
    Content: string;
    YarnType: string;
    Quality: string;
    Count: number;
    No_Of_kgs: number;
    Structure: string;
    LycraDetails: string;
    Guage: number;
    Opw_Tub: string;
    Gsm: number;
    LoopLenght: number;
    OrderConfirmationDate: Date;
    DeliveryDate: Date;
}
export class ApprovedModel {
    ApprovedCompanyLogo: string;
    ApprovedCompanyName: string;
    Rating: number;
    ApprovedBy: string;
    ApprovedDateTime: string;
    ApprovedRequestedPrice: number;
    ApprovedRequestedCredit: number;
    ApprovedRequestedDelivery: number;
}