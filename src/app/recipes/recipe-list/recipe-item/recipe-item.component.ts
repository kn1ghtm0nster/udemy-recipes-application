import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // using property binding to render a new instance of the component class for every item that is inside the parent component array
  @Input() recipe: Recipe;

  // using event binding to render the details of the single recipe item that was selected. Since the route is being changed, no data is being emitted.
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(){}

  ngOnInit(): void {
    
  }

  onSelected(): void {
    this.recipeSelected.emit();
  }
}
