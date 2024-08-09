import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Item {
  name: string;
  type: string;
  image: string;
  price: number;
  quantity: number;
};

@Injectable({
  providedIn: 'root'
})
// export class ItemsService {

//   private _total = new BehaviorSubject<number>(0);
//   total = this._total.asObservable();
//   item: any;
//   url: string ='/assets/json/item.json';

//   constructor(private http: HttpClient) {
//     this.getData().subscribe(result=>{
//       this.item=result;
//     });
//    }

//   getData(): Observable<Item[]>{
//       return this.http.get<Item[]>(this.url);
//     }

//   getTotal(item: Item): number {
//      let initalTotal = 0;
//      this.item.forEach((element:Item) => {
//       if(element.name==item.name){
//         element.quantity=item.quantity;
//       }
//       initalTotal = initalTotal + element.quantity;
//     });
//     return initalTotal;
//   }

//   addToCart(item: Item) {
//     let itemCount =this.getTotal(item);
//     this._total.next(itemCount);
//   }

//   removeFromCart(item: Item) {
//     let itemCount =this.getTotal(item);
//     this._total.next(itemCount);
//   }

// }
export class ItemsService {

  _cart = new BehaviorSubject<Item[]|null>(null);
  cart = this._cart.asObservable();
  items: Item[]=[];
  url: string ='/assets/json/item.json';

  constructor(private http: HttpClient) { }

  // Get data from service
  getData(): Observable<Item[]>{
      return this.http.get<Item[]>(this.url);
  }

  // Add item to Cart
  addToCart(item: Item) {  
    this.items.push(item);
    this._cart.next(this.items);
  }

  // Remove item from Cart
  removeFromCart(item: Item) {
   this.items.splice(this.items.indexOf(item), 1);
   this._cart.next(this.items);
  }

  // Save items in local storage 
  setLocalStorage(items: any){
    const carItemsString:string = JSON.stringify(items);
    localStorage.setItem('localCarts', carItemsString);
 }

 // Get items from local storage 
  getLocalStorage(){
    let carts = [];
    if(localStorage.getItem('localCarts') !=null){
        const carItemsString= localStorage.getItem('localCarts');
        if(carItemsString!=null)
          carts = JSON.parse(carItemsString);
   }
   return carts;
  }  
}
