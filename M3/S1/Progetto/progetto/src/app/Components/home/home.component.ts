import { Component } from '@angular/core';
import { MachineService } from '../../machine.service';
import { iMachine } from '../../Models/machine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
