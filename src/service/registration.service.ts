import { ServiceHelper } from './base.service';
import {
    RegistrationRequestModel, CountryResponseModel, StateRequestModel, StateResponseModel,
    CityRequestModel, CityResponseModel, CategoryResponseModel
} from '@/model';

export interface IRegistrationService {
    registration(request: RegistrationRequestModel): Promise<any>;
    getCategory(): Promise<Array<CategoryResponseModel>>;
    getCountry(): Promise<Array<CountryResponseModel>>;
    getState(request: StateRequestModel): Promise<Array<StateResponseModel>>;
    getCity(request: CityRequestModel): Promise<Array<CityResponseModel>>;
}
export class RegistrationService extends ServiceHelper implements IRegistrationService {

    public registration(request: RegistrationRequestModel): Promise<any> {
        return this.httpPost('login/registration', request).then(response => {
            return response.data;
        });
    }
    public getCategory(): Promise<Array<CategoryResponseModel>> {
        return this.httpGet('common/Category', null).then(response => {
            return response.data;
        });
    }
    public getCountry(): Promise<Array<CountryResponseModel>> {
        return this.httpGet('common/Country', null).then(response => {
            return response.data;
        });
    }
    public getState(request: StateRequestModel): Promise<Array<StateResponseModel>> {
        return this.httpGet('common/State', request).then(response => {
            return response.data;
        });
    }
    public getCity(request: CityRequestModel): Promise<Array<CityResponseModel>> {
        return this.httpGet('common/City', request).then(response => {
            return response.data;
        });
    }
}