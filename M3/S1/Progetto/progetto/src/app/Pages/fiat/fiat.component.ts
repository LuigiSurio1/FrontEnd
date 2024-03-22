import { Component } from '@angular/core';
import { iMachine } from '../../Models/machine';
import { MachineService } from '../../machine.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  fiatCars:iMachine[] = []

  constructor(private machineSvc:MachineService){}

  ngOnInit(){
    this.machineSvc.getFiatCars()
    .then((res: iMachine[]) => this.fiatCars = res)
  }
}
