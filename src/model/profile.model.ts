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
    title: string;
    parentId: string;

    controls: Array<ProfileFormStepControl> = [];
    tableControls: Array<tableStepControl> = [];
    selectedOption: ProfileFormStepControlOption;
}
export class ProfileFormStepControl {
    id: string;
    type: string;

    options: Array<ProfileFormStepControlOption> = [];

}
export class ProfileFormStepControlOption {
    type: string;
    id: string;
    text: string;
    value: string;

    selected: boolean;
}
export class tableStepControl {
    tableHeading: string;
    tableHeader: Array<tableHeaderModel> = [];

}
export class tableHeaderModel {
    text: string;
    align: string;
    sortable: boolean;
    value: string;
    class: string;
}


