import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
  }
}
