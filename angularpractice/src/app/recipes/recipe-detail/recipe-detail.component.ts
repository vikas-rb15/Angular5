import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipe.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService,private router:Router, private route: ActivatedRoute) { }
id:number;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }
  AddTShopingList() {
    this.recipeService.addIngredientToShopingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(["edit"], { relativeTo: this.route });
    //this.router.navigate(["../",this.id,'edit'], { relativeTo: this.route });//here both lines do the same operatin
    // note: but if we directly enter http://localhost:4200/1/edit 2nd link will not work as id will not be available
  }
}
