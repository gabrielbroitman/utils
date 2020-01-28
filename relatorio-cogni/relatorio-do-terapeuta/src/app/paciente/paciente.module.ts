import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService } from './paciente.service';
import { DetalhePage } from './detalhe/detalhe.page';
import { ListagemPage } from './listagem/listagem.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DetalhePage, ListagemPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'paciente/listagem',
        component: ListagemPage
      },
      {
        path: 'paciente/detalhe',
        component: DetalhePage
      }
    ])
  ],
  exports: [ListagemPage, DetalhePage],
  providers: [PacienteService ]
})
export class PacienteModule { }
