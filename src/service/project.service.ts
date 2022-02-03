import { ServiceHelper } from "./base.service";
import { ProjectFormModel, ProjectRequestModel } from "@/model";

import millsForm from "@/assets/data/mills-form.json";
import millsDetail from "@/assets/data/mills-detail.json";

export interface IProjectService {
	getProjectForm(categoryName: string): ProjectFormModel;
	getProjectDetail(categoryName: string): any;

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

	public getProjectForm(categoryName: string): ProjectFormModel {
		return <ProjectFormModel>millsForm;
	}

	public getProjectDetail(categoryName: string): any {
		return millsDetail;
	}
}
