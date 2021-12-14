import { ServiceHelper } from './base.service';
import { CompanyProfileModel, ProfileRequestModel, ProfileResponse } from '@/model';
import { AxiosRequestConfig } from 'axios';

export interface IProfileService {
    getProfile(request: ProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: ProfileResponse, logo: File): Promise<any>;
    CreateMills(companyId: string): Promise<CompanyProfileModel>;
    CreateFabric(companyId: string): Promise<CompanyProfileModel>;
    AddMills(request: CompanyProfileModel): Promise<any>;
}

export class ProfileService extends ServiceHelper implements IProfileService {


    getProfile(request: ProfileRequestModel): Promise<ProfileResponse> {
        return this.httpGet('profile/loadprofile', request).then(response => {
            return response.data;
        });
    }

    public editProfile(request: any, logo: File): Promise<any> {
        const config: AxiosRequestConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
        const data = new FormData();

        data.append("image", logo);

        for (const k in request) {
            if (request[k])
                data.append(k, request[k])
        }
        return this.httpPost('profile/EditProfile', data, config).then(response => {
            return response.data;
        });
    }
    AddMills(request: CompanyProfileModel): Promise<any> {
        return this.httpPost('Profile/AddMills', request).then(response => {
            return response.data;
        });

    }
    CreateMills(companyId: string): Promise<CompanyProfileModel> {
        return this.httpGet('Profile/CreateMills?companyId=' + companyId, null).then(response => {
            return response.data;
        });        
    }

    CreateFabric(companyId: string): Promise<CompanyProfileModel> {
               return new Promise((resolve, reject) => {
			const json = `{
                "fabric": {
                    "regularFabric": {
                        "singleContents": [
                            {
                                "contentOptions": [
                                    {
                                        "id": "1",
                                        "name": "100% Cotton"
                                    },
                                    {
                                        "id": "2",
                                        "name": "100% Viscose"
                                    },
                                    {
                                        "id": "3",
                                        "name": "100% Modal"
                                    },
                                    {
                                        "id": "4",
                                        "name": "100% Polyster"
                                    }
                                ],
                                "content": null,
                                "filament": null,
                                "spun": null
                            }
                        ],
                        "blendContents": [
                            {
                                "contentOptions": [
                                    {
                                        "id": "5",
                                        "name": "Cotton Poly"
                                    },
                                    {
                                        "id": "6",
                                        "name": "Poly Cotton"
                                    },
                                    {
                                        "id": "7",
                                        "name": "Cotton Modal"
                                    },
                                    {
                                        "id": "8",
                                        "name": "Poly Viscose"
                                    },
                                    {
                                        "id": "9",
                                        "name": "Cotton Viscose"
                                    }
                                ],
                                "content": null,
                                "combos": [
                                    {
                                        "combinationOne": 0,
                                        "combinationTwo": 0
                                    },
                                    {
                                        "combinationOne": 0,
                                        "combinationTwo": 0
                                    },
                                    {
                                        "combinationOne": 0,
                                        "combinationTwo": 0
                                    },
                                    {
                                        "combinationOne": 0,
                                        "combinationTwo": 0
                                    },
                                    {
                                        "combinationOne": 0,
                                        "combinationTwo": 0
                                    }
                                ]
                            }
                        ],
                        "singleQualities": [
                            {
                                "name": "Super Combed (RL)",
                                "id": "1",
                                "isSelected": false
                            },
                            {
                                "name": "Combed (VL)",
                                "id": "3",
                                "isSelected": false
                            },
                            {
                                "name": "Semi Combed (GL)",
                                "id": "5",
                                "isSelected": false
                            },
                            {
                                "name": "Carded",
                                "id": "7",
                                "isSelected": false
                            },
                            {
                                "name": "OE",
                                "id": "9",
                                "isSelected": false
                            }
                        ],
                        "blendQualities": [
                            {
                                "name": "Super Combed (RL)",
                                "id": "2",
                                "isSelected": false
                            },
                            {
                                "name": "Combed (VL)",
                                "id": "4",
                                "isSelected": false
                            },
                            {
                                "name": "Semi Combed (GL)",
                                "id": "6",
                                "isSelected": false
                            },
                            {
                                "name": "Carded",
                                "id": "8",
                                "isSelected": false
                            },
                            {
                                "name": "OE",
                                "id": "10",
                                "isSelected": false
                            }
                        ],
                        "counts": null,
                        "availableCounts": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23,
                            24,
                            25,
                            26,
                            27,
                            28,
                            29,
                            30,
                            31,
                            32,
                            33,
                            34,
                            35,
                            36,
                            37,
                            38,
                            39,
                            40,
                            41,
                            42,
                            43,
                            44,
                            45,
                            46,
                            47,
                            48,
                            49,
                            50,
                            51,
                            52,
                            53,
                            54,
                            55,
                            56,
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                            80,
                            81,
                            82,
                            83,
                            84,
                            85,
                            86,
                            87,
                            88,
                            89,
                            90,
                            91,
                            92,
                            93,
                            94,
                            95,
                            96,
                            97,
                            98,
                            99,
                            100
                        ],
                        "deniers": null,
                        "availableDeniers": [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23,
                            24,
                            25,
                            26,
                            27,
                            28,
                            29,
                            30,
                            31,
                            32,
                            33,
                            34,
                            35,
                            36,
                            37,
                            38,
                            39,
                            40,
                            41,
                            42,
                            43,
                            44,
                            45,
                            46,
                            47,
                            48,
                            49,
                            50,
                            51,
                            52,
                            53,
                            54,
                            55,
                            56,
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                            80,
                            81,
                            82,
                            83,
                            84,
                            85,
                            86,
                            87,
                            88,
                            89,
                            90,
                            91,
                            92,
                            93,
                            94,
                            95,
                            96,
                            97,
                            98,
                            99,
                            100
                        ],
                        "avgCreditTime": null,
                        "fabricStructure": {
                            "singleJersey": [
                                {
                                    "name": "Single Jersey / Plain / Fine",
                                    "id": "1",
                                    "isSelected": false
                                },
                                {
                                    "name": "Airtex / Pique / Thick Pique",
                                    "id": "2",
                                    "isSelected": false
                                },
                                {
                                    "name": "Honeycomb",
                                    "id": "3",
                                    "isSelected": false
                                },
                                {
                                    "name": "Hemingbane",
                                    "id": "4",
                                    "isSelected": false
                                }
                            ],
                            "interlock": [
                                {
                                    "name": "Plain Interlock",
                                    "id": "5",
                                    "isSelected": false
                                },
                                {
                                    "name": "4 track designs",
                                    "id": "6",
                                    "isSelected": false
                                },
                                {
                                    "name": "Interlock Striper",
                                    "id": "7",
                                    "isSelected": false
                                }
                            ],
                            "rib": [
                                {
                                    "name": "RIB",
                                    "id": "8",
                                    "isSelected": false
                                },
                                {
                                    "name": "2x2 RIB",
                                    "id": "10",
                                    "isSelected": false
                                },
                                {
                                    "name": "1x1 RIB",
                                    "id": "9",
                                    "isSelected": false
                                }
                            ],
                            "tubular": {
                                "gg": null,
                                "dia": null,
                                "allFeeder": false,
                                "alternateFeeder": false
                            },
                            "openWidth": {
                                "gg": null,
                                "dia": null,
                                "allFeeder": false,
                                "alternateFeeder": false
                            }
                        },
                        "contentLable": "Choose the single & blend contents you offer in Regular Fabric",
                        "qualityLable": "Choose the single & blend qualities you offer in Regular Fabric",
                        "countLable": "Choose the counts and deniers you offer in Regular Fabric",
                        "typeLable": "Choose the types you offer in Regular Fabric",
                        "structureLable": "Choose the Fabric structures you offer in Regular Fabric"
                    },
                    "melangeSlubFabric": null,
                    "specialFabric": null
                }
            }`;

			resolve(JSON.parse(json));
		});
    }

}