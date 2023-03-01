import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../Shared/Models/Cart';
import { cartItem } from '../Shared/Models/cartItem';
import { Food } from '../Shared/Models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getlocalStorage()
  private cartSubject : BehaviorSubject<Cart> = new BehaviorSubject(this.cart)

  addToCart (food: Food):void{
    let CartItem = this.cart.items.find((item)=>item.food.id === food.id)
    if (CartItem){
      return
    }
    this.cart.items.push(new cartItem(food))
    this.setLocalStorage()
  }

  removeFromCart(foodId: string):void{
    this.cart.items = this.cart.items.filter((data)=> data.food.id !== foodId) 
    this.setLocalStorage()
  }

  changeQuantity(foodId: string,quantity: number){
    let CartItem = this.cart.items.find((item)=>item.food.id === foodId)
    if (!CartItem){ return }
    CartItem.quantity = quantity
    CartItem.price = quantity * CartItem.food.price
    this.setLocalStorage()
  }

  clearCart(){
    this.cart = new Cart()
    this.setLocalStorage()
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable()
  }

  private setLocalStorage():void{
    this.cart.totalPrice = this.cart.items.
    reduce((prevSum,CurrentItem)=>prevSum + CurrentItem.price,0)
    this.cart.totalCount = this.cart.items.
    reduce((prevSum,CurrentItem)=>prevSum + CurrentItem.quantity,0)
    const cartJSON = JSON.stringify(this.cart)
    localStorage.setItem('cartItem',cartJSON)
    this.cartSubject.next(this.cart)
  }

  private getlocalStorage():Cart{
    const cartJSON = localStorage.getItem('cartItem')
    return cartJSON ? JSON.parse(cartJSON) : new Cart()
  }
}
