
export class ListItem {
    constructor(public text: string, public value?: string) { }
}

export class ProjectFormModel {
    formHeading: string;
    formSubHeading: string;
    visibility: boolean;
    controls: Array<ProjectFormControlModel> = [];

}

export class ProjectFormControlModel {

    controlType: string;
    option?: string;
    label?: string;
    active: boolean;
    commandValue?: any;
    listControlOptions?: Array<ListItem>;
    constructor() {
        this.active = false;
        this.commandValue = '';
    }
    child?: ProjectFormModel;
}