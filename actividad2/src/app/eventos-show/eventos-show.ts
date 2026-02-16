import { Component } from '@angular/core';
import { Evento } from '../intefaces/evento';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventoFilterPipe } from '../pipes/evento-filter-pipe';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-eventos-show',
  imports: [DatePipe, FormsModule, EventoFilterPipe],
  templateUrl: './eventos-show.html',
  styleUrl: './eventos-show.css',
})

export class EventosShow {
  filterSearch = '';
  newEvento: Evento = {
        id: '',
        title: '',
        description: '',
        image: '',
        price: 0,
        date: ''
    };
  constructor(private cdr: ChangeDetectorRef) {}
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
  ];
  orderPrice(){
    this.eventos = this.eventos.sort(function (a, b) {  return a.price - b.price;  });
  };
  orderDate(){
  //Importante poner getTime para que TypeScript pueda comparar datos de tipo fecha

    this.eventos = this.eventos.sort(function (a, b) {  return new Date(a.date).getTime() - new Date(b.date).getTime();  });
  }

    addEvento() {

    // Añadir el evento al array
    this.eventos.push(this.newEvento);

    // Reiniciar el formulario (opción 1: nuevo objeto vacío)
    this.resetForm();
  }

  resetForm() {
    this.newEvento = {
      id: '',
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    };
  }
  
changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
        this.newEvento.image = reader.result as string;
        this.cdr.detectChanges();
    });
}
}
