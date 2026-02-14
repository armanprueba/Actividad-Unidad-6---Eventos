import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosShow } from './eventos-show/eventos-show';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventosShow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-eventos');
}
