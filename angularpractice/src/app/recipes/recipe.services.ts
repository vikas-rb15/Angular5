import { Recipe } from '../recipes/recipe-list/recipe.model';
import { Injectable } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.services';

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) { }
    private recipes: Recipe[] = [
        new Recipe("Veg Biryani",
            "This is a simple test1",
            "https://indianhealthyrecipes.com/wp-content/uploads/2012/11/vegetable-biryani-in-pressure-cooker-recipe-0.jpg",
            [new Ingredient("Rice", 20), new Ingredient("Vegitables", 5)]
        ),
        new Recipe("Veg manchurian dry",
            "This is a simple test2",
            "https://i.ytimg.com/vi/Z4RE6X-3yKs/maxresdefault.jpg",
            [new Ingredient("Cauliflower", 10), new Ingredient("Manchurian Sauce", 2)]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShopingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}