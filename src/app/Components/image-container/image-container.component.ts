import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;


@Component({
	selector: 'app-image-container',
	templateUrl: './image-container.component.html',
	styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

	image;
	@ViewChild('imageContainer')
	imageContainer: ElementRef;
	// @ViewChild('panzoomDiv') panzoomDiv: ElementRef;
	loaded: boolean;
	imageHeight;
	marginTop;
	position;

	constructor(
		private _routeParams: ActivatedRoute,
		private location: Location
	) {
		this._routeParams.params.subscribe(params => {
			this.image = params['image'];
		});
		this.position = "absolute";
		this.imageHeight = "0px";
		this.marginTop = "0px";
		this.loaded = false;
	}

	ngOnInit() {
		// $(".panzoom").panzoom({
		// 	minScale: 1,
		// 	contain: false,
		// 	panOnlyWhenZoomed: true,


		// });

	}

	return() {
		this.location.back();
	}

	imageLoaded() {
		this.loaded = true;
		this.imageHeight = "93vh";
		this.marginTop = "51px";
		this.position = "unset";
	}

}
