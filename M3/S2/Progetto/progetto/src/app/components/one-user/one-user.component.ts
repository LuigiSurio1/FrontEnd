import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.scss'
})
export class OneUserComponent {
  @Input() user!: User
  constructor() { }

  ngOnInit(): void {
}
}
