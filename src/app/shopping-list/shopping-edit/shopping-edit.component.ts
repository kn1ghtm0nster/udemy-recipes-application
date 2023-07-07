import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // accessing local references via given names from template
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  // emitting new ingredient after item is added.
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(){}

  ngOnInit(): void {
    
  }

  /**
   * method will take local reference values (name and amount) then create a new instance of Ingredient model.
   * 
   * After new instance is created, an event will be emitted for the parent component to add this new ingredient to the array of ingredients and render the contents.
   * 
   */
  onAddItem(): void {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIngredient);
  }
}
