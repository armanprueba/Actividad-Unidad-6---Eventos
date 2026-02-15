import { Component } from '@angular/core';
import { Evento } from '../intefaces/evento';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventoFilterPipe } from '../pipes/evento-filter-pipe';
@Component({
  selector: 'app-eventos-show',
  imports: [DatePipe, FormsModule, EventoFilterPipe],
  templateUrl: './eventos-show.html',
  styleUrl: './eventos-show.css',
})

export class EventosShow {
  filterSearch = '';
  eventos: Evento[] = [
    {
      id: '1',
      title: 'Evento1',
      //Recordar poner el / al inicio de la ruta para que angular redirija correctamente//
      image: '/assets/evento1.jpg',
      date: '2026-01-01',
      description: 'Descripción de evento1',
      price: 25,
      
    },

    {
      id: '2',
      title: 'Evento2',
      image: '/assets/evento2.jpg',
      date: '2026-02-02',
      description: 'Descripción de evento2',
      price: 50,
      
    }
  ]
}
