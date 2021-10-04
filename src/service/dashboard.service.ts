import { IBaseService, BaseService } from './base.service';
import { DashboardRequestModel, DashboardModel } from '@/model';

export interface IDashboardService extends IBaseService<any, DashboardModel> {
    getDashboardInfo(request: DashboardRequestModel): Promise<Array<DashboardModel>>;

}
export class DashboardService extends BaseService<any, DashboardModel> implements IDashboardService {

    constructor() {
        super('dashboard');
    }

    getDashboardInfo(request: DashboardRequestModel): Promise<Array<DashboardModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/Dashboard"
        // return this.httpGet('admin/getDashBoardInfo', request).then((response) => {
        //     return response.data;
        // })
        return new Promise((resolve, reject) => {
            const json = `[
                {
                    "EnquiryName": "dsd",
                    "Merchandiser": "merchandisera",
                    "Category": "Mill",
                    "Subcategory": "Yarn",
                    "InStages": "Bid Received",
                    "CreatedBy": "CompanyA(Sadmin)",
                    "CreatedDateTime": "2021-01-04 14:17:54",
                    "RequestedPrice": "100",
                    "RequestedCredit": "10",
                    "RequestedDelivery": "7",
                    "Summary": {
                        "YarnContent": "Single",
                        "Content": "100% Cotton (Spun )",
                        "YarnType": " Regular  Yarn  ",
                        "Quality": "Super Combed",
                        "Count": "10",
                        "No_Of_kgs": "10",
                        "OrderConfirmationDate": "19-01-2021",
                        "DeliveryDate": "12-01-2021"
                    },
                    "Approved": {
                        "ApprovedCompanyName": "Apple1",
                        "Rating": "4",
                        "ApprovedBy": "Apple1A1(Sadmin)",
                        "ApprovedDateTime": "2021-04-30 08:19:46",
                        "ApprovedRequestedPrice": "120",
                        "ApprovedRequestedCredit": "5",
                        "ApprovedRequestedDelivery": "22"
                    }
                },
                {
                    "EnquiryName": "aaa",
                    "Merchandiser": "",
                    "Category": "Mill",
                    "Subcategory": "Yarn",
                    "InStages": "Enquiry Sent",
                    "CreatedBy": "CompanyA(Sadmin)",
                    "CreatedDateTime": "2021-10-01 17:50:34",
                    "RequestedPrice": "50",
                    "RequestedCredit": "40",
                    "RequestedDelivery": "21",
                    "Summary": {
                        "YarnContent": "Single",
                        "Content": "100% Cotton (Spun )",
                        "YarnType": " Regular  Yarn  ",
                        "Quality": "Super Combed",
                        "Count": "50",
                        "No_Of_kgs": "50",
                        "OrderConfirmationDate": "12-11-2021",
                        "DeliveryDate": "22-10-2021"
                    }
                },
                {
                    "EnquiryName": "Fab test",
                    "Merchandiser": "merchandisera",
                    "Category": "Mill",
                    "Subcategory": "Fabric",
                    "InStages": "Confirmed",
                    "CreatedBy": "CompanyA(Sadmin)",
                    "CreatedDateTime": "2021-04-19 14:48:40",
                    "RequestedPrice": "Request",
                    "RequestedCredit": "25",
                    "RequestedDelivery": "10",
                    "Summary": {
                        "YarnContent": "Single",
                        "Content": "100% Cotton (Spun )",
                        "YarnType": "  Regular  Fabric  ",
                        "Quality": "Super Combed",
                        "Count": "10",
                        "Structure": "Singlejersey",
                        "LycraDetails": "50% - 50D - All Feeder ",
                        "Guage": "50",
                        "Opw_Tub": "TUB",
                        "Gsm": "160",
                        "LoopLenght": "32",
                        "OrderConfirmationDate": "10-05-2021",
                        "DeliveryDate": "30-04-2021"
                    },
                    "Approved": {
                        "ApprovedCompanyName": "cera",
                        "Rating": "5",
                        "ApprovedBy": "ceraA1(Sadmin)",
                        "ApprovedDateTime": " 2021-04-19 14:51:50",
                        "ApprovedRequestedPrice": "120",
                        "ApprovedRequestedCredit": "30",
                        "ApprovedRequestedDelivery": "7"
                    }
                }
            ]`;
            resolve(JSON.parse(json));
        });
    }

}