import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirecive } from './shared/Directives/dropdown.directive';
import { RecipeService } from "./recipes/recipe.services";
import { ShoppingListService } from "./shopping-list/shopping-list.services";

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirecive
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [RecipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
