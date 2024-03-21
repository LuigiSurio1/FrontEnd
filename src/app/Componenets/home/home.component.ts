import { Component } from '@angular/core';
import {PostService } from '../../post.service';
import { iPosts } from '../../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  articleArr:iPosts[] =[]
  randomArray:iPosts[] = []

  constructor(private articoliSvc:PostService){}

  ngOnInit(){
    this.articoliSvc.getAllArticles().then(res => {
      this.articleArr = res
      this.generateRandomArray()
    })
  }


  generateRandomArray(){
    for(let i = 0; i < 4; i++){
      let index:number = Math.floor(Math.random() * this.articleArr.length)
      this.randomArray.push(this.articleArr[index])
    }
  }
}
