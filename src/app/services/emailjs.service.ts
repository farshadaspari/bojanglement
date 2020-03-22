import { Injectable } from '@angular/core';
import { config } from './../../config/config';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
declare var emailjs: any;

export interface EmailParameters {
    name: string;
    email: string;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmailJSService {

    private EmailJSUserId = "user_5ANB79py8BH3w0jq7pHFa";
    private EmailJSServiceId = "gmail";
    private EmailJSTemplateId = "bojanglement"

    // test
    //private EmailJSUserId = "user_8H3uuoQty7OVAtNDA6cf0";
    //private EmailJSServiceId = "gmail";
    //private EmailJSTemplateId = "testing1"

    constructor() {
        this.setOptions();
    }

    // options
    setOptions() {
        emailjs.init(this.EmailJSUserId);
    };

    sendEmail(emailParamaters: EmailParameters): any {
        return emailjs.send(this.EmailJSServiceId, this.EmailJSTemplateId, emailParamaters);
    }


}
