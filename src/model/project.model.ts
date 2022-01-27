import { BaseModel, DataRequest, ListItem } from './base.model';

export class CreateProjectModel {
    name: string;
    category: string;
    merchandiserId: string;
    
    data: any;

    bids: Array<any> = [];
    controls: Array<CreateProjectControlModel> = [];
}

export class CreateProjectControlModel {
    id: string;
    path: string;
    value: string;
    label: string;
    type: string;

    data_path?: string;
    data_id?: string;
}

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
    optional: boolean;
    options: Array<ProjectFormStepControlOption>;    
    items: Array<ProjectFormStepControl>
    value: string;
    label: string;
    multiple: boolean;
    data: any;

    data_path?: string;
    data_id?: string;
}

export class ProjectFormStepControlOption {
    id: string;
    label: string;
    text: string;
    value: string;
    selected: boolean;

    data_id?: string;

    controls: Array<ProjectFormStepControl>
}

export class ProjectRequestModel extends DataRequest {
}
