import { BaseModel, DataRequest, ListItem } from './base.model';

export class CreateProjectModel {
    name: string;
    category: string;
    merchandiserId: string;
    noOfKgs: number;
    price: number;
    requestPrice: boolean;
    creditPeriod: number;
    confirmationDate: Date;
    deliveryDate: Date;

    bids: Array<any> = [];
    controls: Array<CreateProjectControlModel> = [];
}

export class CreateProjectControlModel {
    id: string;
    path: string;
    value: string;
    label: string;

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
    options: Array<ProjectFormStepControlOption>;
    items: Array<ProjectFormStepControl>
    value: string;
    label: string;

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
}

export class ProjectRequestModel extends DataRequest {
}
