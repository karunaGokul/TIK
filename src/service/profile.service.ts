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
        data.append("image", logo);

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
                "visible":true,
                "parentOptionId": "opRegularYarn",
				"controls": 
                         {
                             "id": "tabletype",
                            "type": "table",
							"tableControls": 
									[
										{	"tableHeader":"Single Content",                          
											"tableHeading": [{
											"text":"Content",
											"align":"start",
											"sortable":false,
											"value":"Content",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"Spun",                        
											 "value":"Spun",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"Filaments",                        
											"value":"Filaments",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"plus",                        
											"value":" ",
											"class": "teal lighten-4 subtitle-2"
											}]
										},
										{   "tableHeader":  "Blend Content",                        
											"tableHeading": [{
											"text":"Content",
											"align":"start",
											"sortable":false,
											"value":"Content",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"Comb 1",                        
											 "value":"Comb1",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"Comb 2",                        
											"value":"Comb2",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"Comb 3",                        
											"value":"Comb3",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"Comb 4",                        
											"value":"Comb4",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"Comb 5",                        
											"value":"Comb5",
											"class": "teal lighten-4 subtitle-2"
											},
											{
											"text":"plus",                        
											"value":" ",
											"class": "teal lighten-4 subtitle-2"
											}]
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
                "visible":true,
                "parentOptionId": "opRegularYarn",
				"controls": 
                         {
                             "id": "tabletype",
                            "type": "simpletable",
							"tableControls": 
									[
										{	"tableHeader":"Single Quality",
                                        "tableData":[
                                            {
                                                "item1": "Super Combed (RL)",
                                                "item2": "checkbox"
                                              },
                                              {
                                                "item1": "Combed (VL)",
                                                "item2": "checkbox"
                                              },
                                              {
                                                "item1": "Semi Combed (GL)",
                                                "item2": "checkbox"
                                              },
                                              {
                                                "item1": "Carded",
                                                "item2":"checkbox"
                                              },
                                              {
                                                "item1": "OE",
                                                "item2": "checkbox"
                                              }
                                        ]                        
											
										},
										{   "tableHeader":  "Blend Quality",
                                        "tableData":[
                                            {
                                                "item1": "Super Combed (RL)",
                                                "item2": "checkbox"
                                              },
                                              {
                                                "item1": "Combed (VL)",
                                                "item2": "checkbox"
                                              },
                                              {
                                                "item1": "Semi Combed (GL)",
                                                "item2": "checkbox"
                                              },
                                              {
                                                "item1": "Carded",
                                                "item2": "checkbox"
                                              },
                                              {
                                                "item1": "OE",
                                                "item2": "checkbox"
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