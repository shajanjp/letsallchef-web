import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from './grocery';
import { GroceryService } from './grocery.service';

@Component({
	selector: 'app-groceries',
	templateUrl: './groceries.component.html',
	styleUrls: ['./groceries.component.css'],
	providers: [GroceryService]
})

export class GroceriesComponent implements OnInit{

	groceries: Grocery[];
	selectedGrocery: Grocery;
	constructor( private router: Router, private groceryService: GroceryService) { }
	
	getGroceries(): void {
		this.groceryService.getGroceries().then(groceries => this.groceries = groceries);
	}

	gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedGrocery._id]);
    }

	ngOnInit(): void {
		this.getGroceries();
	}

	onSelect(grocery: Grocery): void {
		this.selectedGrocery = grocery;
	}
}
