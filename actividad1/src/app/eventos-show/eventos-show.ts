import { Component } from '@angular/core';
import { Evento } from '../intefaces/evento';

@Component({
  selector: 'app-eventos-show',
  imports: [],
  templateUrl: './eventos-show.html',
  styleUrl: './eventos-show.css',
})

export class EventosShow {
  eventos: Evento[] = [
    {
      id: '1',
      title: 'Evento1',
      image: '',
      date: '2026-01-01',
      description: 'Descripción de evento1',
      price: 25,
      
    },

    {
      id: '2',
      title: 'Evento2',
      image: '',
      date: '2026-02-02',
      description: 'Descripción de evento2',
      price: 50,
      
    }
  ]
}
