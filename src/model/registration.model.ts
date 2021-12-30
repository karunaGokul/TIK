import { BaseModel, DataRequest } from './base.model';

export class RegistrationRequestModel extends DataRequest {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    categoryName: string;
    gstNumber: number;
    address: string;
    apartmentUnitOffice: string;
    countryId: number;
    stateId: number;
    cityId: number;
    zipCode: number;
}
export class CategoryResponseModel{
    id: number;
    categoryName: string;
}
export class CountryResponseModel{
    id: number;
    countryName: string;
}
export class StateRequestModel{
    countryId: number;
}
export class StateResponseModel{
    id: number;
    stateId: number;
    stateName: string;
}
export class CityRequestModel{
    stateId: number;
}
export class CityResponseModel{
    id: number;
    stateId: number;
    cityName: string;
}