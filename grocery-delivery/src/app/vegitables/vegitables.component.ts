import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Item, ItemsService } from '../items.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-vegitables',
  standalone: true,
  imports:  [RouterModule, ItemComponent],
  templateUrl: './vegitables.component.html',
  styleUrl: './vegitables.component.scss'
})
export class VegitablesComponent implements OnInit {
  items:any;
  vegetables:any;

  constructor(private itemService: ItemsService) {
  }

  ngOnInit(): void {
    this.items=this.itemService.getLocalStorage();
    this.filterVegetables(this.items);
   }

  filterVegetables(items: Item[]) {
    this.vegetables = items.filter(e => e.type == 'vegetable');
  }


}
