import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpConfig } from '../Lib/httpConfig';

@Injectable({
	providedIn: 'root'
})
export class EmailService {


	private options: RequestOptions;
	private url: string;

	constructor(private http: Http) { }

	send(name: string, date: string, time: string, blocks: string, number: string): Observable<Response> {
		let body = { Name: name, Date: date, Time: time, Blocks: blocks, Number: number, Email: "territorioslosmolinos@gmail.com" };
		this.options = HttpConfig.getOptions();
		this.url = HttpConfig.getUrl('email')
		return this.http.post(this.url, body, this.options);
	}

}
