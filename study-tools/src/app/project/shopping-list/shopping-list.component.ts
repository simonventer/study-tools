import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  //ingredients is the variable i will use on the shopping-list.component.html to loop through
  ingredients: Ingredient[];
  private ingredientChangeSub: Subscription;

  //We can now inject the shopping-list service - bind it to a property slService, point it to the ShoppingListService file
  constructor(private _slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this._slService.getIngredients();
    this.ingredientChangeSub = this._slService.ingredientsSubscription
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.ingredientChangeSub.unsubscribe();
  }
}
