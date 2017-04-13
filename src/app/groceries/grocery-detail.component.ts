import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Grocery } from './grocery';
import { GroceryService } from './grocery.service';

@Component({
	selector: 'grocery-detail',
	templateUrl: './grocery-detail.component.html'
})

export class GroceryDetailComponent {

	constructor(
		private groceryService: GroceryService,
		private route: ActivatedRoute,
		private location: Location
		) {}

	@Input() grocery: Grocery;

	goBack(): void {
		this.location.back();
	}
}