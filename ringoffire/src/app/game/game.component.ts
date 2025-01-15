import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from './../../models/game';
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  pickCardAnimation = false;

  game!: Game;
  currentCard: string = '';
  playedCard: string = '';

  constructor() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() || '';
      console.log(this.game);
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.playedCard = this.currentCard;
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.playedCard);
      }, 1000);
    }
  }

}
