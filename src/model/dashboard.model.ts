import { BaseModel, DataRequest } from './base.model';

export class DashboardRequestModel extends DataRequest {
    EnquiryName: string;
    Merchandiser: string;
    Category: string;
    Subcategory: string;
    InStages: string;
    Status: string;
}