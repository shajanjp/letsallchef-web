import { Injectable } from '@angular/core';
import { Grocery } from './grocery';
import { GROCERIES } from './mock-groceries';

@Injectable()
export class GroceryService {
	getGroceries(): Promise<Grocery[]> {
		return Promise.resolve(GROCERIES);
	}
	getGrocery(_id: string): Promise<Grocery> {
		return this.getGroceries()
		.then(groceries => groceries.find(grocery => grocery._id === _id));
	}
}