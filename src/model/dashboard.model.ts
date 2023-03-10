import { BaseModel, DataRequest } from "./base.model";

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
  certification: string;
  logoName?: string;
  logo: string;
  bidList?: Array<BitReceivedModel> = [];
  summary?: Array<SummaryModel> = [];
  CreatedBy: string;
  CreatedDate: string;
  bidsReceived: number;
  biddingTime: number;
  confirmationDate: number;
  requestedDeliveryDate: number;
  noOfKg: number;
  maxCreditPeriod: number;
  maxDeliveryPeriod: number;
  maxPrice: number;
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
  ratings: number;
  message?: string;
}

export class SummaryModel {
  label: string;
  value: string;
}

export class ProjectSearchModel {
  stages: string;
  myproject: boolean;
}
export class BidRequestModel {
  projectId: string;
  id: string;
  price: number;
  creditPeriod: number;
  deliveryPeriod: number;
  approvalAdminId: string = null;
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
  message: string = null;
  approvalAdminId: string = null;
}
export class ReviewRequestModel {
  // reviewRating: string = "";
  productQualityRating?: string = "";
  timelyDeliveryRating?: string = "";
  paymentRating?: string = "";
  inputMaterialRating?: string = "";
  projectId: string;
  biddingId: string;
}

export class FilterRequestModel {
  projectId: string;
  minPrice: number;
  maxPrice: number;
  minCreditPeriod: number;
  maxCreditPeriod: number;
  minDeliveryPeriod: number;
  maxDeliveryPeriod: number;
  Review: number;
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

export class UserInfomodel {
  fullName: string;
  currentDate: number;
  currentDay: string;
}

export class NotificationModel {
  newProjectCount: number;
  bidReceivedCount: number;
  pendingAuthenticationCount: number;
  approvalPendingCount: number;
  approvedBidsCount: number;
  noShowCount: number;
  noResponseCount: number;
  confirmedCount: number;
  completedCount: number;
  projectReviewCount: number;
}

export class ConfirmedBidModel {
  price: number;
  deliveryPeriod: number;
  creditPeriod: number;
  companyReview: string;
}

export class NoResponseRequestModel {
  projectId: string;
  status: string;
  message: string;
}
