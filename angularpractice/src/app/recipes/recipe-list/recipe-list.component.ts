import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test Recipe","This is a simple test","https://indianhealthyrecipes.com/wp-content/uploads/2012/11/vegetable-biryani-in-pressure-cooker-recipe-0.jpg"),
    new Recipe("A test Recipe","This is a simple test","https://indianhealthyrecipes.com/wp-content/uploads/2012/11/vegetable-biryani-in-pressure-cooker-recipe-0.jpg"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
