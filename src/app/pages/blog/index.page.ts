import {Component, input, OnInit, signal, computed, Signal} from '@angular/core';
import {injectContentFiles, ContentFile} from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2 class="mb-4">blog posts</h2>

    @for (post of postsToDisplay(); track post.attributes.slug) {
      <a [routerLink]="['/blog/', post.attributes.slug]" class="block mb-6 p-5 shadow-lg rounded-lg border border-gray-100">
        <h3>{{ post.attributes.title }}</h3>
        <p class="text-primary-500 text-xs mb-4">last updated 27 days ago</p>
        <p>{{ post.attributes.description }}</p>

        <p class="text-primary-500 mt-4 underline">read more</p>
      </a>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export default class BlogComponent implements OnInit {
  readonly postLimit = input<number>();
  readonly posts = injectContentFiles<PostAttributes>();
  postsToDisplay!: Signal<ContentFile<PostAttributes>[]>;

  ngOnInit(): void {
    this.postsToDisplay = computed(() => this.posts.slice(0, this.postLimit()));
  }
};
// https://www.youtube.com/watch?v=8UumdecztKk
