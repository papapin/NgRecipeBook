import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  outputs: ['recipeSelected']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
      ];



  recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe)
  }

}
