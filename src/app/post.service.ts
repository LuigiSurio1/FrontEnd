import { Injectable } from '@angular/core';
import { iPosts } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  articoliArr:iPosts[] = []

  getAllArticles():Promise<iPosts[]>{
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res: {posts:iPosts[]}) => {
      this.articoliArr = res.posts
      return this.articoliArr
    })
  }

  getActiveArticle():Promise<iPosts[]>{
    return this.getAllArticles()
    .then(res => res.filter(a => a.active))
  }

  getNonActiveArticle():Promise<iPosts[]>{
    return this.getAllArticles()
    .then(res => res.filter(a => !a.active))
  }
}
