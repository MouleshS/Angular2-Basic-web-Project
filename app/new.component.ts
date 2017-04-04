import { Component } from '@angular/core';
import {Http, Headers,Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {SelectedItemService} from './selecteditem.service'
import {Router} from '@angular/router'

@Component({
    selector: 'newcomponent',
    templateUrl:`./app/mydoc.html`,
    styleUrls: [`./app/mydoc.css`]
    
    
    
})
export class NewComponent {
    nameValue: string;
    lists: string[];
    url:string;
    dataServer:JSON[];
    length:number;
    selectedItem:JSON;
    


    constructor(private http:Http, public myservice:SelectedItemService,public router:Router) {
        this.myservice=myservice;
        this.nameValue = "declaredName";
        this.url="http://test-trykaro-vm.cloudapp.net/Trymeagain/rest/fragrance/";
        this.lists = ['abc', 'xyz', 'lol'];
        this.router=router;
this.http.get(this.url).map((res:Response) => res.json())
      .subscribe(
        data => { this.dataServer = data
            this.length=Object.keys(this.dataServer).length},
        err => console.error(err),
        () => console.log('done')
      );}

      onSelect(data:JSON):void{
            this.selectedItem=data;
            this.myservice.selectedItem=data;
            this.router.navigate(['/SecondNewCom']);
      }
}