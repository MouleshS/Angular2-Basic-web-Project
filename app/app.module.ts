import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NewComponent} from './new.component';
import {SecondComponent} from './second.component';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {SelectedItemService} from './selecteditem.service';


@NgModule({
    imports:[BrowserModule,HttpModule,FormsModule,ReactiveFormsModule,routing],
    providers:[SelectedItemService],
    declarations:[AppComponent,NewComponent,SecondComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}