import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule}from './shared/shared.module'
import { HeaderComponent } from './shared/header/header.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { TratamentosComponent } from './tratamentos/tratamentos.component';
import { SegundaSessaoComponent } from './home/segunda-sessao/segunda-sessao.component';
import { TerceiraSessaoComponent } from './home/terceira-sessao/terceira-sessao.component';
import { QuartaSessaoComponent } from './home/quarta-sessao/quarta-sessao.component';
import { AvaliacaoComponent } from './sobre/avaliacao/avaliacao.component';
import { ResumoComponent } from './sobre/resumo/resumo.component';
import { OpcoesComponent } from './tratamentos/opcoes/opcoes.component';
import { ChamadaComponent } from './tratamentos/chamada/chamada.component';
import { FormularioComponent } from './contato/formulario/formulario.component';
import { DuvidasComponent } from './contato/duvidas/duvidas.component';
import { DiferenciaisComponent } from './contato/diferenciais/diferenciais.component';
import { ModalComponent } from './tratamentos/opcoes/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    TratamentosComponent,
    SegundaSessaoComponent,
    TerceiraSessaoComponent,
    QuartaSessaoComponent,
    AvaliacaoComponent,
    ResumoComponent,
    OpcoesComponent,
    ChamadaComponent,
    FormularioComponent,
    DuvidasComponent,
    DiferenciaisComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
