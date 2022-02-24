import { BaseModel, DataRequest } from "./base.model";

export class DyeingProfileModel {
  id: string;
  companyId: string;
  creatorId: string;
  yarnDyeing: yarndyeModel;
  fabricDyeing: fabricdyeModel;
}

export class yarndyeModel {}

export class fabricdyeModel {
  winch: productDetailModel;
  softFlow: productDetailModel;
}

export class productDetailModel {
  dyeingProcesses: Array<dyeingProcessesModel>;
  lycraBlend: Array<dyeingProcessesModel>;
  singleContents: Array<dyeingProcessesModel> ;
  blendContents: Array<dyeingProcessesModel>;

  availableDyeingProcesses: Array<dyeingProcessesModel> = [];
  availableSingleContents: Array<dyeingProcessesModel> = [];
  availableBlendContents: Array<dyeingProcessesModel> = [];
  availableSingleJerseys: Array<dyeingProcessesModel> = [];
  availableInterlocks: Array<dyeingProcessesModel> = [];
  availableRibs: Array<dyeingProcessesModel> = [];
  availableVesselSizes: Array<dyeingProcessesModel> = [];

  singleJersey: Array<dyeingProcessesModel> = [];
  interlock: Array<dyeingProcessesModel> = [];
  rib: Array<dyeingProcessesModel> = [];
  vesselSizes: Array<dyeingProcessesModel> = [];
  tubular?: string;
  openWidth?: string;
  tubularProcess: tubulardyeModel;
  openWidthProcess: openWidthdyeModel;
}

export class dyeingProcessesModel {
  id: string;
  name: string;
  isSelected?: boolean;
}

export class tubulardyeModel {
  openWidthProcess: openWidthdyeModel;
  availableTubularDryingProcesses: Array<dyeingProcessesModel> = [];
  availableTubularCompactingMachines: Array<dyeingProcessesModel> = [];
  tubularDryingProcesses: string;
  tubularCompactingMachines: string;
}

export class openWidthdyeModel {
  heatSetting: string;
  availableSpecialFinishes: Array<dyeingProcessesModel> = [];
  specialFinishes: string;
  openWidthDryingProcesses: openWidthDryingProcessesModel;
  availableOpenWidthCompactingMachines: Array<dyeingProcessesModel> = [];
  openWidthCompactingMachines: string;
}

export class openWidthDryingProcessesModel {
  stenterDryer: string;
  relaxDryer: string;
  availableDipStenters: Array<dyeingProcessesModel> = [];
  dipStenters: string;
}
