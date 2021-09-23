import { IBaseService, BaseService } from './base.service';
import { ProfileModel, ProfileRequestModel, ProfileResponse } from '@/model';
import { AxiosRequestConfig } from 'axios';

export interface IProfileService extends IBaseService<any, ProfileResponse> {
    getProfile(request: ProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: ProfileResponse, logo: File): Promise<any>;
    profileSetup(): Promise<ProfileModel>;
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
        data.append("image", logo);

        for (const k in request) {
            if (request[k])
                data.append(k, request[k])
        }
        return this.httpPost('EditProfile', data, config).then(response => {
            return response.data;
        });
    }
    public profileSetup(): Promise<ProfileModel> {
        this.apiUrl = "https://tikdev-api.azure-api.net/Dashboard"
        // return this.httpGet('newproject', request).then(response => {
        //     return response.data;
        // });

        return new Promise((resolve, reject) => {
            const json = `{
                {"controls":[
                    {                      
                        "id": "btntype",
                        "type": "toggle-button",
                        "options": [
                               {
                                    "id": "opYarn",
                                    "text": "Yarn",
                                    "selected": false
                                },
                                {
                                    "id": "opFabric",                                   
                                    "text": "Fabric",
                                    "selected": false
                                }
                            ]
                        
                    },
                ]},
                {
                   
                    "parentId": "opYarn",
                    "controls": [
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
                    ]
                },
                {
                   
                    "parentId": "opFabric",
                    "controls": [
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
                    ]
                },
                {
                   "title":"Choose the single + Blend Contents you offer in regular Fabric"
                    "parentId": "opRegularYarn",
                    "tableControls": [
                        {"tableHeader":"Single Content"                          
                            "tableHeading": [{
                                "text":"Content",
                                "align":"start",
                                "sortable":false,
                                "value":"Content",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"Spun",                        
                                 "value":"Spun",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"Filaments",                        
                                "value":"Filaments",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"plus",                        
                                "value":" ",
                                "class": "teal lighten-4 subtitle-2",
                            }]
                           
                        },
                        {"tableHeader":  "Blend Content"                        
                            "tableHeading": ["tableHeading": [{
                                "text":"Content",
                                "align":"start",
                                "sortable":false,
                                "value":"Content",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"Comb 1",                        
                                 "value":"Comb1",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"Comb 2",                        
                                "value":"Comb2",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"Comb 3",                        
                                "value":"Comb3",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"Comb 4",                        
                                "value":"Comb4",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"Comb 5",                        
                                "value":"Comb5",
                                "class": "teal lighten-4 subtitle-2",
                            },
                            {
                                "text":"plus",                        
                                "value":" ",
                                "class": "teal lighten-4 subtitle-2",
                            }]
                           
                        }
                    ]
                },
            }`;

            resolve(JSON.parse(json));
        });
    }

}