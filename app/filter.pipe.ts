import { Pipe, PipeTransform } from "@angular/core";
import { AddTo } from "./shared/add-to";

@Pipe({
    name: 'cartFilter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(list: AddTo[], args?: boolean) {
        if (!list) {
            return list;
        }
        return list.filter(item => !item.inStock);
    }
}
