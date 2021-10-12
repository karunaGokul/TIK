import { BaseModel, DataRequest } from './base.model';

export class ProfileRequestModel {
    id: string;
}

export class ProfileResponse {
    id: string;
    unitName: string;
    title: string;
    description: string;
    address: string;
    phoneNumber1: string;
    phoneNumber2: string;
    email: string;
    imageName: string;
    image: string;
    rating?: number;
}
export class ProfileModel {
    parentOptionId?: string;
    visible: boolean;

    controls: ProfileFormStepControl;
    selectedOption?: ProfileFormStepControlOption;
}
export class ProfileFormStepControl {
    id: string;
    type: string;
    tableControls?: Array<tableStepControl> = [];
    options: Array<ProfileFormStepControlOption> = [];

}
export class ProfileFormStepControlOption {
    id: string;
    text: string;
    value: string;

    selected: boolean;
}
export class tableStepControl {
    tableHeading: string;
    md: number;
    tableHeader: Array<string> = [];
    tableData: Array<tableDataModel> = [];

}
export class tableDataModel {
    rowData: Array<ProfileModel> = [];
}

// export class MillProductDetailRequestModel {
//     id: number;
//     companyId: string;
//     creatorId: string;
//     yarn: yarnModel;
//     fabric: fabricModel;
// }
// export class yarnModel {
//     regularYarn: ProductDetails;
//     Melange_SlubYarn: ProductDetails;
//     specialYarn: ProductDetails;
//     dyedYarn: ProductDetails;

// }
// export class fabricModel {
//     regularFabric: ProductDetails;
//     Melange_SlubFabric: ProductDetails;
//     specialFabric: ProductDetails;
// }
// export class ProductDetails {
//     singleContents: Array<ContentDetailModel> = [];
//     blendContents: Array<ContentDetailModel> = [];
//     singleQualities: Array<ContentModel> = [];
//     blendQualities: Array<ContentModel> = [];
//     counts: Array<number> = [];
//     deniers: Array<number> = [];
//     avgCreditTime: string;
// }
// export class ContentDetailModel {
//     content: ContentModel;
//     filament?: boolean;
//     spun?: boolean;
//     combos?: CombosModel;
// }

// export class ContentModel {
//     id: number;
//     name: string;
// }
// export class CombosModel {
//     combinationOne: number;
//     combinationTwo: number;
// }




