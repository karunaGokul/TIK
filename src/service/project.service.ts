import { ServiceHelper } from "./base.service";
import { ProjectFormModel, ProjectRequestModel } from "@/model";

import millsForm from '@/data/mills-form.json';
import millsDetail from '@/data/mills-detail.json';

import dyeingForm from '@/data/dyeing-form.json';

export interface IProjectService {
	getProjectForm(categoryName: string): ProjectFormModel;
	getProjectFormDyeing(categoryName: string): ProjectFormModel;
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

	public getProjectFormDyeing(categoryName: string): ProjectFormModel {
		return <ProjectFormModel>dyeingForm;
	}

	public getProjectDetail(categoryName: string): any {
		return millsDetail;
	}
}
