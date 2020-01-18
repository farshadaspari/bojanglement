import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../routing/app-routing.module';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public routes = [];
    public navbarToggleBtn: HTMLElement;

    constructor(private route: Router) { }

    ngOnInit() {
        this.routes = routes;
        this.navbarToggleBtn = document.getElementById('navbarToggleBtn') as HTMLElement;
    }


    goTo(path) {
        this.route.navigate([path]);
        this.navbarToggleBtn.click(); // trigger click on navbar toggle button to collapse nav when in mobile mode
    }

}
