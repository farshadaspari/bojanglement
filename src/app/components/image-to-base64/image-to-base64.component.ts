import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-image-to-base64',
    templateUrl: './image-to-base64.component.html',
    styleUrls: ['./image-to-base64.component.css']
})
export class ImageToBase64Component implements OnInit {
    public destinationValue = "";
    public imageWidth = 0;
    public imageHeight = 0;
    public fileIsTooBig = false;
    public notAnImage = false;
    public showLoader = false;

    constructor() { }

    ngOnInit() { }

    convertToBase64() {
    }


    loadImage(files) {
        this.clear(false);
        if (files.length === 0) return;
        var file = files[0];
        this.destinationValue = "";

        if (!file.type.match('image.*')) {
            this.notAnImage = true;
            return;
        }
        if (file.size > 2000000) {
            this.fileIsTooBig = true;
            return;
        }

        var loaderTimeOut = file.size / 5000;
        this.showLoader = true;
        setTimeout(() => { this.showLoader = false; }, loaderTimeOut);

        var _URL = window.URL;
        var img: any = new Image();
        var objectUrl = _URL.createObjectURL(file);
        img.onload = (event: any) => {
            var imgWidth = event.path[0].width;
            var imgHeight = event.path[0].height;
            this.imageWidth = 350;
            this.imageHeight = (imgHeight / imgWidth) * this.imageWidth;
        };
        img.src = objectUrl;

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (evt: any) => {
            if (evt.target.readyState == FileReader.DONE) {
                console.log(new Date())
                this.destinationValue = evt.target.result;
            }
        }
        

    }

 

    clear(clearFileInput: boolean) {
        this.destinationValue = "";
        this.fileIsTooBig = false;
        this.imageWidth = 0;
        this.imageHeight = 0;
        this.notAnImage = false;
        if (clearFileInput) {
            this.clearFileInput();
        }
    }

    clearFileInput() {
        var fileInput: any = document.getElementById("myFile");
        fileInput.value = "";
    }

}
