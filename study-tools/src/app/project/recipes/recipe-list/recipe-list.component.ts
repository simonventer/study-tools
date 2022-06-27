import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  //recipes are the variable we also use on our *ngFor loop
  recipes: Recipe[] = [
    //Now we can manage our array of recipes
    //To see this -go to recipe-list.component.html
    new Recipe(
      'Test Name',
      'Test Description',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
