import { BaseModel, DataRequest } from './base.model';

export class CompanyProfileModel {
    id: string;
    companyId: string;
    creatorId: string;
    yarn: yarnModel;
    fabric: fabricModel;
}
export class yarnModel {
    regularYarn: ProductDetailModel;
    melangeSlubYarn: melangeSlubYarnModel;
    specialYarn: ProductDetailModel;
    dyedYarn: ProductDetailModel;

}
export class fabricModel {
    regularFabric: ProductDetailModel;
    Melange_SlubFabric: ProductDetailModel;
    specialFabric: ProductDetailModel;
}
export class ProductDetailModel {
    melangeSlubTypes?: Array<contentModel>;
    contentLabel:string;
    qualityLable:string;
    countLable:string;
    singleContents: Array<contentDetailModel> = [];
    blendContents: Array<contentDetailModel> = [];
    singleQualities: Array<contentModel> = [];
    blendQualities: Array<contentModel> = [];
    counts: Array<number> = [];
    availableCounts: Array<number> = [];
    deniers: Array<number> = [];
    availableDeniers: Array<number> = [];
    avgCreditTime: string;
}
export class contentDetailModel {
    contents: number;
    contentOptions: Array<contentModel>;
    filament?: string;
    spun?: string;
    combos?: Array<combosModel> = [];
}

export class contentModel {
    id: number;
    name: string;
    isSelected?: boolean;
}
export class combosModel {
    combinationOne: number;
    combinationTwo: number;
}
export class melangeSlubYarnModel {
    melange: ProductDetailModel;
    slub: ProductDetailModel;
}