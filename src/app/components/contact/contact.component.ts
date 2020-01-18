import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup;
    clientData: any;
    submitMessage: any = '';
    showLoader: boolean = false;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            'name': [''],
            'email': ['', [Validators.email, Validators.required]],
            'message': ['']
        });
    }

    ngOnInit() {

    }

    contactUs() {
        this.showLoader = true;
        this.clientData = this.contactForm.value;
        setTimeout(() => {
            this.showLoader = false;
            alert('This feature is not implemented.')
        }, 1000);
    }

}
