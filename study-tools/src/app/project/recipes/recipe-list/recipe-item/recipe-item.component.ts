import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //Wont be a value assigned to Recipe, because we want to get the recipe from outside
  @Input() recipe: Recipe;
  @Input() index: number; //with Index i can pass the index from outside in recipe-list.component.html

  ngOnInit(): void {
  }

}