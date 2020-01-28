import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {


  pacientes: Paciente[];  

  @Output() resetaMenu: EventEmitter<any> = new EventEmitter();

  redefineMenu() {
    if (this.resetaMenu) {
      this.resetaMenu.emit(true);
    }
  }

  versaoMobile = false;

  filtro: String;
  
  constructor(private servico: PacienteService) {

  }

  ngOnInit() {
    this.pacientes = this.servico.getPacientes()
    this.versaoMobile = this.detectmob();

  }

  detectmob() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    }
    else {
      return false;
    }
  }

}
