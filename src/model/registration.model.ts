import { BaseModel, DataRequest } from './base.model';

export class RegistrationRequestModel extends DataRequest {
    FirstName: string;
    LastName: string;
    PhoneNumber: number;
    EmailAddress: string;
    Password: string;
    ConfirmPassword: string;
    Category: string;
    GSTNumber: number;
    Address: string;
    ApartmentUnitOffice: string;
    CountryId: number;
    StateId: number;
    CityId: number;
    ZipCode: number;
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
    CountryId: number;
}
export class StateResponseModel{
    id: number;
    stateName: string;
}
export class CityRequestModel{
    StateId: number;
}
export class CityResponseModel{
    id: number;
    cityName: string;
}