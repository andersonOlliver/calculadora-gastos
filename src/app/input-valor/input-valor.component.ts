import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-valor',
  templateUrl: './input-valor.component.html',
  styleUrls: ['./input-valor.component.css']
})
export class InputValorComponent implements OnInit {
  valorReceita: number;

  @Output() calcular: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.valorReceita = 4100;
    this.calcularMetodo();
  }

  calcularMetodo() {
    console.log(this.valorReceita);
    this.calcular.emit(this.valorReceita);
  }
}
