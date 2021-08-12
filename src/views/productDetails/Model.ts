export class FabricFormModel {
    formHeading: string;
    subHeading: string;
    controls: Array<FabricFormControlModel> = [];
    counts: number;
    credits: number;
    deniers: number;

}

export class FabricFormControlModel {
    controlType: string;
    listType: Array<ListItem> = [];
    tableHeading: string;
    tableData: string | number;
}

export class ListItem {
    constructor(public text: string | number) { }
}