import { Component, OnInit, Input } from '@angular/core';
import { GameTarget } from './gameTarget';

@Component({
  selector: 'gameItem',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input() gameData: GameTarget;
  constructor() { }

  ngOnInit() {
    console.log(this.gameData);
  }

}
