import { Component } from '@angular/core';
import { iPosts } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {
  articleArr:iPosts[] = []

  constructor(private articleSvc:PostService){}

  ngOnInit(){
    this.articleSvc.getActiveArticle().then(res => {
      this.articleArr = res
    })
  }
}
