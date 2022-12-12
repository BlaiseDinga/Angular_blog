import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {TuiActionModule, TuiInputMonthRangeModule} from '@taiga-ui/kit';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiButtonModule, TuiRootModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ], //Die zu diesem NgModule gehörenden Komponenten , Direktiven und Pipes .
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiActionModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiInputMonthRangeModule,
    TuiRootModule,
    AppRoutingModule
  ], //Andere Module, deren exportierte Klassen von in diesem NgModul deklarierten Komponentenvorlagen benötigt werden .
  providers: [ShoppingListService], //Ersteller von Diensten , die dieses NgModul zur globalen Sammlung von Diensten beiträgt; Sie werden in allen Teilen der Anwendung zugänglich.
  bootstrap: [AppComponent], //Die Hauptanwendungsansicht, Root-Komponente genannt , die alle anderen Anwendungsansichten hostet.
})
export class AppModule { } //Die Teilmenge der Deklarationen, die in den Komponentenvorlagen anderer NgModule sichtbar und verwendbar sein sollten.
