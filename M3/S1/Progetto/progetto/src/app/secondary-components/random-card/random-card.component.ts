import { Component } from '@angular/core';
import { iMachine } from '../../Models/machine';
import { MachineService } from '../../machine.service';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrl: './random-card.component.scss'
})
export class RandomCardComponent {

  machines:iMachine[] = []
  inEvidenceMachine:iMachine[] = []

  constructor(private machineSvc:MachineService){}

  ngOnInit(){
    this.machineSvc.getAllCars()
    .then(machine => {
      this.machines = machine
      this.generateRandomCars()
    })
  }

  generateRandomCars():void{
    for (let i = 0; i < 2; i++) {
      let index:number = Math.floor(Math.random() * this.machines.length)
      this.inEvidenceMachine.push(this.machines[index])
    }
  }

}
