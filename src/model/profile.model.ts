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
    tableHeader: Array<tableHeaderModel> = [];
    tableData: Array<tableDataModel> = [];

}
export class tableHeaderModel {
    text: string;
    align: string;
    sortable: boolean;
    value: string;
    class: string;
}
export class tableDataModel {
    text: string;
    value: string;
}



