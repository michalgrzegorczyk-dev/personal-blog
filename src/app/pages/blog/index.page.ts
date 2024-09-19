import {Component, input, OnInit, signal, computed, Signal} from '@angular/core';
import {injectContentFiles, ContentFile} from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2 class="mb-6">{{title() ?? 'blog posts'}}</h2>

    @for (post of postsToDisplay(); track post.attributes.slug) {
      <a [routerLink]="['/blog/', post.attributes.slug]" class="block mb-6 p-7 shadow-lg rounded-lg border border-gray-400">
        <h3>{{ post.attributes.title }}</h3>
        <p class="text-gray-500 mb-4" style="font-size: 1rem">last updated 27 days ago</p>
        <p class="text-sm">{{ post.attributes.description }}</p>

        <p class="font-semibold text-primary-500 mt-4 underline text-xs">read more</p>
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
  readonly limit = input<number>();
  readonly title = input<string>();
  readonly posts = injectContentFiles<PostAttributes>();
  postsToDisplay!: Signal<ContentFile<PostAttributes>[]>;

  ngOnInit(): void {
    this.postsToDisplay = computed(() => this.posts.slice(0, this.limit()));
  }
};
// https://www.youtube.com/watch?v=8UumdecztKk
