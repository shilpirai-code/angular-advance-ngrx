import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { Item, ItemsService } from './items.service';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grocery-delivery';
  subscription!: Subscription;
  items!: Item[];

  constructor(private itemService: ItemsService) {
  }

  // subscribe to data service and set inital data in local storage
  ngOnInit(): void {
    this.itemService.getData().subscribe(results=>{
      this.items = results;
     this.itemService.setLocalStorage(this.items);
     });  
  }
 
}
