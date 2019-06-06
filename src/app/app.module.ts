import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeStartComponent } from './Components/home-start/home-start.component';
import { Routes, RouterModule } from '@angular/router';
import { BlockDetailComponent } from './Components/block-detail/block-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageContainerComponent } from './Components/image-container/image-container.component';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BoardComponent } from './Components/board/board.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from './Modals/modal-alert/modal-alert.component';
import { ModalLoadingComponent } from './Modals/modal-loading/modal-loading.component';
import { AngularFittextModule } from 'angular-fittext';
import { AdminComponent } from './Components/admin/admin.component';
import { ModalDateComponent } from './Modals/modal-date/modal-date.component';
import { ModalNoPassingComponent } from './Modals/modal-no-passing/modal-no-passing.component';
import { SendReportComponent } from './Components/send-report/send-report.component';




const appRoutes: Routes = [
	{ path: '', redirectTo: '/Territorios', pathMatch: 'full' },
	{ path: 'Admin', component: AdminComponent },
	{ path: 'Informe', component: SendReportComponent },
	{ path: 'Territorios', component: HomeStartComponent },
	{ path: 'Territorios/:number', component: BlockDetailComponent },
	{ path: 'Tablero', component: BoardComponent },
	{ path: ':image', component: ImageContainerComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeStartComponent,
		BlockDetailComponent,
		ImageContainerComponent,
		BoardComponent,
		ModalAlertComponent,
		ModalLoadingComponent,
		AdminComponent,
		ModalDateComponent,
		ModalNoPassingComponent,
		SendReportComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		NgbModule.forRoot(),
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		AngularFittextModule,

	],
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
	bootstrap: [AppComponent],
	entryComponents: [
		ModalAlertComponent,
		ModalLoadingComponent,
		ModalDateComponent,
		ModalNoPassingComponent
	],
})
export class AppModule { }
