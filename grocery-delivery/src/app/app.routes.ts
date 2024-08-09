import { Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { VegitablesComponent } from './vegitables/vegitables.component';

export const routes: Routes = [
    { path: '', component: FruitsComponent },
    { path: 'vegitables', component: VegitablesComponent }
];
