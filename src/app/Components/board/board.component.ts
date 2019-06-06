import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
      selector: 'app-board',
      templateUrl: './board.component.html',
      styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
      @ViewChild('container')
      container: ElementRef;

      imageHeight;
      menuHeight;
      optionHeight;
      marginLabel;

      constructor(private router: Router) { }

      ngOnInit() {
            this.imageHeight = (this.container.nativeElement.offsetHeight - 51) * 0.3;
            this.menuHeight = (this.container.nativeElement.offsetHeight - 51) * 0.7;
            this.optionHeight = this.menuHeight * 0.2;
            this.marginLabel = (this.optionHeight / 2) - 12;
      }

      checkImage(image: string) {
            this.router.navigate(['', image]);
      }

}
