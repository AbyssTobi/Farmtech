import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { CrudComponent } from './view/crud/crud.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'crud', component: CrudComponent },
];
