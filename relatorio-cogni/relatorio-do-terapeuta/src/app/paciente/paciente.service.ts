import { Injectable } from '@angular/core';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacientes: Paciente[] = new Array();

  constructor() { }


  getPacientes() {
    this.pacientes.push(new Paciente('Claudio'))
    this.pacientes.push(new Paciente('Gabriel'))
    this.pacientes.push(new Paciente('Joao'))
    this.pacientes.push(new Paciente('Pedro Sao Bento'))

    return this.pacientes;
  }
}
