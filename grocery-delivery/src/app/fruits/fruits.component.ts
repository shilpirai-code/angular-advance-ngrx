import { Component, Input, OnInit, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from "../item/item.component";
import { Item, ItemsService } from '../items.service';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [RouterModule, ItemComponent],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class FruitsComponent implements OnInit {
  items:any;
  fruits: any;
  constructor(public itemService: ItemsService) { }

 ngOnInit(): void {
  this.items=this.itemService.getLocalStorage();
  this.filterFruits(this.items);
 }

  filterFruits(items: Item[]) {
   this.fruits= items.filter(item => item.type == 'fruit');
  }

 
  
}
