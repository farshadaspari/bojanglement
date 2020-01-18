import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    showLoader: boolean = false;

    constructor(private route: Router) { }

    ngOnInit() {
        this.showLoader = true;

        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
    }

    goTo(path) {
        this.route.navigate([path]);
    }

}
