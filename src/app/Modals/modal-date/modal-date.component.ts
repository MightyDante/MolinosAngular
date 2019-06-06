import { Component, Injectable, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbActiveModal, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
declare var require: any;



const I18N_VALUES = {
	'es': {
		weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
		months: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
	}
};

@Injectable()
export class I18n {
	language = 'es';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

	constructor(private _i18n: I18n) {
		super();
	}

	getWeekdayShortName(weekday: number): string {
		return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
	}
	getMonthShortName(month: number): string {
		return I18N_VALUES[this._i18n.language].months[month - 1];
	}
	getMonthFullName(month: number): string {
		return this.getMonthShortName(month);
	}

	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}-${date.month}-${date.year}`;
	}

}

@Component({
	selector: 'app-modal-date',
	templateUrl: './modal-date.component.html',
	styleUrls: ['./modal-date.component.css'],
	providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]

})
export class ModalDateComponent {

	model: NgbDateStruct;
	@Input() date: NgbDate;
	@ViewChild('currentMonth')
	currentMonth: ElementRef;

	constructor(public activeModal: NgbActiveModal, public calendar: NgbCalendar, private renderer2: Renderer2) {
	}

	ngOnInit() {
		this.model = this.date;
		this.renderer2.listen(this.currentMonth.nativeElement, 'click', () => {
		});
		let event: Event = new Event('click');
		this.currentMonth.nativeElement.dispatchEvent(event);
	}

	ngAfterViewChecked() {


		var value = $(".ngb-dp-navigation-select select:nth-child(1)").find('option:selected').text();
		var pixelWidth = require('string-pixel-width');
		const width = pixelWidth(value, { size: 15 });
		var widthValueHalf = width / 2;
		var widthElement = $(".ngb-dp-navigation-select select:nth-child(1)").width();
		widthElement = parseInt($(".ngb-dp-navigation-select select:nth-child(1)").css("padding-left")) + widthElement;
		var widthElementHalf = widthElement / 2;
		var widthFinal = widthElementHalf - widthValueHalf;
		$(".ngb-dp-navigation-select select:nth-child(1)").attr('style', 'padding-left:' + widthFinal + 'px !important');

		var value = $(".ngb-dp-navigation-select select:nth-child(2)").find('option:selected').text();
		var pixelWidth = require('string-pixel-width');
		const width2 = pixelWidth(value, { size: 15 });
		var widthValueHalf = width2 / 2;
		var widthElement = $(".ngb-dp-navigation-select select:nth-child(2)").width();
		widthElement = parseInt($(".ngb-dp-navigation-select select:nth-child(2)").css("padding-left")) + widthElement;
		var widthElementHalf = widthElement / 2;
		var widthFinal = widthElementHalf - widthValueHalf;
		$(".ngb-dp-navigation-select select:nth-child(2)").attr('style', 'padding-left:' + widthFinal + 'px !important');

		$(".ngb-dp-navigation-select select").on("change", function () {
			var value = $(this).find('option:selected').text();
			var pixelWidth = require('string-pixel-width');
			const width = pixelWidth(value, { size: 15 });
			var widthValueHalf = width / 2;
			var widthElement = $(this).width();
			widthElement = parseInt($(this).css("padding-left")) + widthElement;
			var widthElementHalf = widthElement / 2;
			var widthFinal = widthElementHalf - widthValueHalf;
			$(this).attr('style', 'padding-left:' + widthFinal + 'px !important');
		});
	}

	getToday() {
		this.model = this.calendar.getToday();
	}
}
