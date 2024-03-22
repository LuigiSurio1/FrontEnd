import { MachineService } from './../../machine.service';
import { Component } from '@angular/core';
import { iMachine } from '../../Models/machine';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  audiCars:iMachine[] = []

  constructor(private machineSvc:MachineService){}

  ngOnInit(){
    this.machineSvc.getAudiCars()
    .then((res: iMachine[]) => this.audiCars = res)
  }
}
