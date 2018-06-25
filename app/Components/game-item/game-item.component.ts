import { Component, OnInit, Input } from '@angular/core';
import { GameTarget } from './gameTarget';

@Component({
  selector: 'gameItem',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input() gameData: GameTarget;
  public userName: string;
  public userData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.gameData);
  }
  async printApiData() {
    const API = this.gameData.API;
    const apiData = await API.show(this.userName);
    console.log(apiData);
  }

}
