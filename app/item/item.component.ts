import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AddTo } from '../shared/add-to';


@Component({
    moduleId: module.id,
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent {
    @Input() item: AddTo;
    @Output() delete = new EventEmitter();
    @Input() editMode: boolean;

    toggle(item: AddTo) {
        if (!this.editMode) {
            item.inStock = !item.inStock;
        }
    }



    onDelete() {
        this.delete.emit(this.item);
    }
}