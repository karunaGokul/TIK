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
    emailAddress: string;
    imageName: string;
    image: string;
    review?: number;
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

