import { Component, OnInit } from '@angular/core';
import { GameTarget } from '../game-item/gameTarget';
@Component({
  selector: 'gameSelector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {
  public gameItems: Array<GameTarget>;
  public menuSize: string;
  constructor() {
    this.gameItems = [];
  }

  ngOnInit() {
    this.gameItems.push(new GameTarget('/assets/wallpapers/forniteWall.jpg', ''));
    this.gameItems.push(new GameTarget('/assets/wallpapers/lolWall.jpg', ''));
    this.setSize();
    console.log(this.gameItems);
  }
  setSize() {
    this.menuSize = (100 / this.gameItems.length) + '%';
  }
  reSize() {
    this.menuSize = (20 / (this.gameItems.length - 1)) + '%';
  }
  toggleGameMenu(index) {
    console.log(index);
    const open = this.gameItems[index].open !== true;
    this.resetOpenCloseStatus();
    this.gameItems[index].open = open;
    if (open === true) {
      this.reSize();
    } else {
      this.setSize();
    }
  }
  resetOpenCloseStatus() {
    for (const index in this.gameItems) {
      if (this.gameItems.hasOwnProperty(index)) {
      this.gameItems[index].open = false;
    }
  }
}

}
