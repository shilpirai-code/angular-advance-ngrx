import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Item, ItemsService } from '../items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // @Input() items: any;
   items: Item[]=[];
  subscription!: Subscription;
cartCount=0;
  constructor(private itemService: ItemsService) {
  }
  ngOnInit() {
    this.subscription=this.itemService.cart.subscribe(results=>{
      this.cartCount=0;
      if(results!=null)
        {
          this.items=results;
          this.items.forEach((element: Item)=> {  
                 this.cartCount++;
               });
        }
    });
   }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
