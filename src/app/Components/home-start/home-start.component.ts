import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
      selector: 'app-home-start',
      templateUrl: './home-start.component.html',
      styleUrls: ['./home-start.component.css']
})
export class HomeStartComponent implements OnInit {

      blocks = []

      constructor(
            private router: Router
      ) {
            this.blocks = environment.blocks;
      }

      ngOnInit() {
      }

      seeDetail(number) {
            localStorage.setItem("blocksNumber", this.blocks[number - 1])
            this.router.navigate(['/Territorios', number]);
      }

      checkImage(image: string) {
            this.router.navigate(['', image]);
      }

}
