import { Component, OnInit } from '@angular/core';
import { RecipeService } from "./recipe.services";

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }
}
