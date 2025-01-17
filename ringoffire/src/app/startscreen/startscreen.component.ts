import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})

export class StartscreenComponent {

  constructor(private router: Router) {}

  newGame() {
    this.router.navigateByUrl('/game');
  }

}
