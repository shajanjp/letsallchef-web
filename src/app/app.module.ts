import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { GroceryDetailComponent } from './groceries/grocery-detail.component';
import { GroceryService } from './groceries/grocery.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
  AppComponent,
  GroceriesComponent,
  GroceryDetailComponent,
  DashboardComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forRoot([
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'groceries',
    component: GroceriesComponent
  },
  {
    path: 'groceries/:_id',
    component: GroceryDetailComponent
  }
  ]),
  HttpModule,
  JsonpModule
  ],
  providers: [GroceryService],
  bootstrap: [AppComponent]
})
export class AppModule { }