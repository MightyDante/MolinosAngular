import { RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { RequestMethod } from '@angular/http';

export class HttpConfig {

      static apiUrl: string = environment.API_URL;

      static getOptions(): RequestOptions {
            let headers = new Headers({ 'Content-Type': 'application/json' });

            return new RequestOptions({headers: headers });
	}

      static getUrl(ref: string, get?: string): string {
            if (get) {
                  return this.apiUrl + ref + get;
            }
            else {
                  return this.apiUrl + ref;
            }
      }
}
