import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  //This EventEmitter can now Emit our Ingredient Array (Replace EventEmitters with Observables - hence commented out)
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsSubscription = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients() {
    //Method that will return this array
    return this.ingredients.slice(); //will return a copy of this array
  }

  //here i will recieve a ingredient of type Ingredient
  addIngredient(ingredient: Ingredient) {
    //access my ingredients and push this new ingredient on it
    this.ingredients.push(ingredient);
    this.ingredientsSubscription.next(this.ingredients.slice());
    // this.ingredientsChanged.emit(this.ingredients.slice()); //Emits the new value onto the original as a copy
  }

  addIngredients(ingredients: Ingredient[]): void {
    //We will recieve our list of ingredients, of type Ingredient[]
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    //adding a spread operator to the list
    this.ingredients.push(...ingredients);
    this.ingredientsSubscription.next(this.ingredients.slice()); //Emits the new value onto the original as a copy
  }
}
