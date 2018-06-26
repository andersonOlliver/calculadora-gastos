import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  valorGasto: number;
  valorInvestimento: number;
  valorDespesasFixas: number;
  valorDespesaEducacao: number;
  valorDespesaAleatoria: number;

  title = 'app';

  ngOnInit(): void {
  }
  // 70

  calcular(valorReceita) {
    console.log(valorReceita);
    this.valorGasto = this.getPercentual(valorReceita, 70);
    this.valorInvestimento = this.getPercentual(valorReceita, 30);

    this.valorDespesasFixas = this.getPercentual(valorReceita, 55);
    this.valorDespesaEducacao = this.getPercentual(valorReceita, 5);
    this.valorDespesaAleatoria = this.getPercentual(valorReceita, 10);
  }

  private getPercentual(valor: number, percentual: number): number {
    return valor * percentual / 100;
  }
}
