import { Injectable } from '@angular/core';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { ModalLoadingComponent } from './modal-loading/modal-loading.component';
import { ModalDateComponent } from './modal-date/modal-date.component';
import { ModalNoPassingComponent } from './modal-no-passing/modal-no-passing.component';

@Injectable({
	providedIn: 'root'
})
export class ModalService {

	modal;

	constructor(private modalService: NgbModal) { }

	alert(message: string) {
		this.modal = this.modalService.open(ModalAlertComponent, { centered: true });
		this.modal.componentInstance.message = message;
		return this.modal;
	}

	noPassingAddresses(addresses: string) {
		this.modal = this.modalService.open(ModalNoPassingComponent, { centered: true });
		this.modal.componentInstance.addresses = addresses;
		return this.modal;
	}

	loading() {
		this.modal = this.modalService.open(ModalLoadingComponent, { centered: true, windowClass: 'loading-modal' });
		return this.modal;
	}

	date(date: NgbDate) {
		this.modal = this.modalService.open(ModalDateComponent, { centered: true, windowClass: 'date-modal', backdrop: 'static', keyboard: false });
		this.modal.componentInstance.date = date;
		return this.modal;
	}
}
