import { Component, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal-alert',
	templateUrl: './modal-alert.component.html',
	styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent {
	@Input() message;

	constructor(public activeModal: NgbActiveModal) { }
}
