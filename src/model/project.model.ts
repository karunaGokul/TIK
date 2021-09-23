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
    label: string;
    text: string;
    value: string;

    selected: boolean;
}

export class ProjectFormRequestModel extends DataRequest {
    projectName: string;
    categoryName: string;
}
