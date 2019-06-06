import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpConfig } from '../Lib/httpConfig';

@Injectable({
	providedIn: 'root'
})
export class UploadService {

	private options: RequestOptions;
	private url: string;

	constructor(private http: Http) { }

	send(file: File, name: string): Observable<Response> {

		let formData: FormData = new FormData();
		formData.append('Image', file);
		formData.append('Name', name);
		formData.append('Folder', 'Molinos');
		this.url = HttpConfig.getUrl('update');
		return this.http.post(this.url, formData);
	}
}
