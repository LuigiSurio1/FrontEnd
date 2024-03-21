import { Component } from '@angular/core';
import { iPosts } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-non-active',
  templateUrl: './non-active.component.html',
  styleUrl: './non-active.component.scss'
})
export class NonActiveComponent {
  articleArr:iPosts[] = []

  constructor(private articleSvc:PostService){}

  ngOnInit(){
    this.articleSvc.getNonActiveArticle().then(res => {
      this.articleArr = res
    })
  }
}
