
export class ProjectFormModel {
    controls: Array<ProjectFormControlModel> = [];
}

export class ProjectFormControlModel {
    controlType: string;
    text: string;
    label: string;

    active: boolean;

    constructor() {
        this.active = false;
    }

    children: Array<ProjectFormControlModel> = [];
}