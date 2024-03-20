import { Component } from '@angular/core';
import { iPosts } from './Models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'g3';

  postsArr:iPosts[] = [];

  ngOnInit(){

    fetch("../assets/db.json")
    .then(post => post.json())
    .then(post => {this.postsArr = post.posts
    this.randomArr()})
  }

  randomNumber(){
    let i:number = Math.floor(Math.random() * this.postsArr.length)
    return i
  }

  randomArray: iPosts[] = [];

  randomArr(){
    for (let i = 0; i < 4; i++) {
      this.randomArray.push(this.postsArr[this.randomNumber()])
    }
  }

}
