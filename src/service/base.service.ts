import axios from 'axios';
import { AxiosResponse, AxiosError, AxiosRequestConfig, ResponseType } from 'axios'
import { stringify } from 'qs';
import { plainToClass } from 'class-transformer';

import { Settings } from '@/config';

export interface EntityType<T> {
    new(): T;
}

export abstract class ServiceHelper {
    protected baseUrl: string = Settings.ApiUrl;

    protected deserialize<T>(classType: EntityType<T>, source: any): T {
        const raw = plainToClass<T, any>(classType, source);

        const item: T = raw;

        return item;
    }

    httpGet(route: string, request: any, responseType?: ResponseType): Promise<AxiosResponse<any>> {
        const params: any = {};
        if (request) {
            for (const key in request) {
                if (key.charAt(0) != "_") {
                    if (request[key] instanceof Date) {
                        const dateString: any = request[key];

                        const date: Date = new Date(dateString);

                        if (date)
                            params[key] = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
                    }
                    else {
                        const value: any = request[key];

                        if (value || value === false)
                            params[key] = request[key];
                    }
                }
            }
        }

        const path = `${this.baseUrl}/${route}`;
        const config: AxiosRequestConfig = {
            params: params,
            'paramsSerializer': params => {
                return stringify(params, { arrayFormat: 'repeat' })
            }
        };

        if (responseType) config.responseType = responseType;

        return axios.get<any>(path, config);
    }


    protected httpPost(route: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
        const path = `${this.baseUrl}/${route}`;

        return axios.post(path, data, config);
    }

    protected httpPut(route: string, data: any): Promise<AxiosResponse<any>> {
        const path = `${this.baseUrl}/${route}`;

        return axios.put(path, data);
    }

    protected httpDelete(route: string): Promise<AxiosResponse<any>> {
        const path = `${this.baseUrl}/${route}`;

        return axios.delete(path);
    }
}
