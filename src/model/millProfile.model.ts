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
    contentLable:string;
    qualityLable:string;
    countLable:string;
    typeLable:string;
    melanSlubTypes:Array<contentModel> = [];   
    singleSpecialDyedTypes:Array<contentModel> = [];
    blendSpecialDyedTypes:Array<contentModel> = [];
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
    content:contentModel;
    contentOptions: Array<contentModel>;
    filament?: string;
    spun?: string;
    combos?: Array<combosModel> = [];
    melanSlubType:contentModel;
    melanSlubTypeOptions:Array<contentModel>[];
}

export class contentModel {
    id: string;
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