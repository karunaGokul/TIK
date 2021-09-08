import moment from 'moment';
import { Validation } from "vuelidate";
import { ValidationEvaluation, ValidationGroups } from 'vue/types/vue';

export class VueHelperProvider {
    public date: DateHelper = new DateHelper();
    public val: ValHelper = new ValHelper();

    clone<T>(object: T): T {
        return this._clone(object);
    }

    getImageUrl(blobText: string) {
        return `data:image/png;base64, ${blobText}`
    }

    private _clone(object: any) {
        const cloned: any = new (<any>object).constructor();

        for (const key in object) {
            try {
                cloned[key] = object[key];

                if (typeof object[key] == "object")
                    cloned[key] = this._clone(object[key]);
            }
            catch (e) { //error  
            }
        }
        return cloned;
    }
}

class DateHelper {
    format(date: Date, format?: string) {
        if (!format) format = "MM/DD/YYYY";

        if (date)
            return moment(date).format(format);
        else
            return "";
    }

    getString(date: Date) : any {
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    }
}

class ValHelper {
    messages(evaluation: ValidationEvaluation, label: string) {
        const errors: Array<string> = [];

        if (!evaluation!.$dirty || !evaluation!.$invalid) return errors;

        if (!evaluation!.required) errors.push(`Required`);

        if (!evaluation!.invalid) errors.push(``);

        return errors;
    }


}

