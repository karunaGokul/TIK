import { IBaseService, BaseService } from './base.service';
import { CompanyProfileModel, ProfileRequestModel, ProfileResponse } from '@/model';
import { AxiosRequestConfig } from 'axios';

export interface IProfileService extends IBaseService<any, ProfileResponse> {
    getProfile(request: ProfileRequestModel): Promise<ProfileResponse>;
    editProfile(request: ProfileResponse, logo: File): Promise<any>;
    CreateMills(): Promise<CompanyProfileModel>;
    AddMills(request:CompanyProfileModel):Promise<any>;
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
    AddMills(request:CompanyProfileModel):Promise<any>
    {this.apiUrl = "https://tikdev-api.azure-api.net/ProfileMills"
    return this.httpPost('AddMills', request).then(response => {
        return response.data;
    });

    }
    CreateMills(): Promise<CompanyProfileModel> {
        // this.apiUrl = "https://tikdev-api.azure-api.net/ProfileMills"
        // return this.httpGet('CreateMills', null).then(response => {
        //     return response.data;
        // });

        return new Promise((resolve, reject) => {
            const json = `{
              "yarn": {
                "regularYarn": {
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
                  "blendQualities": [
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
                  "contentLable": "Choose the single & blend contents you offer in Regular Yarn",
                  "qualityLable": "Choose the single & blend quality you offer in Regular Yarn",
                  "countLable": "Choose the counts and deniers you offer in Regular Yarn",
                  "typeLable": null
                },
                "melangeSlubYarn": {
                  "melange": {
                    "melanSlubTypes": [
                      {
                        "id": "1",
                        "name": "LT Grey MEL",
                        "isSelected": false
                      },
                      {
                        "id": "2",
                        "name": "Grey MEL",
                        "isSelected": false
                      },
                      {
                        "id": "3",
                        "name": "Andhra MEL",
                        "isSelected": false
                      },
                      {
                        "id": "4",
                        "name": "Char Goal MEL",
                        "isSelected": false
                      },
                      {
                        "id": "5",
                        "name": "OAT Meal MEL",
                        "isSelected": false
                      },
                      {
                        "id": "6",
                        "name": "ECRU MEL",
                        "isSelected": false
                      }
                    ],
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
                        "melanSlubType":null,
                        "melanSluboptions": [
                          {
                            "id": "1",
                            "name": "LT Grey MEL"
                          },
                          {
                            "id": "2",
                            "name": "Grey MEL"
                          },
                          {
                            "id": "3",
                            "name": "Andhra MEL"
                          },
                          {
                            "id": "4",
                            "name": "Char Goal MEL"
                          },
                          {
                            "id": "5",
                            "name": "OAT Meal MEL"
                          },
                          {
                            "id": "6",
                            "name": "ECRU MEL"
                          }
                        ]
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
                        ],
                        "melanSlubType":null,
                        "melanSlubOptions": [
                          {
                            "id": "1",
                            "name": "LT Grey MEL"
                          },
                          {
                            "id": "2",
                            "name": "Grey MEL"
                          },
                          {
                            "id": "3",
                            "name": "Andhra MEL"
                          },
                          {
                            "id": "4",
                            "name": "Char Goal MEL"
                          },
                          {
                            "id": "5",
                            "name": "OAT Meal MEL"
                          },
                          {
                            "id": "6",
                            "name": "ECRU MEL"
                          }
                        ]
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
                    "avgCreditTime": null,
                    "contentLable": null,
                    "qualityLable": null,
                    "countLable": null,
                    "typeLable": null
                  },
                  "slub": {
                    "melanSlubTypes": [
                      {
                        "id": "7",
                        "name": "SORT SLUB",
                        "isSelected": false
                      },
                      {
                        "id": "8",
                        "name": "MEDIUM SLUB",
                        "isSelected": false
                      },
                      {
                        "id": "9",
                        "name": "LONG SLUB",
                        "isSelected": false
                      }
                    ],
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
                        "melanSlubType":null,
                        "melanSlubOptions": [
                          {
                            "id": "7",
                            "name": "SORT SLUB"
                          },
                          {
                            "id": "8",
                            "name": "MEDIUM SLUB"
                          },
                          {
                            "id": "9",
                            "name": "LONG SLUB"
                          }
                        ]
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
                        ],
                        "melanSlubType":null,
                        "melanSlubOptions": [
                          {
                            "id": "7",
                            "name": "SORT SLUB"
                          },
                          {
                            "id": "8",
                            "name": "MEDIUM SLUB"
                          },
                          {
                            "id": "9",
                            "name": "LONG SLUB"
                          }
                        ]
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
                    "avgCreditTime": null,
                    "contentLable": null,
                    "qualityLable": null,
                    "countLable": null,
                    "typeLable": null
                  }
                },
                "specialYarn": {
                  "singleSpecialDyedTypes": [
                    {
                      "isSelected": false,
                      "id": "1",
                      "name": "Compact"
                    },
                    {
                      "isSelected": false,
                      "id": "4",
                      "name": "Organic"
                    },
                    {
                      "isSelected": false,
                      "id": "5",
                      "name": "BCI"
                    },
                    {
                      "isSelected": false,
                      "id": "7",
                      "name": "Siro Clened"
                    },
                    {
                      "isSelected": false,
                      "id": "8",
                      "name": "PIMA"
                    },
                    {
                      "isSelected": false,
                      "id": "9",
                      "name": "CMIA"
                    }
                  ],
                  "blendSpecialDyedTypes": [
                    {
                      "isSelected": false,
                      "id": "2",
                      "name": "Compact"
                    },
                    {
                      "isSelected": false,
                      "id": "3",
                      "name": "Organic"
                    },
                    {
                      "isSelected": false,
                      "id": "6",
                      "name": "BCI"
                    }
                  ],
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
                  "blendQualities": [
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
                  "counts": [
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
                  "selectedCounts": null,
                  "deniers": [
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
                  "selectedDeniers": null,
                  "avgCreditTime": null,
                  "contentLable": "Choose the single & blend contents you offer in Special Yarn",
                  "qualityLable": "Choose the single & blend quality you offer in Special Yarn",
                  "countLable": "Choose the counts and deniers you offer in Special Yarn",
                  "typeLable": "Choose the types you offer in Special Yarn"
                },
                "dyedYarn": {
                  "singleSpecialDyedTypes": [
                    {
                      "isSelected": false,
                      "id": "1",
                      "name": "Compact"
                    },
                    {
                      "isSelected": false,
                      "id": "4",
                      "name": "Organic"
                    },
                    {
                      "isSelected": false,
                      "id": "5",
                      "name": "BCI"
                    },
                    {
                      "isSelected": false,
                      "id": "7",
                      "name": "Siro Clened"
                    },
                    {
                      "isSelected": false,
                      "id": "8",
                      "name": "PIMA"
                    },
                    {
                      "isSelected": false,
                      "id": "9",
                      "name": "CMIA"
                    }
                  ],
                  "blendSpecialDyedTypes": [
                    {
                      "isSelected": false,
                      "id": "2",
                      "name": "Compact"
                    },
                    {
                      "isSelected": false,
                      "id": "3",
                      "name": "Organic"
                    },
                    {
                      "isSelected": false,
                      "id": "6",
                      "name": "BCI"
                    }
                  ],
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
                  "blendQualities": [
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
                  "counts": [
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
                  "selectedCounts": null,
                  "deniers": [
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
                  "selectedDeniers": null,
                  "avgCreditTime": null,
                  "contentLable": "Choose the single & blend contents you offer in Dyed Yarn",
                  "qualityLable": "Choose the single & blend quality you offer in Dyed Yarn",
                  "countLable": "Choose the counts and deniers you offer in Dyed Yarn",
                  "typeLable": "Choose the types you offer in Dyed Yarn"
                }
              },
              "fabric": null
            }`;


            resolve(JSON.parse(json));
        });
    }

}