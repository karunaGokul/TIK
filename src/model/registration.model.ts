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
