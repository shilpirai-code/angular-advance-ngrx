import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item, ItemsService } from '../items.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})

export class ItemComponent {

  @Input() items!: Item[] | null;
  total!: any;
  
  constructor(private itemService: ItemsService) {
  }

  addItem(item: Item) {
    item.quantity++;
    this.updateLocalStorage(item);
    this.itemService.addToCart(item);
  }

  removeItem(item: Item){
    if (item.quantity > 0)
      item.quantity--;
    this.updateLocalStorage(item);
    this.itemService.removeFromCart(item);
  }

  updateLocalStorage(item: Item){
    let localItems= this.itemService.getLocalStorage();
    localItems.forEach((element:Item) => {
    if(element.name==item.name){
      element.quantity=item.quantity;
      // Save the new item with updated value
      localStorage.setItem("localCarts",JSON.stringify(localItems));
    }
  });
  }  

}


