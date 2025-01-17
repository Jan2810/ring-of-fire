import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { Game } from './../../models/game';
import { PlayerComponent } from "../player/player.component";
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatInputModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  pickCardAnimation = false;

  game!: Game;
  currentCard: string = '';
  playedCard: string = '';

  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() || '';
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.playedCard = this.currentCard;
        this.pickCardAnimation = false;
        this.game.playedCards.push(this.playedCard);
      }, 1000);
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogAddPlayerComponent);
     
      dialogRef.afterClosed().subscribe((name: string) => {
        this.game.players.push(name);
      });
  }

}
