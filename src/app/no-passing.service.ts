import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpConfig } from './Lib/httpConfig';

@Injectable({
	providedIn: 'root'
})
export class NoPassingService {


	private options: RequestOptions;
	private url: string;

	constructor(private http: Http) { }

	getAddresses(territory: string, congregation: string): Observable<Response> {
		let body = { territory: territory, congregation: congregation};
		this.options = HttpConfig.getOptions();
		this.url = HttpConfig.getUrl(`nopassing/addresses/${congregation}/${territory}`)
		return this.http.get(this.url);
	}

}
