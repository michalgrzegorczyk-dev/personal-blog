import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../post-attributes';
import AuthorComponent from "../../components/author.component";

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent, AuthorComponent],
  template: `
    @if (post$ | async; as post) {
    <article>
<!--      <img class="post__image" [src]="post.attributes.coverImage" />-->
      <analog-markdown [content]="post.content"></analog-markdown>
      <div class="mb-8"></div>
      <app-author></app-author>

    </article>
    }
  `,
})
export default class HomeComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
