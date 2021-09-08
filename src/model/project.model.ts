import { BaseModel, DataRequest, ListItem } from './base.model';

export class ProjectFormModel {
    category: string;
    
    steps: Array<ProjectFormStep>;
}

export class ProjectFormStep {
    stepNumber: number;
    title: string;
    parentOptionId: string;

    controls: Array<ProjectFormStepControl> = [];

    selectedOption: ProjectFormStepControlOption;
}

export class ProjectFormStepControl {
    id: string;
    type: string;

    options: Array<ProjectFormStepControlOption>;
}

export class ProjectFormStepControlOption {
    id: string;
    label:string;
    text: string;
    value: string;

    selected: boolean;
}

export class ProjectFormRequestModel extends DataRequest {
    projectName: string;
    categoryName: string;
}
// export class ProjectFormResponseModel1 {
//     title: TitleControlModel;
//     subtitle: TitleControlModel;
//     visibility: boolean = true;
//     controls: Array<ProjectFormControlModel> = [];

// }
// export class TitleControlModel {
//     text: string;
//     id: string;
// }


export class ProjectFormResponseModel {
    formHeading: string;
    formSubHeading: string;
    visibility: boolean = true;
    controls: Array<ProjectFormControlModel> = [];

}
export class ProjectFormControlModel {

    controlType: string;
    id: string;
    option?: string;
    label?: string;
    active: boolean;
    commandValue?: any;
    listControlOptions?: Array<ListItem>;
    constructor() {
        this.active = false;
        this.commandValue = '';
    }
    child?: ProjectFormResponseModel;
}