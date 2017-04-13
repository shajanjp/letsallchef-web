import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Grocery } from './grocery';

@Injectable()
export class GroceryService {
	private groceryUrl = 'http://localhost:3000/api/groceries';
	constructor(private http: Http){ }

	getGroceries(): Observable<Grocery[]> {
		console.log("get groceries");
		return this.http.get(this.groceryUrl)
		.map(this.extractData)
		.catch(this.handleError);
	}
	
	private extractData(res: Response) {
		let body = res.json();
		console.log("===", body.data);
		return body.data || { };
	}


	private handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

}