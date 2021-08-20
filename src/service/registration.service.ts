import { IBaseService, BaseService } from './base.service';
import { RegistrationRequestModel,CountryResponseModel,StateRequestModel,StateResponseModel,
    CityRequestModel,CityResponseModel, CategoryResponseModel } from '@/model';

export interface IRegistrationService extends IBaseService<RegistrationRequestModel, any> {
    registration(request: RegistrationRequestModel): Promise<any>;
    getCategory(): Promise<Array<CategoryResponseModel>>;
    getCountry(): Promise<Array<CountryResponseModel>>;
    getState(request:StateRequestModel): Promise<Array<StateResponseModel>>;
    getCity(request:CityRequestModel): Promise<Array<CityResponseModel>>;
}
export class RegistrationService extends BaseService<RegistrationRequestModel, any> implements IRegistrationService {

    constructor() {
        super('public');
    }
    public registration(request: RegistrationRequestModel): Promise<any> {
        this.apiUrl = "https://tikdev-api.azure-api.net/login"
        return this.httpPost('registration', request).then(response => {
            return response.data;
        });
    }
    public getCategory(): Promise<Array<CategoryResponseModel>>{
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('Category', null).then(response => {
            return response.data;
        });
    }
    public getCountry(): Promise<Array<CountryResponseModel>>{
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('Country', null).then(response => {
            return response.data;
        });
    }
    public getState(request:StateRequestModel): Promise<Array<StateResponseModel>>{
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('State',request).then(response => {
            return response.data;
        });
    }
    public getCity(request:CityRequestModel): Promise<Array<CityResponseModel>>{
        this.apiUrl = "https://tikdev-api.azure-api.net/common"
        return this.httpGet('City', request).then(response => {
            return response.data;
        });
    }
}