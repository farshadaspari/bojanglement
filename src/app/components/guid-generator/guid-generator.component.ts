import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-guid-generator',
    templateUrl: './guid-generator.component.html',
    styleUrls: ['./guid-generator.component.css']
})
export class GUIDGeneratorComponent implements OnInit {
    public destinationValue = "";
    constructor() { }

    ngOnInit() { }

    generateGUID() {
        if (this.destinationValue !== "") {
            this.destinationValue = this.destinationValue + '\n';
        }
        this.destinationValue = this.destinationValue + this.uuidv4();
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    clear() {
        this.destinationValue = "";
    }
}
