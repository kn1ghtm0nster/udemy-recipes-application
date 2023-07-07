import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Apples', 5)
  ];

  /**
   * method takes new ingredient data from child component and adds it to the current ingredients list 
   * to render on the page.
   * 
   * @param {Ingredient} newIngredient 
   * @returns {void}
   */
  onIngredientAdded(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
  }

}
