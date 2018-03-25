import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Veg Biryani", "This is a simple test1", "https://indianhealthyrecipes.com/wp-content/uploads/2012/11/vegetable-biryani-in-pressure-cooker-recipe-0.jpg"),
    new Recipe("Veg manchurian dry", "This is a simple test2", "https://i.ytimg.com/vi/Z4RE6X-3yKs/maxresdefault.jpg"),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
