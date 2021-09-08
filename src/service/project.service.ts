import { IBaseService, BaseService } from './base.service';
import { ProjectFormModel, ProjectFormRequestModel, ProjectFormResponseModel } from '@/model';

export interface IProjectService extends IBaseService<ProjectFormRequestModel, ProjectFormResponseModel> {
    newProject(request: ProjectFormRequestModel): Promise<ProjectFormModel>;
}
export class ProjectService extends BaseService<ProjectFormRequestModel, ProjectFormResponseModel> implements IProjectService {

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
                        "stepNumber": 2,
                        "parentOptionId": "opFabric",
                        "title": "Choose Fabric Content",
                        "controls": [
                            {
                                "id": "btnContenttype",
                                "type": "toggle-button",
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
                        "stepNumber": 3,
                        "title": "Choose Special Yarn type",
                        "controls": [
                            {
                                "id": "drpYarntype",
                                "type": "dropdown",
                                "options": [
                                    {
                                        "id": "opYarntype1",
                                        "text": "Yarn type 1",
                                        "selected": false
                                    },
                                    {
                                        "id": "opYarntype2",
                                        "text": "Yarn type 2",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "btnYarntype",
                                "type": "toggle-button",
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
                        "stepNumber": 4,
                        "title": "Choose the Single",
                        "controls": [
                            {
                                "id": "drpSingletype",
                                "type": "dropdown",
                                "options": [
                                    {
                                        "id": "opSingletype1",
                                        "text": "Single type 1",
                                        "selected": false
                                    },
                                    {
                                        "id": "opSingletype2",
                                        "text": "Single type 2",
                                        "selected": false
                                    }
                                ]
                            },
                            {
                                "id": "txtDenier",
                                "type": "textbox"
                            }
                        ]
                    }
                ]
            }`;

            resolve(JSON.parse(json));
        });
    }
}