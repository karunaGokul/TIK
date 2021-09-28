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
                "steps": [
                    {
                        "stepNumber": 1,
                        "title": "Choose Your Content",
                        "controls": [
                            {
                                "id": "btntype",
                                "type": "toggle-button",
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
                        "stepNumber": 2,
                        "parentOptionId": "opYarn",
                        "title": "Choose Yarn Content",
                        "controls": [
                            {
                                "id": "btnContenttype",
                                "type": "toggle-button",
                                "options": [
                                    {
                                        "id": "opYarn_Single",
                                        "label": "A",
                                        "text": "Single",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Blends",
                                        "label": "B",
                                        "text": "Blends",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "stepNumber": 2,
                        "parentOptionId": "opFabric",
                        "title": "Choose Fabric Content",
                        "controls": [
                            {
                                "id": "btnFabricContent",
                                "type": "toggle-button",
                                "options": [
                                    {
                                        "id": "opFabric_Single",
                                        "label": "A",
                                        "text": "Single",
                                        "selected": false
                                    },
                                    {
                                        "id": "opFabric_Blends",
                                        "label": "B",
                                        "text": "Blends",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "stepNumber": 3,
                        "parentOptionId": "opYarn_Single",
                        "title": "Choose Single Yarn Content",
                        "controls": [
                            {
                                "id": "drpYarn_Single_Content",
                                "type": "dropdown",
                                "options": [
                                    {
                                        "id": "opYarn_Single_Content_1",
                                        "text": "100% Cotton",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Content_2",
                                        "text": "100% Viscose",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Content_3",
                                        "text": "100% Modal",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Content_4",
                                        "text": "100% Polyster",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "btnYarn_Single_Content",
                                "type": "toggle-button",
                                "options": [
                                    {
                                        "id": "opYarn_Single_Content_Spun",
                                        "label": "A",
                                        "text": "Spun",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Content_Filament",
                                        "label": "B",
                                        "text": "Filament",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "stepNumber": 4,
                        "parentOptionId": "opYarn_Single",
                        "title": "Choose Yarn Type",
                        "controls": [
                            {
                                "id": "btnYarn_Single_Type",
                                "type": "toggle-button",
                                "options": [
                                    {
                                        "id": "opYarn_Single_Type_Regular",
                                        "label": "A",
                                        "text": "Regular Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Special",
                                        "label": "B",
                                        "text": "Special Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Dyed",
                                        "label": "C",
                                        "text": "Dyed Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Melange",
                                        "label": "D",
                                        "text": "Melange / Slub Yarn",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "stepNumber": 5,
                        "parentOptionId": "opYarn_Single_Type_Regular",
                        "title": "Choose Quality Type",
                        "controls": [
                            {
                                "id": "btnYarn_Single_Type_Regular",
                                "type": "toggle-button",
                                "options": [
                                    {
                                        "id": "opYarn_Single_Type_Regular_SuperCombed",
                                        "label": "A",
                                        "text": "Super Combed RL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Regular_Combed",
                                        "label": "B",
                                        "text": "Combed VL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Regular_SemiCombed",
                                        "label": "C",
                                        "text": "Semi Combed GL",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Regular_Carded",
                                        "label": "D",
                                        "text": "Carded",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Regular_Oe",
                                        "label": "E",
                                        "text": "OE",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "stepNumber": 5,
                        "parentOptionId": "opYarn_Single_Type_Special",
                        "title": "Choose Special Yarn Type",
                        "controls": [
                            {
                                "id": "btnYarn_Single_Type_Special",
                                "type": "toggle-button",
                                "options": [
                                    {
                                        "id": "opYarn_Single_Type_Special_Compact",
                                        "label": "A",
                                        "text": "Compact Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Special_Organic",
                                        "label": "B",
                                        "text": "Organic Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Special_Bci",
                                        "label": "C",
                                        "text": "BCI",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Quality_Siro",
                                        "label": "D",
                                        "text": "Siro Cleared Yarn",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Quality_Pima",
                                        "label": "E",
                                        "text": "PIMA",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarn_Single_Type_Quality_Cmia",
                                        "label": "F",
                                        "text": "CMIA",
                                        "selected": false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }`;

            resolve(JSON.parse(json));
        });
    }
}