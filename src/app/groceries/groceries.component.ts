import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from './grocery';
import { GroceryService } from './grocery.service';
import { MdButtonModule } from '@angular/material';

@Component({
	selector: 'app-groceries',
	templateUrl: './groceries.component.html',
	styleUrls: ['./groceries.component.css'],
	providers: [GroceryService]
})

export class GroceriesComponent implements OnInit{
	errorMessage: string;
	groceries: Grocery[];
	selectedGrocery: Grocery;
	mode = 'Observable';
	constructor(private groceryService: GroceryService) { }

	ngOnInit() { this.getGroceries(); }

	getGroceries(): void {
		console.log("hello");
		this.groceryService.getGroceries().subscribe(
			groceries => this.groceries = groceries,
			error =>  this.errorMessage = <any>error
			);
	}

}
