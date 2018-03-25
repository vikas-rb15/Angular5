import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputREf: ElementRef;
  @ViewChild('amountInput') amountInputREf: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  OnAdd(name, amount) {
    // this.ingredientAdded.emit(new Ingredient(name, amount));
    this.ingredientAdded.emit(new Ingredient(this.nameInputREf.nativeElement.value, this.amountInputREf.nativeElement.value);
  }

}
