import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { NavComponent } from './components/nav/nav.component';
import { EntryComponent } from './components/todo-list/entry/entry.component';
import { ListComponent } from './components/todo-list/list/list.component';
import { TodoDataService } from './components/todo-list/todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DashboardComponent,
    TipCalculatorComponent,
    NavComponent,
    EntryComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
