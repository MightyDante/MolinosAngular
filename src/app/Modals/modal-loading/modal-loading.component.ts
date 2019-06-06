import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
      selector: 'app-modal-loading',
      templateUrl: './modal-loading.component.html',
      styleUrls: ['./modal-loading.component.css']
})
export class ModalLoadingComponent {
      constructor(public activeModal: NgbActiveModal) { }
}
