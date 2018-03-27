import { Recipe } from '../recipes/recipe-list/recipe.model';
import { EventEmitter } from "@angular/core";
export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Veg Biryani", "This is a simple test1", "https://indianhealthyrecipes.com/wp-content/uploads/2012/11/vegetable-biryani-in-pressure-cooker-recipe-0.jpg"),
        new Recipe("Veg manchurian dry", "This is a simple test2", "https://i.ytimg.com/vi/Z4RE6X-3yKs/maxresdefault.jpg"),
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}