import { ServiceHelper } from "./base.service";
import { ProjectFormModel, ProjectRequestModel } from "@/model";

export interface IProjectService {
	newProject(categoryName: string, projectName: string): Promise<ProjectFormModel>;

	createProject(request: any): Promise<any>;
	searchProject(request: any): Promise<any>;
}
export class ProjectService extends ServiceHelper implements IProjectService {

	searchProject(request: any): Promise<any> {
		return this.httpPost("dashboard/SearchProject", request).then((response) => {
			return response.data;
		});
	}

	createProject(request: any): Promise<any> {
		return this.httpPost("dashboard/CreateProject", request).then((response) => {
			return response.data;
		});
	}

	public newProject(categoryName: string, projectName: string): Promise<ProjectFormModel> {
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
						"path": [
							""
						],
						"controls": [
							{
								"id": "btnContent",
								"label": "Content Type",
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
						"path": [
							"opYarn"
						],
						"controls": [
							{
								"id": "btnYarnType",
								"label": "Yarn Type",
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
										"id": "opMelangeSlub",
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
						"path": [
							"opYarn-opRegular"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Yarn Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Yarn.RegularYarn.AVGCreditTime",
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
						"title": "Choose Yarn Content",
						"path": [
							"opYarn-opSpecial"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Yarn Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Yarn.SpecialYarn.AVGCreditTime",
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
						"title": "Choose Yarn Content",
						"path": [
							"opYarn-opDyed"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Yarn Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Yarn.DyedYarn.AVGCreditTime",
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
						"title": "Choose Yarn Content",
						"path": [
							"opYarn-opMelangeSlub-opMelange"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Yarn Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Yarn.MelangeSlubYarn.Melange.AVGCreditTime",
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
						"title": "Choose Yarn Content",
						"path": [
							"opYarn-opMelangeSlub-opSlub"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Yarn Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Yarn.MelangeSlubYarn.Slub.AVGCreditTime",
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
						"path": [
							"opYarn-opRegular-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Yarn.RegularYarn.SingleContents",
								"data_id": "Content.Name",
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
								"label": "Single Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Yarn.RegularYarn.SingleContents",
								"options": [
									{
										"id": "opSpun",
										"data_id": "Spun",
										"label": "A",
										"text": "Spun",
										"selected": false
									},
									{
										"id": "opFilament",
										"data_id": "Filament",
										"label": "B",
										"text": "Filament",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Single Content",
						"path": [
							"opYarn-opSpecial-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Yarn.SpecialYarn.SingleContents",
								"data_id": "Content.Name",
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
								"label": "Single Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Yarn.SpecialYarn.SingleContents",
								"options": [
									{
										"id": "opSpun",
										"data_id": "Spun",
										"label": "A",
										"text": "Spun",
										"selected": false
									},
									{
										"id": "opFilament",
										"data_id": "Filament",
										"label": "B",
										"text": "Filament",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Single Content",
						"path": [
							"opYarn-opDyed-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Yarn.DyedYarn.SingleContents",
								"data_id": "Content.Name",
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
								"label": "Single Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Yarn.DyedYarn.SingleContents",
								"options": [
									{
										"id": "opSpun",
										"data_id": "Spun",
										"label": "A",
										"text": "Spun",
										"selected": false
									},
									{
										"id": "opFilament",
										"data_id": "Filament",
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
						"path": [
							"opYarn-opSpecial-opSingle-opSpun"
						],
						"controls": [
							{
								"id": "drpSpecialYarnType",
								"label": "Special Yarn Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Yarn.SpecialYarn.SingleSpecialDyedTypes",
								"data_id": "Name",
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
						"title": "Choose Special Yarn Type",
						"path": [
							"opYarn-opSpecial-opSingle-opFilament"
						],
						"controls": [
							{
								"id": "drpSpecialYarnType",
								"label": "Special Yarn Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Yarn.SpecialYarn.SingleSpecialDyedTypes",
								"data_id": "Name",
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
						"title": "Choose Special Yarn Type",
						"path": [
							"opYarn-opDyed-opSingle-opSpun"
						],
						"controls": [
							{
								"id": "drpSpecialYarnType",
								"label": "Special Yarn Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Yarn.DyedYarn.SingleSpecialDyedTypes",
								"data_id": "Name",
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
						"title": "Choose Special Yarn Type",
						"path": [
							"opYarn-opDyed-opSingle-opFilament"
						],
						"controls": [
							{
								"id": "drpSpecialYarnType",
								"label": "Special Yarn Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Yarn.DyedYarn.SingleSpecialDyedTypes",
								"data_id": "Name",
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
						"path": [
							"opYarn-opRegular-opSingle-opSpun"
						],
						"controls": [
							{
								"id": "drpSpunQuality",
								"label": "Spun Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.RegularYarn.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opSpunQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"data_path": "mil.Yarn.RegularYarn.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Spun Quality",
						"path": [
							"opYarn-opSpecial-opSingle-opSpun-drpSpecialYarnType"
						],
						"controls": [
							{
								"id": "drpSpunQuality",
								"label": "Spun Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.SpecialYarn.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opSpunQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Spun Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.SpecialYarn.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Spun Quality",
						"path": [
							"opYarn-opDyed-opSingle-opSpun-drpSpecialYarnType"
						],
						"controls": [
							{
								"id": "drpSpunQuality",
								"label": "Spun Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.DyedYarn.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opSpunQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Spun Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.DyedYarn.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Filament Quality",
						"path": [
							"opYarn-opRegular-opSingle-opFilament"
						],
						"controls": [
							{
								"id": "drpFilamentQuality",
								"label": "Filament Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.RegularYarn.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opFilamentQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Filament Denier",
								"data_path": "mil.Yarn.RegularYarn.Deniers",
								"data_id": "",
								"type": "textbox",
								"selector": false,
								"label": "Enter Your Denier"
							}
						]
					},
					{
						"title": "Choose Filament Quality",
						"path": [
							"opYarn-opSpecial-opSingle-opFilament-drpSpecialYarnType"
						],
						"controls": [
							{
								"id": "drpFilamentQuality",
								"label": "Filament Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.SpecialYarn.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opFilamentQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Filament Denier",
								"data_path": "mil.Yarn.SpecialYarn.Deniers",
								"data_id": "",
								"type": "textbox",
								"selector": false,
								"label": "Enter Your Denier"
							}
						]
					},
					{
						"title": "Choose Filament Quality",
						"path": [
							"opYarn-opDyed-opSingle-opFilament-drpSpecialYarnType"
						],
						"controls": [
							{
								"id": "drpFilamentQuality",
								"label": "Filament Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.DyedYarn.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opFilamentQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Filament Denier",
								"data_path": "mil.Yarn.DyedYarn.Deniers",
								"data_id": "",
								"type": "textbox",
								"selector": false,
								"label": "Enter Your Denier"
							}
						]
					},
					{
						"title": "Choose Blend Content",
						"path": [
							"opYarn-opRegular-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Yarn.RegularYarn.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Yarn.RegularYarn.BlendContents",
								"data_id": "Combos",
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
						"title": "Choose Blend Content",
						"path": [
							"opYarn-opSpecial-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Yarn.SpecialYarn.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Yarn.SpecialYarn.BlendContents",
								"data_id": "Combos",
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
						"title": "Choose Blend Content",
						"path": [
							"opYarn-opDyed-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Yarn.DyedYarn.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Yarn.DyedYarn.BlendContents",
								"data_id": "Combos",
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
						"path": [
							"opYarn-opSpecial-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "drpSpecialYarnType",
								"label": "Special Yarn Type",
								"type": "toggle-button",
								"data_path": "mil.Yarn.SpecialYarn.BlendSpecialDyedTypes",
								"data_id": "Name",
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
						"title": "Choose Special Yarn Type",
						"path": [
							"opYarn-opDyed-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "drpSpecialYarnType",
								"label": "Special Yarn Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Yarn.DyedYarn.BlendSpecialDyedTypes",
								"data_id": "Name",
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
						"path": [
							"opYarn-opRegular-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "drpBlendQuality",
								"label": "Blend Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.RegularYarn.BlendQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opBlendQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Blend Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.RegularYarn.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Blend Quality",
						"path": [
							"opYarn-opSpecial-opBlend-drpBlendContent-drpSpecialYarnType"
						],
						"controls": [
							{
								"id": "drpBlendQuality",
								"label": "Blend Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.SpecialYarn.BlendQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opBlendQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Blend Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.SpecialYarn.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Blend Quality",
						"path": [
							"opYarn-opDyed-opBlend-drpBlendContent-drpSpecialYarnType"
						],
						"controls": [
							{
								"id": "drpBlendQuality",
								"label": "Blend Quality",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.DyedYarn.BlendQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opBlendQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Blend Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.DyedYarn.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Yarn Content",
						"path": [
							"opYarn-opMelangeSlub"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opMelange",
										"label": "A",
										"text": "Melange",
										"selected": false
									},
									{
										"id": "opSlub",
										"label": "B",
										"text": "Slub",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Single Content",
						"path": [
							"opYarn-opMelangeSlub-opMelange-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleColour",
								"label": "Single Colour",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.SingleContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opSingleColour_1",
										"text": "LT Grey MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_2",
										"text": "Grey MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_3",
										"text": "Andhra MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_4",
										"text": "Char Goal MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_5",
										"text": "OAT Meal MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_6",
										"text": "ECRU MEL",
										"selected": false
									}
								]
							},
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.SingleContents",
								"data_id": "Content.Name",
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
							}
						]
					},
					{
						"title": "Choose Blend Content",
						"path": [
							"opYarn-opMelangeSlub-opMelange-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"id": "drpBlendColour",
								"label": "Blend Colour",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.BlendContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opBlendColour_1",
										"text": "LT Grey MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_2",
										"text": "Grey MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_3",
										"text": "Andhra MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_4",
										"text": "Char Goal MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_5",
										"text": "OAT Meal MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_6",
										"text": "ECRU MEL",
										"selected": false
									}
								]
							},
							{
								"id": "txtBlendContent",
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.BlendContents",
								"data_id": "Combos",
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
						"title": "Choose Melange Type",
						"path": [
							"opYarn-opMelangeSlub-opMelange-opSingle-drpSingleColour"
						],
						"controls": [
							{
								"id": "btnMelangeType",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.MelanSlubTypes",
								"data_id": "Name",
								"options": [
									{
										"id": "opMelangeType_LtGreyMel",
										"label": "A",
										"text": "LT Grey MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_GreyMel",
										"label": "B",
										"text": "Grey MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_AndhraMel",
										"label": "C",
										"text": "Andhra MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_CharGoalMel",
										"label": "D",
										"text": "Char Goal MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_OatMealMel",
										"label": "E",
										"text": "OAT Meal MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_EcruMel",
										"label": "E",
										"text": "ECRU MEL",
										"selected": false
									}
								]
							},
							{
								"id": "txtMelangeCount",
								"label": "Melange Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Melange Type",
						"path": [
							"opYarn-opMelangeSlub-opMelange-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "btnMelangeType",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.MelanSlubTypes",
								"data_id": "Name",
								"options": [
									{
										"id": "opMelangeType_LtGreyMel",
										"label": "A",
										"text": "LT Grey MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_GreyMel",
										"label": "B",
										"text": "Grey MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_AndhraMel",
										"label": "C",
										"text": "Andhra MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_CharGoalMel",
										"label": "D",
										"text": "Char Goal MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_OatMealMel",
										"label": "E",
										"text": "OAT Meal MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_EcruMel",
										"label": "E",
										"text": "ECRU MEL",
										"selected": false
									}
								]
							},
							{
								"id": "txtMelangeCount",
								"label": "Melange Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Melange.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Single Content",
						"path": [
							"opYarn-opMelangeSlub-opSlub-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.SingleContents",
								"data_id": "Content.Name",
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
								"id": "drpSingleType",
								"label": "Single Type",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.MelanSlubTypes",
								"data_id": "Name",
								"options": [
									{
										"id": "opSingleType_1",
										"text": "SORT SLUB",
										"selected": false
									},
									{
										"id": "opSingleType_2",
										"text": "MEDIUM SLUB",
										"selected": false
									},
									{
										"id": "opSingleType_3",
										"text": "LONG SLUB",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Blend Content",
						"path": [
							"opYarn-opMelangeSlub-opSlub-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"id": "drpBlendType",
								"label": "Blend Type",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.MelanSlubTypes",
								"data_id": "Name",
								"options": [
									{
										"id": "opBlendType_1",
										"text": "SORT SLUB",
										"selected": false
									},
									{
										"id": "opBlendType_2",
										"text": "MEDIUM SLUB",
										"selected": false
									},
									{
										"id": "opBlendType_3",
										"text": "LONG SLUB",
										"selected": false
									}
								]
							},
							{
								"id": "txtBlendContent",
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.BlendContents",
								"data_id": "Combos",
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
						"title": "Choose Slub Type",
						"path": [
							"opYarn-opMelangeSlub-opSlub-opSingle-drpSingleContent"
						],
						"controls": [
							{
								"id": "btnMelangeType",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.SingleContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opMelangeType_SortSlub",
										"label": "A",
										"text": "SORT SLUB",
										"selected": false
									},
									{
										"id": "opMelangeType_MediumSlub",
										"label": "B",
										"text": "MEDIUM SLUB",
										"selected": false
									},
									{
										"id": "opMelangeType_LongSlub",
										"label": "C",
										"text": "LONG SLUB",
										"selected": false
									}
								]
							},
							{
								"id": "txtMelangeCount",
								"label": "Melange Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Slub Type",
						"path": [
							"opYarn-opMelangeSlub-opSlub-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "btnMelangeType",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.BlendContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opMelangeType_SortSlub",
										"label": "A",
										"text": "SORT SLUB",
										"selected": false
									},
									{
										"id": "opMelangeType_MediumSlub",
										"label": "B",
										"text": "MEDIUM SLUB",
										"selected": false
									},
									{
										"id": "opMelangeType_LongSlub",
										"label": "C",
										"text": "LONG SLUB",
										"selected": false
									}
								]
							},
							{
								"id": "txtMelangeCount",
								"label": "Melange Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Yarn.MelangeSlubYarn.Slub.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Fabric Type",
						"path": [
							"opFabric"
						],
						"controls": [
							{
								"id": "btnFabricType",
								"label": "Fabric Type",
								"type": "toggle-button",
								"selector": true,
								"options": [
									{
										"id": "opRegular",
										"label": "A",
										"text": "Regular Fabric",
										"selected": false
									},
									{
										"id": "opMelangeSlub",
										"label": "D",
										"text": "Melange / Slub Fabric",
										"selected": false
									},
									{
										"id": "opSpecial",
										"label": "C",
										"text": "SPL Fabric",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Content",
						"path": [
							"opFabric-opRegular"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Fabric Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Fabric.RegularFabric.AVGCreditTime",
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
						"title": "Choose Fabric Content",
						"path": [
							"opFabric-opSpecial"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Fabric Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Fabric.SpecialFabric.AVGCreditTime",
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
						"title": "Choose Fabric Content",
						"path": [
							"opFabric-opMelangeSlub"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Fabric Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Fabric.MelangeSlubFabric.AVGCreditTime",
								"options": [
									{
										"id": "opMelange",
										"label": "A",
										"text": "Melange",
										"selected": false
									},
									{
										"id": "opSlub",
										"label": "B",
										"text": "Slub",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Content",
						"path": [
							"opFabric-opMelangeSlub-opMelange"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Fabric Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Fabric.MelangeSlubFabric.AVGCreditTime",
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
						"title": "Choose Fabric Content",
						"path": [
							"opFabric-opMelangeSlub-opSlub"
						],
						"controls": [
							{
								"id": "btnContenttype",
								"label": "Fabric Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "",
								"data_id": "mil.Fabric.MelangeSlubFabric.AVGCreditTime",
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
						"path": [
							"opFabric-opRegular-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Fabric.RegularFabric.SingleContents",
								"data_id": "Content.Name",
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
								"label": "Single Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.RegularFabric.SingleContents",
								"options": [
									{
										"id": "opSpun",
										"data_id": "Spun",
										"label": "A",
										"text": "Spun",
										"selected": false
									},
									{
										"id": "opFilament",
										"data_id": "Filament",
										"label": "B",
										"text": "Filament",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Single Content",
						"path": [
							"opFabric-opSpecial-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Fabric.SpecialFabric.SingleContents",
								"data_id": "Content.Name",
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
								"label": "Single Content",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.SpecialFabric.SingleContents",
								"options": [
									{
										"id": "opSpun",
										"data_id": "Spun",
										"label": "A",
										"text": "Spun",
										"selected": false
									},
									{
										"id": "opFilament",
										"data_id": "Filament",
										"label": "B",
										"text": "Filament",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Spun Quality",
						"path": [
							"opFabric-opRegular-opSingle-opSpun"
						],
						"controls": [
							{
								"id": "drpSpunQuality",
								"label": "Spun Quality",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.RegularFabric.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opSpunQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_CombedVl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Spun Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Fabric.RegularFabric.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Filament Quality",
						"path": [
							"opFabric-opRegular-opSingle-opFilament"
						],
						"controls": [
							{
								"id": "drpFilamentQuality",
								"label": "Filament Quality",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.RegularFabric.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opFilamentQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Filament Denier",
								"data_path": "mil.Fabric.SpecialFabric.Deniers",
								"data_id": "",
								"type": "textbox",
								"selector": false,
								"label": "Enter Your Denier"
							}
						]
					},
					{
						"title": "Choose Blend Content",
						"path": [
							"opFabric-opRegular-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Fabric.RegularFabric.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Fabric.RegularFabric.BlendContents",
								"data_id": "Combos",
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
						"title": "Choose Blend Content",
						"path": [
							"opFabric-opSpecial-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Fabric.SpecialFabric.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Fabric.SpecialFabric.BlendContents",
								"data_id": "Combos",
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
						"title": "Choose Blend Quality",
						"path": [
							"opFabric-opRegular-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "drpBlendQuality",
								"label": "Blend Quality",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.RegularFabric.BlendQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opBlendQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Blend Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Fabric.RegularFabric.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Special Fabric Type",
						"path": [
							"opFabric-opSpecial-opSingle-opSpun"
						],
						"controls": [
							{
								"id": "drpSpecialFabricType",
								"label": "Special Fabric Type",
								"type": "toggle-button",
								"data_path": "mil.Fabric.SpecialFabric.SingleSpecialDyedTypes",
								"data_id": "Name",
								"selector": true,
								"options": [
									{
										"id": "opSpecialFabricType_Compact",
										"label": "A",
										"text": "Compact",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Organic",
										"label": "B",
										"text": "Organic",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Bci",
										"label": "C",
										"text": "BCI",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_SiroClened",
										"label": "D",
										"text": "Siro Clened",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Pima",
										"label": "E",
										"text": "PIMA",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Cmia",
										"label": "E",
										"text": "CMIA",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Special Fabric Type",
						"path": [
							"opFabric-opSpecial-opSingle-opFilament"
						],
						"controls": [
							{
								"id": "drpSpecialFabricType",
								"label": "Special Fabric Type",
								"type": "toggle-button",
								"data_path": "mil.Fabric.SpecialFabric.SingleSpecialDyedTypes",
								"data_id": "Name",
								"selector": true,
								"options": [
									{
										"id": "opSpecialFabricType_Compact",
										"label": "A",
										"text": "Compact",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Organic",
										"label": "B",
										"text": "Organic",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Bci",
										"label": "C",
										"text": "BCI",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_SiroClened",
										"label": "D",
										"text": "Siro Clened",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Pima",
										"label": "E",
										"text": "PIMA",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Cmia",
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
						"path": [
							"opFabric-opSpecial-opSingle-opSpun-drpSpecialFabricType"
						],
						"controls": [
							{
								"id": "drpSpunQuality",
								"label": "Spun Quality",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.SpecialFabric.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opSpunQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opSpunQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Spun Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Fabric.SpecialFabric.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Filament Quality",
						"path": [
							"opFabric-opSpecial-opSingle-opFilament-drpSpecialFabricType"
						],
						"controls": [
							{
								"id": "drpFilamentQuality",
								"label": "Filament Quality",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.SpecialFabric.SingleQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opFilamentQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opFilamentQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Filament Denier",
								"data_path": "mil.Fabric.SpecialFabric.Deniers",
								"data_id": "",
								"type": "textbox",
								"selector": false,
								"label": "Enter Your Denier"
							}
						]
					},
					{
						"title": "Choose Special Fabric Type",
						"path": [
							"opFabric-opSpecial-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "drpSpecialFabricType",
								"label": "Special Fabric Type",
								"type": "toggle-button",
								"data_path": "mil.Fabric.SpecialFabric.SingleSpecialDyedTypes",
								"data_id": "Name",
								"selector": true,
								"options": [
									{
										"id": "opSpecialFabricType_Compact",
										"label": "A",
										"text": "Compact",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Organic",
										"label": "B",
										"text": "Organic",
										"selected": false
									},
									{
										"id": "opSpecialFabricType_Bci",
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
						"path": [
							"opFabric-opSpecial-opBlend-drpBlendContent-drpSpecialFabricType"
						],
						"controls": [
							{
								"id": "drpBlendQuality",
								"label": "Blend Quality",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.SpecialFabric.BlendQualities",
								"data_id": "Name",
								"options": [
									{
										"id": "opBlendQuality_SuperCombed",
										"label": "A",
										"text": "Super Combed (RL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_CombedRl",
										"label": "B",
										"text": "Combed (VL)",
										"selected": false
									},
									{
										"id": "opBlendQuality_SemiCombedGl",
										"label": "C",
										"text": "Semi Combed (GL)",
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
								"label": "Blend Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Fabric.SpecialFabric.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Single Content",
						"path": [
							"opFabric-opMelangeSlub-opMelange-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleColour",
								"label": "Single Colour",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.SingleContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opSingleColour_1",
										"text": "LT Grey MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_2",
										"text": "Grey MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_3",
										"text": "Andhra MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_4",
										"text": "Char Goal MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_5",
										"text": "OAT Meal MEL",
										"selected": false
									},
									{
										"id": "opSingleColour_6",
										"text": "ECRU MEL",
										"selected": false
									}
								]
							},
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.SingleContents",
								"data_id": "Content.Name",
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
							}
						]
					},
					{
						"title": "Choose Blend Content",
						"path": [
							"opFabric-opMelangeSlub-opMelange-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"id": "drpBlendColour",
								"label": "Blend Colour",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.BlendContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opBlendColour_1",
										"text": "LT Grey MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_2",
										"text": "Grey MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_3",
										"text": "Andhra MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_4",
										"text": "Char Goal MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_5",
										"text": "OAT Meal MEL",
										"selected": false
									},
									{
										"id": "opBlendColour_6",
										"text": "ECRU MEL",
										"selected": false
									}
								]
							},
							{
								"id": "txtBlendContent",
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.BlendContents",
								"data_id": "Combos",
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
						"title": "Choose Melange Type",
						"path": [
							"opFabric-opMelangeSlub-opMelange-opSingle-drpSingleColour"
						],
						"controls": [
							{
								"id": "btnMelangeType",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.BlendContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opMelangeType_LtGreyMel",
										"label": "A",
										"text": "LT Grey MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_GreyMel",
										"label": "B",
										"text": "Grey MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_AndhraMel",
										"label": "C",
										"text": "Andhra MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_CharGoalMel",
										"label": "D",
										"text": "Char Goal MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_OatMealMel",
										"label": "E",
										"text": "OAT Meal MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_EcruMel",
										"label": "E",
										"text": "ECRU MEL",
										"selected": false
									}
								]
							},
							{
								"id": "txtMelangeCount",
								"label": "Melange Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Melange Type",
						"path": [
							"opFabric-opMelangeSlub-opMelange-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "btnMelangeType",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.BlendContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opMelangeType_LtGreyMel",
										"label": "A",
										"text": "LT Grey MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_GreyMel",
										"label": "B",
										"text": "Grey MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_AndhraMel",
										"label": "C",
										"text": "Andhra MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_CharGoalMel",
										"label": "D",
										"text": "Char Goal MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_OatMealMel",
										"label": "E",
										"text": "OAT Meal MEL",
										"selected": false
									},
									{
										"id": "opMelangeType_EcruMel",
										"label": "E",
										"text": "ECRU MEL",
										"selected": false
									}
								]
							},
							{
								"id": "txtMelangeCount",
								"label": "Melange Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Fabric.MelangeSlubFabric.Melange.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Single Content",
						"path": [
							"opFabric-opMelangeSlub-opSlub-opSingle"
						],
						"controls": [
							{
								"id": "drpSingleContent",
								"label": "Single Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.SingleContents",
								"data_id": "Content.Name",
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
								"id": "drpSingleType",
								"label": "Single Type",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.MelanSlubTypes",
								"data_id": "Name",
								"options": [
									{
										"id": "opSingleType_1",
										"text": "SORT SLUB",
										"selected": false
									},
									{
										"id": "opSingleType_2",
										"text": "MEDIUM SLUB",
										"selected": false
									},
									{
										"id": "opSingleType_3",
										"text": "LONG SLUB",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Blend Content",
						"path": [
							"opFabric-opMelangeSlub-opSlub-opBlend"
						],
						"controls": [
							{
								"id": "drpBlendContent",
								"label": "Blend Content",
								"type": "dropdown",
								"selector": true,
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.BlendContents",
								"data_id": "Content.Name",
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
										"text": "Cotton Modal",
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
								"id": "drpBlendType",
								"label": "Blend Type",
								"type": "dropdown",
								"selector": false,
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.MelanSlubTypes",
								"data_id": "Name",
								"options": [
									{
										"id": "opBlendType_1",
										"text": "SORT SLUB",
										"selected": false
									},
									{
										"id": "opBlendType_2",
										"text": "MEDIUM SLUB",
										"selected": false
									},
									{
										"id": "opBlendType_3",
										"text": "LONG SLUB",
										"selected": false
									}
								]
							},
							{
								"id": "txtBlendContent",
								"label": "Blend Content",
								"type": "text-group",
								"label": "Enter Your Required Blend Combination",
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.BlendContents",
								"data_id": "Combos",
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
						"title": "Choose Slub Type",
						"path": [
							"opFabric-opMelangeSlub-opSlub-opSingle-drpSingleContent"
						],
						"controls": [
							{
								"id": "btnMelangeType",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.MelanSlubTypes",
								"data_id": "Name",
								"options": [
									{
										"id": "opMelangeType_SortSlub",
										"label": "A",
										"text": "SORT SLUB",
										"selected": false
									},
									{
										"id": "opMelangeType_MediumSlub",
										"label": "B",
										"text": "MEDIUM SLUB",
										"selected": false
									},
									{
										"id": "opMelangeType_LongSlub",
										"label": "C",
										"text": "LONG SLUB",
										"selected": false
									}
								]
							},
							{
								"id": "txtMelangeCount",
								"label": "Melange Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Slub Type",
						"path": [
							"opFabric-opMelangeSlub-opSlub-opBlend-drpBlendContent"
						],
						"controls": [
							{
								"id": "btnMelangeType",
								"label": "Melange Type",
								"type": "toggle-button",
								"selector": true,
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.SingleContents",
								"data_id": "MelanSlubType.Name",
								"options": [
									{
										"id": "opMelangeType_SortSlub",
										"label": "A",
										"text": "SORT SLUB",
										"selected": false
									},
									{
										"id": "opMelangeType_MediumSlub",
										"label": "B",
										"text": "MEDIUM SLUB",
										"selected": false
									},
									{
										"id": "opMelangeType_LongSlub",
										"label": "C",
										"text": "LONG SLUB",
										"selected": false
									}
								]
							},
							{
								"id": "txtMelangeCount",
								"label": "Melange Count",
								"type": "textbox",
								"selector": false,
								"data_path": "mil.Fabric.MelangeSlubFabric.Slub.Counts",
								"data_id": "",
								"label": "Enter Your Count"
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opRegular-opSingle-opSpun-drpSpunQuality"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "If Lycra required along with your choosen structure, enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opRegular-opSingle-opFilament-drpFilamentQuality"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opRegular-opSingle-opSpun-drpSpunQuality-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opRegular-opSingle-opFilament-drpFilamentQuality-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opRegular-opBlend-drpBlendContent-drpBlendQuality"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.RegularFabric.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opRegular-opBlend-drpBlendContent-drpBlendQuality-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.RegularFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opSpecial-opSingle-opSpun-drpSpecialFabricType-drpSpunQuality"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.Special.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.Special.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.Special.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opSpecial-opSingle-opSpun-drpSpecialFabricType-drpSpunQuality-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opSpecial-opSingle-opFilament-drpSpecialFabricType-drpFilamentQuality"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.SpecialFabric.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opSpecial-opSingle-opFilament-drpSpecialFabricType-drpFilamentQuality-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opSpecial-opBlend-drpBlendContent-drpSpecialFabricType-drpBlendQuality"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.SpecialFabric.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.SpecialFabric.Interlock.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opSpecial-opBlend-drpBlendContent-drpSpecialFabricType-drpBlendQuality-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.SpecialFabric.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opMelangeSlub-opMelange-opSingle-drpSingleColour-btnMelangeType"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opMelangeSlub-opMelange-opSingle-drpSingleColour-btnMelangeType-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opMelangeSlub-opMelange-opBlend-drpBlendContent-btnMelangeType"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opMelangeSlub-opMelange-opBlend-drpBlendContent-btnMelangeType-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.MelangeSlubFabric.Melange.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opMelangeSlub-opSlub-opSingle-drpSingleContent-btnMelangeType"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opMelangeSlub-opSlub-opSingle-drpSingleContent-btnMelangeType-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"title": "Choose Fabric Structure",
						"path": [
							"opFabric-opMelangeSlub-opSlub-opBlend-drpBlendContent-btnMelangeType"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": true,
								"options": [
									{
										"id": "opSingleJersey",
										"text": "Single Jersey",
										"controls": [
											{
												"id": "drpSingleJersey",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.SingleJersey",
												"data_id": "Name",
												"options": [
													{
														"id": "opSingleJersey_1",
														"text": "Single jersey /Plain / Fine",
														"selected": false
													},
													{
														"id": "opSingleJersey_2",
														"text": "Airtex / Picque / ThicK Picque",
														"selected": false
													},
													{
														"id": "opSingleJersey_3",
														"text": "Honey Comb",
														"selected": false
													},
													{
														"id": "opSingleJersey_4",
														"text": "Herringbone",
														"selected": false
													},
													{
														"id": "opSingleJersey_5",
														"text": "Bubble / Pattani",
														"selected": false
													},
													{
														"id": "opSingleJersey_6",
														"text": "Box Design",
														"selected": false
													},
													{
														"id": "opSingleJersey_7",
														"text": "Feeder Stripes",
														"selected": false
													},
													{
														"id": "opSingleJersey_8",
														"text": "2 Yarn Fleece / French Terry",
														"selected": false
													},
													{
														"id": "opSingleJersey_9",
														"text": "Mini Jacquard Designs",
														"selected": false
													},
													{
														"id": "opSingleJersey_10",
														"text": "Single Jersey + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_11",
														"text": "Picque + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_12",
														"text": "2 Yarn Fleece + Lycra",
														"selected": false
													},
													{
														"id": "opSingleJersey_13",
														"text": "3 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_14",
														"text": "4 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_15",
														"text": "6 Colour Striper",
														"selected": false
													},
													{
														"id": "opSingleJersey_16",
														"text": "Striper Mini Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_17",
														"text": "Striper Full Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_18",
														"text": "Single Jersey Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_19",
														"text": "Single Jersey Mesh Jacquard",
														"selected": false
													},
													{
														"id": "opSingleJersey_20",
														"text": "Single Jersey Plating Eyelet Jacquard",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opInterlock",
										"text": "Interlock",
										"controls": [
											{
												"id": "drpInterlock",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.Interlock",
												"data_id": "Name",
												"options": [
													{
														"id": "opInterlock_1",
														"text": "Plain Interlock",
														"selected": false
													},
													{
														"id": "opInterlock_2",
														"text": "4 track designs",
														"selected": false
													},
													{
														"id": "opInterlock_3",
														"text": "Interlock Striper",
														"selected": false
													},
													{
														"id": "opInterlock_4",
														"text": "Interlock Jacquard",
														"selected": false
													},
													{
														"id": "opInterlock_5",
														"text": "Mattress Ticking",
														"selected": false
													},
													{
														"id": "opInterlock_6",
														"text": "Plating Interlock",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opRib",
										"text": "Rib",
										"controls": [
											{
												"id": "drpRib",
												"label": "Select Structure",
												"type": "dropdown",
												"selector": false,
												"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.Rib",
												"data_id": "Name",
												"options": [
													{
														"id": "opRib_1",
														"text": "Rib",
														"selected": false
													},
													{
														"id": "opRib_2",
														"text": "1 x 1 Rib",
														"selected": false
													},
													{
														"id": "opRib_3",
														"text": "2 x 2 Rib",
														"selected": false
													},
													{
														"id": "opRib_4",
														"text": "Rib + Lycra",
														"selected": false
													},
													{
														"id": "opRib_5",
														"text": "Flat Back Rib",
														"selected": false
													},
													{
														"id": "opRib_6",
														"text": "Rib Transfer (Pattern Wheel)",
														"selected": false
													},
													{
														"id": "opRib_7",
														"text": "Rib Striper",
														"selected": false
													},
													{
														"id": "opRib_8",
														"text": "Rib Transfer Jacquard",
														"selected": false
													}
												]
											}
										]
									}
								]
							},
							{
								"label": "if Lycra required along with your choosen structure enter the follow details as per your requirement",
								"type": "heading",
								"selector": false,
								"optional": true
							},
							{
								"id": "drpLycraPercentage",
								"label": "Choose Your Lycra Percentage",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraPercentage_1",
										"text": "10%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_2",
										"text": "20%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_3",
										"text": "30%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_4",
										"text": "40%",
										"selected": false
									},
									{
										"id": "opLycraPercentage_5",
										"text": "50%",
										"selected": false
									}
								]
							},
							{
								"id": "drpLycraDenier",
								"label": "Choose Your Lycra Denier",
								"type": "dropdown",
								"selector": false,
								"optional": true,
								"data_path": "",
								"data_id": "",
								"options": [
									{
										"id": "opLycraDenier_1",
										"text": "10",
										"selected": false
									},
									{
										"id": "opLycraDenier_2",
										"text": "20",
										"selected": false
									},
									{
										"id": "opLycraDenier_3",
										"text": "30",
										"selected": false
									},
									{
										"id": "opLycraDenier_4",
										"text": "40",
										"selected": false
									},
									{
										"id": "opLycraDenier_5",
										"text": "50",
										"selected": false
									}
								]
							}
						]
					},
					{
						"title": "Enter below details as per your requirement",
						"path": [
							"opFabric-opMelangeSlub-opSlub-opBlend-drpBlendContent-btnMelangeType-tabSpunStructure"
						],
						"controls": [
							{
								"id": "tabSpunStructure",
								"type": "tab",
								"selector": false,
								"options": [
									{
										"id": "opTub_1",
										"text": "OPW",
										"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.OpenWidth",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_2",
										"text": "TUB",
										"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
									},
									{
										"id": "opTub_3",
										"text": "TUB with Needle Drop",
										"data_path": "mil.Fabric.MelangeSlubFabric.Slub.FabricStructure.Tubular",
										"controls": [
											{
												"id": "drpGauge",
												"label": "Guage",
												"type": "dropdown-range",
												"selector": false,
												"data_id": "GG",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpDIA",
												"label": "DIA",
												"type": "dropdown-range",
												"selector": false,
												"multiple": true,
												"data_id": "DIA",
												"data": {
													"start": 1,
													"end": 100
												}
											},
											{
												"id": "drpLycraFeeder",
												"label": "Choose Lycra Feeder",
												"type": "dropdown",
												"selector": false,
												"optional": true,
												"options": [
													{
														"id": "opLycraFeeder_1",
														"text": "All Feeder",
														"data_id": "AllFeeder",
														"selected": false
													},
													{
														"id": "opLycraFeeder_2",
														"text": "Alternate Feeder",
														"data_id": "AlternateFeeder",
														"selected": false
													}
												]
											}
										]
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
