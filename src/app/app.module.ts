import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
