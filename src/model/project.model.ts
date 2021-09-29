import { BaseModel, DataRequest, ListItem } from './base.model';

export class ProjectFormModel {
    category: string;

    steps: Array<ProjectFormStep>;
    maxSteps: number;
}

export class ProjectFormStep {
    title: string;
    path: Array<string> = [];

    controls: Array<ProjectFormStepControl> = [];
    
    stepNumber: number = 1;
}

export class ProjectFormStepControl {
    id: string;
    type: string;
    selector: boolean;

    options: Array<ProjectFormStepControlOption>;

    value: string;
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
