import { Component } from "@angular/core";
import { AddTo } from "../shared/add-to";
import { list } from "../shared/list";
import { addMode, editModeOn } from "../shared/modes";


@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class ListComponent {
    title: string = '';
    list: AddTo[] = list;
    editMode: boolean = editModeOn;
    addMode: boolean = addMode;
    showAddPopup: boolean = false;
    listMode: boolean = true;

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    add() {
        let newItem: AddTo = new AddTo(this.title);
        this.list.push(newItem);
        console.log(this.title.length);

        this.title = '';
    }

    cancel() {
        this.title = '';
        this.addMode = false;
        this.editMode = false;
        this.showAddPopup = false;
    }

    toggle() {
        if (this.addMode) {
            if (this.title.length >= 1) {
                this.add();
                this.addMode = false;
                this.editMode = false;
                this.showAddPopup = false;
            } else if (this.title.length < 1) {
                this.addMode = false;
                this.editMode = false;
            }
        } else if (this.editMode) {
            if (!this.addMode) {
                this.addMode = true;
            } else {

            }
        }
    }

    toggleView() {
        this.listMode = !this.listMode;
    }

    delete(item: AddTo) {
        let index = this.list.indexOf(item);

        if (index > -1) {
            this.list.splice(index, 1);
        }
    }
}