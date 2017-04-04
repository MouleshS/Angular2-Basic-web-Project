import {Component,Input} from '@angular/core';
import {SelectedItemService} from './selecteditem.service'

@Component({
    selector:'secondcomponent',
    template:`<h1> This is second new Component</h1>
    <h1>{{UiSelectedItem | json}}</h1>
   `
})

export class SecondComponent{
     UiSelectedItem:JSON;
     constructor(public mservice:SelectedItemService) {
        this.mservice=mservice;
mservice.selectedItem$.subscribe(item =>{this.UiSelectedItem=item},
        err => console.error(err),
        () => console.log('clicked item done'));
   }
       
}