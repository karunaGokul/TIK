import { BaseModel, DataRequest, ListItem } from './base.model';

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
    Id: string;
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