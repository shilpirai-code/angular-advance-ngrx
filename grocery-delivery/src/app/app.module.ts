import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { HeaderComponent } from './header/header.component';
import { VegitablesComponent } from './vegitables/vegitables.component';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FruitsComponent, 
    VegitablesComponent
  ],
  declarations: [],
})
export class AppModule { }
