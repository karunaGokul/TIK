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
    Id: string;
    CompanyId: string;
    Action: string
}
export class ViewModel {
    // Review: number;
    // CreatedCompanyLogo: string;
    // CreatedBy: string;
    // CreatedDateTime: string;
    // RequestedPrice: number;
    // RequestedCredit: number;
    // RequestedDelivery: number;
    // No_Of_Bits: number;
    // Summary: SummaryModel;
    // BitReceived?: Array<BitReceivedModel> = [];

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
export class BitReceivedModel {
    BitReceivedCompanyLogo: string;
    BitReceivedCompanyName: string;
    AuthApprove: string;
    Rating: number;
    Approved: boolean;
    ApprovedBy: string;
    ApprovedDateTime: string;
    BitReceivedRequestedPrice: number;
    BitReceivedRequestedCredit: number;
    BitReceivedRequestedDelivery: number;
}