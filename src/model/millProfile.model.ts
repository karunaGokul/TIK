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
    melangeSlubYarn: melangeSlubModel;
    specialYarn: ProductDetailModel;
    dyedYarn: ProductDetailModel;

}
export class fabricModel {
    regularFabric: ProductDetailModel;
    melangeSlubFabric: melangeSlubModel;
    specialFabric: ProductDetailModel;
}
export class ProductDetailModel {    
    contentLable:string;
    qualityLable:string;
    countLable:string;
    typeLable:string;
    structureLable:string;
    melanSlubTypes:Array<contentModel> = [];   
    singleSpecialDyedTypes:Array<contentModel> = [];
    blendSpecialDyedTypes:Array<contentModel> = [];
    singleContents: Array<contentDetailModel> = [];
    blendContents: Array<contentDetailModel> = [];
    singleQualities: Array<contentModel> = [];
    blendQualities: Array<contentModel> = [];
    fabricStructure:fabricStructureModel;
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
export class melangeSlubModel {
    melange: ProductDetailModel;
    slub: ProductDetailModel;
}

export class fabricStructureModel {
    singleJersey: Array<contentModel> = [];
    availableInterlock: Array<contentModel> = [];
    interlock: Array<contentModel> = [];    
    availableSingleJersey: Array<contentModel> = [];
    rib:Array<contentModel> = [];
    availableRib: Array<contentModel> = [];
    tubular:tubularModel;
    openWidth:tubularModel;
}

export class tubularModel {
    gg: Array<string> = [];
    dia: Array<string> = [];
    allFeeder: string;
    alternateFeeder: string;
}