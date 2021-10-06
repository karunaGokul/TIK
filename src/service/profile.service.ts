import { IBaseService, BaseService } from './base.service';
import { ProfileModel, ProfileRequestModel, ProfileResponse } from '@/model';
import { AxiosRequestConfig } from 'axios';

export interface IProfileService extends IBaseService<any, ProfileResponse> {
    getProfile(request: ProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: ProfileResponse, logo: File): Promise<any>;
    profileSetup(): Promise<Array<ProfileModel>>;
}

export class ProfileService extends BaseService<any, ProfileResponse> implements IProfileService {

    constructor() {
        super('public');
    }

    getProfile(request: ProfileRequestModel): Promise<ProfileResponse> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        return this.httpGet('loadprofile', request).then(response => {
            return response.data;
        });
    }

    public editProfile(request: any, logo: File): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/profile"
        const config: AxiosRequestConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
        const data = new FormData();
        if (logo) {
            data.append("image", logo);
        }
        for (const k in request) {
            if (request[k])
                data.append(k, request[k])
        }
        return this.httpPost('EditProfile', data, config).then(response => {
            return response.data;
        });
    }
    public profileSetup(): Promise<Array<ProfileModel>> {
        this.apiUrl = "https://tikdev-api.azure-api.net/Dashboard"
        // return this.httpGet('profile', request).then(response => {
        //     return response.data;
        // });

        return new Promise((resolve, reject) => {
            const json = `[{
                "visible":true,
                "controls":
                    {                      
                        "id": "btntype",
                        "type": "toggle-button",
                        "options": [
                               {
                                    "id": "opYarn",
                                    "text": "Yarn",
                                    "selected":true
                                },
                                {
                                    "id": "opFabric",                                   
                                    "text": "Fabric",
                                    "selected": false
                                }
                            ]
                        
                    }
                
            },
            {                   
                "parentOptionId": "opYarn",
                "visible":true,
                "controls": 
                    {
                        "id": "tabstype",
                        "type": "tabs",
                        "options": [
                            {
                                "id": "opRegularYarn",                                   
                                "text": "RegularYarn",
                                "selected": false
                            },
                            {
                                "id": "opSlubYarn",                                    
                                "text": "Melange/Slub Yarn",
                                "selected": false
                            },
                            {
                                "id": "opSPLYarn",                                    
                                "text": "SPL Yarn",
                                "selected": false
                            }, 
                            {
                                "id": "opDyedYarn",                                    
                                "text": "Dyed Yarn",
                                "selected": false
                            }
                        ]
                    }
                
            },
            {
                   
                "parentOptionId": "opFabric",
                "visible":false,
                "controls": 
                    {
                        "id": "tabstype",
                        "type": "tabs",
                        "options": [
                            {
                                "id": "opRegularFabric",                                   
                                "text": "RegularFabric",
                                "selected": false
                            },
                            {
                                "id": "opSlubFabric",                                    
                                "text": "Melange/Slub Fabric",
                                "selected": false
                            },
                            {
                                "id": "opSPLFabric",                                    
                                "text": "SPL Fabric",
                                "selected": false
                            }
                        ]
                    }                
            },
            {
                "visible":true,
                "parentOptionId": "opRegularYarn",
                 "controls": 
                         {
                             "id": "labeltype",
                            "type": "label",
                            "options": 
                                      {
                                            "id": "oplabelContentsYarn",                                   
                                            "text": "Choose the single & Blend Contents you offer in regular Yarn"                       
                                      }   
                                       
                        }  

            },
            {
                "visible": true,
                "parentOptionId": "opRegularYarn",
                "controls": {
                    "id": "tabletype",
                    "type": "simpletable",
                    "tableControls": [
                        {
                            "tableHeading": "Single Content",
                            "tableHeader": [
                                "Content",
                                "Spun",
                                "Filaments",
                                "plus"
                            ],
                            "tableData": [
                                {
                                    "rowData": [
                                        {
                                            "controls": {
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
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "checkbox",
                                                "options": {
                                                    "id": "opCheckboxSpum",
                                                    "selected": false
                                                }
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "checkbox",
                                                "options": {
                                                    "id": "opCheckboxFilaments",
                                                    "selected": false
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tableHeading": "Blend Content",
                            "tableHeader": [
                                "Content",
                                "Combo 1",
                                "Combo 2",
                                "Combo 3",
                                "Combo 4",
                                "Combo 5",
                                "plus"
                            ],
                            "tableData": [
                                {
                                    "rowData": [
                                        {
                                            "controls": {
                                                "id": "drpYarn_Single_Content",
                                                "type": "dropdown",
                                                "options": [
                                                    {
                                                        "id": "opYarn_Single_Content_1",
                                                        "text": "Cotton Poly",
                                                        "selected": false
                                                    },
                                                    {
                                                        "id": "opYarn_Single_Content_2",
                                                        "text": "Poly Cotton",
                                                        "selected": false
                                                    },
                                                    {
                                                        "id": "opYarn_Single_Content_3",
                                                        "text": "Poly Viscose",
                                                        "selected": false
                                                    },
                                                    {
                                                        "id": "opYarn_Single_Content_4",
                                                        "text": "Cotton Viscose",
                                                        "selected": false
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "textbox",
                                                "options": [{
                                                    "id": "opTextboxCombo1C",
                                                    "text": "C",
                                                    "selected": false
                                                },
                                                {
                                                    "id": "opTextboxCombo1P",
                                                    "text": "P",
                                                    "selected": false
                                                }]
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "textbox",
                                                "options": [{
                                                    "id": "opTextboxCombo2C",
                                                    "text": "C",
                                                    "selected": false
                                                },
                                                {
                                                    "id": "opTextboxCombo2P",
                                                    "text": "P",
                                                    "selected": false
                                                }]
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "textbox",
                                                "options": [{
                                                    "id": "opTextboxCombo3C",
                                                    "text": "C",
                                                    "selected": false
                                                },
                                                {
                                                    "id": "opTextboxCombo3P",
                                                    "text": "P",
                                                    "selected": false
                                                }]
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "textbox",
                                                "options": [{
                                                    "id": "opTextboxCombo4C",
                                                    "text": "C",
                                                    "selected": false
                                                },
                                                {
                                                    "id": "opTextboxCombo4P",
                                                    "text": "P",
                                                    "selected": false
                                                }]
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "textbox",
                                                "options": [{
                                                    "id": "opTextboxCombo5C",
                                                    "text": "C",
                                                    "selected": false
                                                },
                                                {
                                                    "id": "opTextboxCombo5P",
                                                    "text": "P",
                                                    "selected": false
                                                }]
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "visible":true,
                "parentOptionId": "opRegularYarn",
                 "controls": 
                         {
                             "id": "labeltype",
                            "type": "label",
                            "options": 
                                      {
                                            "id": "oplabelQualityYarn",                                   
                                            "text": "Choose the single & Blend Quality you offer in regular Yarn"                       
                                      }   
                                       
                        }  

            },
            {
                "visible": true,
                "parentOptionId": "opRegularYarn",
                "controls": {
                    "id": "tabletype",
                    "type": "simpletable",
                    "tableControls": [
                        {
                            "tableHeading": "Single Quality",
                            "tableData": [
                                {
                                    "rowData": [
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "label",
                                                "options": {
                                                    "id": "oplabelSuperCombed",
                                                    "text": "Super Combed(RL)",
                                                    "selected": false
                                                }
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "checkboxtype",
                                                "type": "checkbox",
                                                "options": {
                                                    "id": "opCheckboxSuperCombed",
                                                    "selected": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "rowData": [
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "label",
                                                "options": {
                                                    "id": "oplabelCombed",
                                                    "text": "Combed (VL)",
                                                    "selected": false
                                                }
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "checkboxtype",
                                                "type": "checkbox",
                                                "options": {
                                                    "id": "opCheckboxCombed",
                                                    "selected": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "rowData": [
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "label",
                                                "options": {
                                                    "id": "oplabelSemiCombed",
                                                    "text": "Semi Combed (GL)",
                                                    "selected": false
                                                }
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "checkboxtype",
                                                "type": "checkbox",
                                                "options": {
                                                    "id": "opCheckboxSemiCombed",
                                                    "selected": false
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tableHeading": "Blend Quality",
                            "tableData": [
                                {
                                    "rowData": [
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "label",
                                                "options": {
                                                    "id": "oplabelSuperCombed",
                                                    "text": "Super Combed(RL)",
                                                    "selected": false
                                                }
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "checkboxtype",
                                                "type": "checkbox",
                                                "options": {
                                                    "id": "opCheckboxSuperCombed",
                                                    "selected": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "rowData": [
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "label",
                                                "options": {
                                                    "id": "oplabelCombed",
                                                    "text": "Combed (VL)",
                                                    "selected": false
                                                }
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "checkboxtype",
                                                "type": "checkbox",
                                                "options": {
                                                    "id": "opCheckboxCombed",
                                                    "selected": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "rowData": [
                                        {
                                            "controls": {
                                                "id": "labeltype",
                                                "type": "label",
                                                "options": {
                                                    "id": "oplabelSemiCombed",
                                                    "text": "Semi Combed (GL)",
                                                    "selected": false
                                                }
                                            }
                                        },
                                        {
                                            "controls": {
                                                "id": "checkboxtype",
                                                "type": "checkbox",
                                                "options": {
                                                    "id": "opCheckboxSemiCombed",
                                                    "selected": false
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "visible":true,
                "parentOptionId": "opRegularYarn",
                 "controls": 
                         {
                             "id": "labeltype",
                            "type": "label",
                            "options": 
                                      {
                                            "id": "oplabelcountYarn",                                   
                                            "text": "Choose the count and denier you offer the Regular Yarns"                       
                                      }   
                                       
                        }  

            },
            {
                "visible":true,
                "parentOptionId": "opRegularYarn",
                 "controls": 
                         {
                             "id": "texttype",
                            "type": "text",
                            "options": 
                                      {
                                            "id": "optextcountYarn",                                   
                                            "text": "Counts:"                       
                                      }   
                                       
                        }  

            },
            {
                "visible":true,
                "parentOptionId": "opRegularYarn",
                 "controls": 
                         {
                             "id": "texttype",
                            "type": "text",
                            "options": 
                                      {
                                            "id": "optextDeniersYarn",                                   
                                            "text": "Deniers:"                       
                                      }   
                                       
                        }  

            },
            {
                "visible":true,
                "parentOptionId": "opRegularYarn",
                 "controls": 
                         {
                             "id": "texttype",
                            "type": "text",
                            "options": 
                                      {
                                            "id": "optextCreditYarn",                                   
                                            "text": "Enter AVG Credit time you offer:"                       
                                      }   
                                       
                        }  

            }
            
            
           ]`;


            resolve(JSON.parse(json));
        });
    }

}