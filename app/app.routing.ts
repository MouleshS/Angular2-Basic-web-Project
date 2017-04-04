import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent }      from './new.component';
import {AppComponent} from './app.component'
import {Location} from '@angular/common';
import{SecondComponent} from './second.component'

const appRoutes: Routes = [
  {
    path: 'newCom',
    component: NewComponent
    },
  {
    path: 'SecondNewCom',
    component: SecondComponent 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

