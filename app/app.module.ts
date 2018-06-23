import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameSelectorComponent } from './game-selector/game-selector.component';
import { GameItemComponent } from './game-item/game-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSelectorComponent,
    GameItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
