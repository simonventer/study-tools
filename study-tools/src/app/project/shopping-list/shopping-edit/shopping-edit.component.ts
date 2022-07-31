import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //@ViewChild - Property decorator that configures a view query
  @ViewChild('nameInput') nameInput: ElementRef; //gets the local reference input from the HTML object
  @ViewChild('amountInput') amountInput: ElementRef; //gets the local reference input from the HTML object

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newName = this.nameInput.nativeElement.value;
    const newAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount);
    this.slService.addIngredient(newIngredient);
  }
}
