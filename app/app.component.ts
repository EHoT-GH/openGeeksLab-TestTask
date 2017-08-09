import { Component } from "@angular/core";
// import { FilterPipe } from "./filter.pipe";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title: string = 'Groceries';
    time: any = new Date;
}







