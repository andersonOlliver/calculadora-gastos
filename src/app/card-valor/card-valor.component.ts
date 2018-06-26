import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-valor',
  templateUrl: './card-valor.component.html',
  styleUrls: ['./card-valor.component.css']
})
export class CardValorComponent implements OnInit {

  @Input() valor: number;
  @Input() titulo: string;
  @Input() backgroundColor: string = '#5c57e6';
  @Input() fontColor: string = '#ffffff';
  constructor() { }

  ngOnInit() {
  }

}
