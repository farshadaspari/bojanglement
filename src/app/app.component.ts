import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public wrapperStyle = {};

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e) {
        var pos = {
            x: e.clientX,
            y: e.clientY
        };

        var shadowX = (-1) * (pos.x - (window.innerWidth / 2)) * 0.05 ;
        var shadowY = (-1) * (pos.y - (window.innerHeight / 2)) * 0.05;
        
        this.wrapperStyle = {
            'box-shadow': shadowX + 'px' + ' ' + shadowY + 'px' + ' ' + '90px -45px #000'
        }
    }
}
