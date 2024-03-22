import { Component } from '@angular/core';
import { iMachine } from '../../Models/machine';
import { MachineService } from '../../machine.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  fordCars:iMachine[] = []

  constructor(private machineSvc:MachineService){}

  ngOnInit(){
    this.machineSvc.getFordCars()
    .then((res: iMachine[]) => this.fordCars = res)
  }
}
