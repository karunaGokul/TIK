import { IBaseService, BaseService } from './base.service';
import { ProjectFormModel, ProjectFormRequestModel } from '@/model';

export interface IProjectService extends IBaseService<ProjectFormRequestModel, ProjectFormModel> {
    newProject(request: ProjectFormRequestModel): Promise<ProjectFormModel>;
}
export class ProjectService extends BaseService<ProjectFormRequestModel, ProjectFormModel> implements IProjectService {

    constructor() {
        super('public');
    }

    public newProject(request: ProjectFormRequestModel): Promise<ProjectFormModel> {
        this.apiUrl = "https://tikdev-api.azure-api.net/Dashboard"
        // return this.httpGet('newproject', request).then(response => {
        //     return response.data;
        // });

        return new Promise((resolve, reject) => {
            const json = `{
                "category": "Mills",
                "maxSteps": 6,
                "steps": [
                    {
                        "title": "Choose Your Content",
                        "path": [""],
                        "controls": [
                            {
                                "id": "btnContent",
                                "type": "toggle-button",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opYarn",
                                        "label": "A",
                                        "text": "Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opFabric",
                                        "label": "B",
                                        "text": "Fabric",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Yarn Content", 
                        "path": ["opYarn"],                        
                        "controls": [
                            {
                                "id": "btnContenttype",
                                "type": "toggle-button",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opSingle",
                                        "label": "A",
                                        "text": "Single",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlends",
                                        "label": "B",
                                        "text": "Blends",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Single Yarn Content", 
                        "path": ["opYarn-opSingle"],                 
                        "controls": [
                            {
                                "id": "drpYarnContent",
                                "type": "dropdown",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opYarnContent_1",
                                        "text": "100% Cotton",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarnContent_2",
                                        "text": "100% Viscose",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarnContent_3",
                                        "text": "100% Modal",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarnContent_4",
                                        "text": "100% Polyster",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "btnYarnContent",
                                "type": "toggle-button",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opSpun",
                                        "label": "A",
                                        "text": "Spun",
                                        "selected": false
                                    },
                                    {
                                        "id": "opFilament",
                                        "label": "B",
                                        "text": "Filament",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Yarn Type", 
                        "path": ["opYarn-opSingle-btnYarnContent"],                        
                        "controls": [
                            {
                                "id": "btnYarnType",
                                "type": "toggle-button",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opRegular",
                                        "label": "A",
                                        "text": "Regular Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpecial",
                                        "label": "B",
                                        "text": "Special Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyed",
                                        "label": "C",
                                        "text": "Dyed Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opMelange",
                                        "label": "D",
                                        "text": "Melange / Slub Yarn",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Special Yarn Type", 
                        "path": ["opYarn-opSingle-btnYarnContent-opSpecial"],                   
                        "controls": [
                            {
                                "id": "btnSpecialYarnType",
                                "type": "toggle-button",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opCompactYarn",
                                        "label": "A",
                                        "text": "Compact Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opOrganicYarn",
                                        "label": "B",
                                        "text": "Organic Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBci",
                                        "label": "C",
                                        "text": "BCI",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSiroClearedYarn",
                                        "label": "D",
                                        "text": "Siro Cleared Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opPima",
                                        "label": "E",
                                        "text": "PIMA",
                                        "selected": false
                                    },
                                    {
                                        "id": "opCmia",
                                        "label": "F",
                                        "text": "CMIA",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Quality Type", 
                        "path": ["opYarn-opSingle-btnYarnContent-opDyed"],                   
                        "controls": [
                            {
                                "id": "drpDyedSingle",
                                "type": "dropdown",
                                "label": "Choose Single",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opDyedSingle_SuperCombed",
                                        "text": "Super Combed RL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSingle_CombedRl",
                                        "text": "Combed VL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSingle_SemiCombedGl",
                                        "text": "Semi Combed GL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSingle_Carded",
                                        "text": "Carded",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSingle_Oe",
                                        "text": "OE",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "drpDyedSpecial",
                                "type": "dropdown",
                                "label": "Special Yarn Type",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opDyedSpecial_Compact",
                                        "text": "Compact",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSpecial_Organic",
                                        "text": "Organic",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSpecial_Bci",
                                        "text": "BCI",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSpecial_SiroCleared",
                                        "text": "Siro Cleared",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSpecial_Pima",
                                        "text": "PIMA",
                                        "selected": false
                                    },
                                    {
                                        "id": "opDyedSpecial_Cmia",
                                        "text": "CMIA",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "txtYarnQuality",
                                "type": "textbox",
                                "selector": false,
                                "label": "Enter Your Count"
                            }
                        ]
                    },
                    {
                        "title": "Choose the type of Melange or Slub", 
                        "path": ["opYarn-opSingle-btnYarnContent-opMelange"],                   
                        "controls": [
                            {
                                "id": "btnMelangeSlub",
                                "type": "toggle-button",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opMelange",
                                        "text": "Melange",
                                        "label": "A",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSlub",
                                        "text": "Slub",
                                        "label": "B",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "drpMelange",
                                "type": "dropdown",
                                "label": "Special Melange Type",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opMelange_LtGrey",
                                        "text": "LT Grey Mel",
                                        "selected": false
                                    },
                                    {
                                        "id": "opMelange_Grey",
                                        "text": "Grey Mel",
                                        "selected": false
                                    },
                                    {
                                        "id": "opMelange_Andhra",
                                        "text": "Andhra Mel",
                                        "selected": false
                                    },
                                    {
                                        "id": "opMelange_CharGoal",
                                        "text": "Char Goal Mel",
                                        "selected": false
                                    },
                                    {
                                        "id": "opMelange_OatMeal",
                                        "text": "OAT Meal Mel",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "drpSlub",
                                "type": "dropdown",
                                "label": "Special Slub Type",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opSlub_Sort",
                                        "text": "Sort Slub",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSlub_Medium",
                                        "text": "Medium Slub",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSlub_Long",
                                        "text": "Long Slub",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "txtMelangeQuality",
                                "type": "textbox",
                                "selector": false,
                                "label": "Enter Your Count"
                            }
                        ]
                    },
                    {
                        "title": "Choose Quality Type", 
                        "path": [
                            "opYarn-opSingle-btnYarnContent-opRegular",
                            "opYarn-opSingle-btnYarnContent-opSpecial-btnSpecialYarnType"
                        ],
                        "controls": [
                            {
                                "id": "btnYarnQuality",
                                "type": "toggle-button",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opSuperCombed",
                                        "label": "A",
                                        "text": "Super Combed RL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opCombedVl",
                                        "label": "B",
                                        "text": "Combed VL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSemiCombedGl",
                                        "label": "C",
                                        "text": "Semi Combed GL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opCarded",
                                        "label": "D",
                                        "text": "Carded",
                                        "selected": false
                                    },
                                    {
                                        "id": "opOe",
                                        "label": "E",
                                        "text": "OE",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "txtYarnQuality",
                                "type": "textbox",
                                "selector": false,
                                "label": "Enter Your Count"
                            }
                        ]
                    }
                ]
            }`;

            resolve(JSON.parse(json));
        });
    }
}