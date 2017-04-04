import  { Component } from '@angular/core'; 

@Component({
    
    selector:'my-app',
    template:`
    
   <h1>First Angular2 App</h1>
   <a routerLink="/newCom">View Products</a>
   <router-outlet></router-outlet>`
    
})

export class AppComponent{}