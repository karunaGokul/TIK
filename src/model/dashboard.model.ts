import { BaseModel, DataRequest } from './base.model';

export class DashboardRequestModel extends DataRequest {
    id: number;
}

export class DashboardModel 
{
    EnquiryName: string;
    Merchandiser: string;
    Category: string;
    Subcategory: string;
    InStages: string;
    Status: string;
    Review: number;
}
