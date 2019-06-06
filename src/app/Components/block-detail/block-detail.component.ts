import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EmailService } from '../../Services/email.service';
import { Location } from '@angular/common';
import { ModalService } from '../../Modals/modal.service';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NoPassingService } from 'src/app/no-passing.service';

@Component({
	selector: 'app-block-detail',
	templateUrl: './block-detail.component.html',
	styleUrls: ['./block-detail.component.css'],
	providers: [DatePipe, EmailService, ModalService]

})
export class BlockDetailComponent implements OnInit {

	@ViewChild('image')
	image: ElementRef;

	/* @ViewChild('date')
	date: ElementRef; */
	noPassingAddresses;
	noPassing: boolean
	territoryNumber;
	minDate: Date = new Date();
	model: any = {};
	blocks = [];
	workedBlocks = [];
	allCheck: boolean;
	totalBlocks: number;
	modal;
	loaded: boolean;
	imageHeight;
	marginTop;
	position;

	constructor(
		private _routeParams: ActivatedRoute,
		private emailService: EmailService,
		private noPassingService: NoPassingService,
		private location: Location,
		private modalService: ModalService	) {
		this._routeParams.params.subscribe(params => { this.territoryNumber = params['number']; });
		this.totalBlocks = parseInt(localStorage.getItem("blocksNumber"));
		for (var _i = 0; _i < this.totalBlocks; _i++) { this.blocks.push(_i); }
		this.noPassing = false;
		this.position = "absolute";
		this.imageHeight = "0px";
		this.marginTop = "0px";
		this.model.time = false;
		this.allCheck = false;
		this.loaded = false;
		this.model.labelDate = "Seleccione Fecha";
		this.model.block = [];
		this.model.name = "";
	}

	ngOnInit() {
		window.scrollTo(0, 0);
		this.noPassingService.getAddresses(this.territoryNumber, "1").subscribe(res => {
			this.noPassingAddresses = res.json();
			this.noPassing = this.noPassingAddresses.length > 0 ? true : false;
			//console.log(addresses);
			// var state = res.json();
			// this.modal.close();
			// this.modal = this.modalService.alert(state.Estado == 200 ? "Mensaje Enviado" : "Hubo un problema al enviar los datos");
			// if (state.Estado == 200)
			// 	this.location.back();
		}, () => console.log('Error no controlado'));
		//console.log(noPassingAddresses);
	}

	selectDate() {
		var date = this.model.labelDate == "Seleccione Fecha" ? new Date() : new Date(this.model.labelDate.split("/")[2], this.model.labelDate.split("/")[1] - 1, this.model.labelDate.split("/")[0]);
		var ngDate = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
		this.modal = this.modalService.date(ngDate).result.then((result: NgbDateStruct) => {
			this.model.labelDate = (result.day < 10 ? ("0" + result.day) : result.day) + "/" + (result.month < 10 ? ("0" + result.month) : result.month) + "/" + result.year;
		});
	}

	saveBlocks() {
		this.workedBlocks = [];
		for (var _i = 0; _i < this.model.block.length; _i++) {
			if (this.model.block[_i] == true)
				this.workedBlocks.push(_i + 1);;
		}
		this.allCheck = this.workedBlocks.length == this.totalBlocks;
	}

	checkAll() {
		for (var _i = 0; _i < this.totalBlocks; _i++) {
			this.model.block[_i] = !this.allCheck;
		}
		this.allCheck = !this.allCheck;
		this.saveBlocks();
	}

	submitData() {
		if (this.model.name == "")
			this.modal = this.modalService.alert("Debe ingresar un nombre");
		else if (this.model.labelDate == "Seleccione Fecha")
			this.modal = this.modalService.alert("Debe seleccionar una fecha");
		else if (this.workedBlocks.length == 0)
			this.modal = this.modalService.alert("Debe ingresar al menos una manzana trabajada");
		else {
			this.modal = this.modalService.loading();
			var name = this.model.name;
			var date = this.model.labelDate;
			var time = this.model.time ? "Tarde" : "Mañana";
			var blocks = this.allCheck ? "Completo" : this.workedBlocks.join(",");

			this.emailService.send(name, date, time, blocks, this.territoryNumber).subscribe(res => {
				var state = res.json();
				this.modal.close();
				this.modal = this.modalService.alert(state.Estado == 200 ? "Mensaje Enviado" : "Hubo un problema al enviar los datos");
				if (state.Estado == 200)
					this.location.back();
			}, () => console.log('Error no controlado'));
		}

	}

	imageLoaded() {
		this.loaded = true;
		this.imageHeight = this.image.nativeElement.offsetWidth + "px";
		this.marginTop = "51px";
		this.position = "unset";
	}

	showNoPassingAddresses(){
		this.modal = this.modalService.noPassingAddresses(this.noPassingAddresses);
	}

}
