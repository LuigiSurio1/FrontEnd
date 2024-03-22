import { Injectable } from '@angular/core';
import { iMachine } from './Models/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  getAllCars():Promise<iMachine[]>{
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:iMachine[]) => res)
  }

  getFiatCars():Promise<iMachine[]>{
    return this.getAllCars()
    .then(res => res.filter(a => a.brand === 'Fiat'))
  }

  getFordCars():Promise<iMachine[]>{
    return this.getAllCars()
    .then(res => res.filter(a => a.brand === 'Ford'))
  }

  getAudiCars():Promise<iMachine[]>{
    return this.getAllCars()
    .then(res => res.filter(a => a.brand === 'Audi'))
  }
}
