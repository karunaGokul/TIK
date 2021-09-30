import { IBaseService, BaseService } from './base.service';
import { ProjectFormModel, ProjectRequestModel } from '@/model';

export interface IProjectService extends IBaseService<ProjectRequestModel, ProjectFormModel> {
    newProject(categoryName: string, projectName: string): Promise<ProjectFormModel>;
}
export class ProjectService extends BaseService<ProjectRequestModel, ProjectFormModel> implements IProjectService {

    constructor() {
        super('public');
    }

    public newProject(categoryName: string, projectName: string): Promise<ProjectFormModel> {
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
                        "title": "Choose Yarn Type", 
                        "path": ["opYarn"],                        
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
                        "title": "Choose Yarn Content", 
                        "path": ["opYarn-opRegular", "opYarn-opSpecial", "opYarn-opDyed"],                        
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
                                        "id": "opBlend",
                                        "label": "B",
                                        "text": "Blends",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Single Content", 
                        "path": ["opYarn-opRegular-opSingle", "opYarn-opSpecial-opSingle", "opYarn-opDyed-opSingle"],                 
                        "controls": [
                            {
                                "id": "drpSingleContent",
                                "type": "dropdown",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opSingleContent_1",
                                        "text": "100% Cotton",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSingleContent_2",
                                        "text": "100% Viscose",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSingleContent_3",
                                        "text": "100% Modal",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSingleContent_4",
                                        "text": "100% Polyster",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "btnSingleContent",
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
                        "title": "Choose Special Yarn Type", 
                        "path": ["opYarn-opSpecial-opSingle-opSpun", "opYarn-opDyed-opSingle-opSpun"],                   
                        "controls": [
                            {
                                "id": "drpSpecialYarnType",
                                "type": "toggle-button",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opSpecialYarnType_Compact",
                                        "label": "A",
                                        "text": "Compact",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpecialYarnType_Organic",
                                        "label": "B",
                                        "text": "Organic",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpecialYarnType_Bci",
                                        "label": "C",
                                        "text": "BCI",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpecialYarnType_SiroClened",
                                        "label": "D",
                                        "text": "Siro Clened",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpecialYarnType_Pima",
                                        "label": "E",
                                        "text": "PIMA",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpecialYarnType_Cmia",
                                        "label": "E",
                                        "text": "CMIA",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Spun Quality", 
                        "path": ["opYarn-opRegular-opSingle-opSpun", "opYarn-opSpecial-opSingle-opSpun-drpSpecialYarnType", "opYarn-opDyed-opSingle-opSpun-drpSpecialYarnType"],                   
                        "controls": [
                            {
                                "id": "drpSpunQuality",
                                "type": "toggle-button",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opSpunQuality_SuperCombed",
                                        "label": "A",
                                        "text": "Super Combed RL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpunQuality_CombedRl",
                                        "label": "B",
                                        "text": "Combed VL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpunQuality_SemiCombedGl",
                                        "label": "C",
                                        "text": "Semi Combed GL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpunQuality_Carded",
                                        "label": "D",
                                        "text": "Carded",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpunQuality_Oe",
                                        "label": "E",
                                        "text": "OE",
                                        "selected": false
                                    }
                                ]
                            },                            
                            {
                                "id": "txtSpunCount",
                                "type": "textbox",
                                "selector": false,
                                "label": "Enter Your Count"
                            }
                        ]
                    },
                    {
                        "title": "Choose Filament Quality", 
                        "path": ["opYarn-opRegular-opSingle-opFilament", "opYarn-opSpecial-opSingle-opFilament-drpSpecialYarnType", "opYarn-opDyed-opSingle-opFilament-drpSpecialYarnType"],                   
                        "controls": [
                            {
                                "id": "drpFilamentQuality",
                                "type": "toggle-button",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opFilamentQuality_SuperCombed",
                                        "label": "A",
                                        "text": "Super Combed RL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opFilamentQuality_CombedRl",
                                        "label": "B",
                                        "text": "Combed VL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opFilamentQuality_SemiCombedGl",
                                        "label": "C",
                                        "text": "Semi Combed GL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opFilamentQuality_Carded",
                                        "label": "D",
                                        "text": "Carded",
                                        "selected": false
                                    },
                                    {
                                        "id": "opFilamentQuality_Oe",
                                        "label": "E",
                                        "text": "OE",
                                        "selected": false
                                    }
                                ]
                            },                            
                            {
                                "id": "txtFilamentDenier",
                                "type": "textbox",
                                "selector": false,
                                "label": "Enter Your Denier"
                            }
                        ]
                    },
                    {
                        "title": "Choose Blend Content", 
                        "path": ["opYarn-opRegular-opBlend", "opYarn-opSpecial-opBlend", "opYarn-opDyed-opBlend"],                 
                        "controls": [
                            {
                                "id": "drpBlendContent",
                                "type": "dropdown",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opBlendContent_1",
                                        "text": "Cotton Poly",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendContent_2",
                                        "text": "Poly Cotton",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendContent_3",
                                        "text": "Cotton Model",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendContent_4",
                                        "text": "Poly Viscose",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendContent_5",
                                        "text": "Cotton Viscose",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendContent_6",
                                        "text": "CottonPoly Viscose",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendContent_7",
                                        "text": "Lenzing Modal",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "txtBlendContent",
                                "type": "text-group",
                                "label": "Enter Your Required Blend Combination",
                                "selector": false,
                                "items": [
                                    {
                                        "id": "txtBlendContent_1",
                                        "type": "textbox",
                                        "selector": false
                                    },
                                    {
                                        "id": "txtBlendContent_2",
                                        "type": "textbox",
                                        "selector": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Special Yarn Type", 
                        "path": ["opYarn-opSpecial-opBlend-drpBlendContent", "opYarn-opDyed-opBlend-drpBlendContent"],                   
                        "controls": [
                            {
                                "id": "drpSpecialYarnType",
                                "type": "toggle-button",
                                "selector": true,
                                "options": [
                                    {
                                        "id": "opSpecialYarnType_Compact",
                                        "label": "A",
                                        "text": "Compact",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpecialYarnType_Organic",
                                        "label": "B",
                                        "text": "Organic",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSpecialYarnType_Bci",
                                        "label": "C",
                                        "text": "BCI",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Choose Blend Quality", 
                        "path": ["opYarn-opRegular-opBlend-drpBlendContent", "opYarn-opSpecial-opBlend-drpBlendContent-drpSpecialYarnType", "opYarn-opDyed-opBlend-drpBlendContent-drpSpecialYarnType"],                   
                        "controls": [
                            {
                                "id": "drpBlendQuality",
                                "type": "toggle-button",
                                "selector": false,
                                "options": [
                                    {
                                        "id": "opBlendQuality_SuperCombed",
                                        "label": "A",
                                        "text": "Super Combed RL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendQuality_CombedRl",
                                        "label": "B",
                                        "text": "Combed VL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendQuality_SemiCombedGl",
                                        "label": "C",
                                        "text": "Semi Combed GL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendQuality_Carded",
                                        "label": "D",
                                        "text": "Carded",
                                        "selected": false
                                    },
                                    {
                                        "id": "opBlendQuality_Oe",
                                        "label": "E",
                                        "text": "OE",
                                        "selected": false
                                    }
                                ]
                            },                            
                            {
                                "id": "txtBlendCount",
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