import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppComponent } from './app.component';
import {NbLayoutModule, NbSidebarModule, NbThemeModule, NbCardModule} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { InputValorComponent } from './input-valor/input-valor.component';
import { CardValorComponent } from './card-valor/card-valor.component';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    InputValorComponent,
    CardValorComponent
  ],
  imports: [
    BrowserModule,
    CurrencyMaskModule,
    FormsModule,
    NbCardModule,
    NbThemeModule.forRoot({ name: 'default' })
    // NbLayoutModule,
    // NbSidebarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-Br' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
