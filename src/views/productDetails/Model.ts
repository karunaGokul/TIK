export class FabricFormModel {
    formHeading: string;
    subHeading: string;
    controls: Array<FabricFormControlModel> = [];

}

export class FabricFormControlModel {
    controlType: string;
    listType: Array<ListItem> = [];
}

export class ListItem {
    constructor(public text: string, public value?: string) { }
}