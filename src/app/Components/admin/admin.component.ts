import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadService } from '../../Services/upload.service';
import { Location } from '@angular/common';
import { ModalService } from '../../Modals/modal.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css'],
	providers: [UploadService]
})
export class AdminComponent implements OnInit {

	file: File = null;
	model: any = {};
	@ViewChild('inputFile')
	inputFile: any;


	constructor(
		private uploadService: UploadService,
		private location: Location,
		private modalService: ModalService,
	) {
		this.model.name = null;
	}

	ngOnInit() {
	}

	return() {
		this.location.back();
	}

	getImage(event) {
		this.file = event.target.files[0];
	}

	sendImage() {
		if (this.model.name != null && this.file != null) {
			this.uploadService.send(this.file, this.model.name).subscribe(res => {
				this.modalService.alert("Imagen Subida");
				this.inputFile.nativeElement.value = "";
				this.model.name = null;
				this.file = null;
			}, error => console.log('Error no controlado'));
		}
		else {
			if (this.model.name == null)
				this.modalService.alert("Debe elegir una seccíon");
			else if (this.file == null)
				this.modalService.alert("Debe elegir archivo");
		}
	}


}
