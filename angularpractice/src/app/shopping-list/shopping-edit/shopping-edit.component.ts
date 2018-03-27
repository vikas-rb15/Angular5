import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputREf: ElementRef;
  @ViewChild('amountInput') amountInputREf: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  OnAdd(name, amount) {
    // this.ingredientAdded.emit(new Ingredient(name, amount));
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInputREf.nativeElement.value,
        this.amountInputREf.nativeElement.value
      )
    );
  }
  OnDelete(name, amount) {

  }
  OnClear(nameInput,amountInput){

  }

}
