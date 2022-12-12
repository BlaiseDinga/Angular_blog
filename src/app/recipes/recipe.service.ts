import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Wickelkuchen',
      'Aus den Teigzutaten einen Hefeteig herstellen. Diesen im Backofen 10 Minuten bei 50°C gehen lassen. Dann den Ofen ausschalten und den Teig weitere 20 Minuten gehen lassen.',
      'https://img.chefkoch-cdn.de/rezepte/726801175447162/bilder/159971/crop-642x428/wickelkuchen-nach-omas-rezept.jpg',
      [new Ingredient('Mehl', 500, 'g'),
                  new Ingredient('Hefe (Trockenhefe)', 1, 'Pck'),
                  new Ingredient('Zucker', 80, 'g'),
                  new Ingredient('Milch, warm', 250, 'ml'),
                  new Ingredient('Butter', 100, 'g'),
                  new Ingredient('Nutella', 2, 'EL'),
                  new Ingredient('Kakaopulver', 2, 'EL'),
                ]),
    new Recipe('Hildes weihnachtlicher Apfelkuchen',
      'IButter schaumig rühren. Zucker und Vanillinzucker langsam einrieseln lassen. Die Eier nach und nach zugeben.' +
      'Mehl, Backpulver, Nüsse, Zimt, Kakao löffelweise unterrühren.',
      'https://bing.com/th?id=OSK.d41a1a55e2537ddaac1ab58204fc4cff',
      [new Ingredient('Butter', 250, 'g'),
                 new Ingredient('Zucker', 250, 'g'),
                 new Ingredient('Vanillinzucker', 1, 'Pck'),
                 new Ingredient('Ei(er)', 4, ''),
                 new Ingredient('Mehl', 250, 'g'),
                 new Ingredient('Backpulver', 1, 'Pck'),
                 new Ingredient('Haselnüsse, gemahlen oder Walnüsse', 250, 'g'),
                 new Ingredient('Rum', 3, 'EL'),
                 new Ingredient('Äpfel', 6, 'ST'),
                ]),
    new Recipe('Omas Zimtsterne',
      'Zimtsterne zu backen braucht ein klein wenig Übung. Der einfache Teig aus Eischnee, ungeschälten Mandeln,' +
      'Puderzucker und Zimt ist zwar schnell zubereitet, hat aber ein paar kleine Fallen.',
      'https://www.meinestube.de/wp-content/uploads/2022/11/Omas-Zimtsterne-meinesstube7.jpg',
      [new Ingredient('Puderzucker', 190, 'g'),
                  new Ingredient('Mandel(n), gemahlen', 100, 'g'),
                  new Ingredient('Nüsse, gemahlen', 200, 'g'),
                  new Ingredient('Zimt', 1, 'TL'),
                  new Ingredient('Eiweiß', 1, ''),
                  new Ingredient('Zitronensaft', 1, 'Spritzer')
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
