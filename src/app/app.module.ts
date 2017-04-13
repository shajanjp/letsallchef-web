import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { GroceryDetailComponent } from './groceries/grocery-detail.component';
import { GroceryService } from './groceries/grocery.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  MaterialModule,
  AppRoutingModule,
  HttpModule,
  JsonpModule
  ],
  declarations: [
  AppComponent,
  GroceriesComponent,
  GroceryDetailComponent,
  DashboardComponent
  ],
  providers: [GroceryService],
  bootstrap: [AppComponent]
})

export class AppModule { }