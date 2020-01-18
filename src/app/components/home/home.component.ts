import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    showLoader: boolean = false;

    constructor() { }

    ngOnInit() {
        this.showLoader = true;

        setTimeout(() => {
            this.showLoader = false;
        }, 500)
    }

}
