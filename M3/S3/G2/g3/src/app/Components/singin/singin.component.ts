import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.scss'
})
export class SinginComponent {
  username!: string
  password!: string
  constructor() { }

  utenteRegistrato(target: NgForm) {
    alert("Registrato")
  }
}
