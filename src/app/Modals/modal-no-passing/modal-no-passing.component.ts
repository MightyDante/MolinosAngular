import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-modal-no-passing',
	templateUrl: './modal-no-passing.component.html',
	styleUrls: ['./modal-no-passing.component.css']
})
export class ModalNoPassingComponent {
	@Input() addresses;

	constructor(public activeModal: NgbActiveModal) { }



}
