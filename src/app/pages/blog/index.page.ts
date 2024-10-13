import {Component, input, OnInit, signal, computed, Signal, Pipe, PipeTransform} from '@angular/core';
import {injectContentFiles, ContentFile} from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';
import {DatePipe, LowerCasePipe, NgIf} from "@angular/common";

@Pipe({
  name: 'badgeClass',
  standalone: true,
})
export class BadgeClassPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'productivity':
        return 'bg-green-100 text-green-600  border-green-800';
      case 'external-link':
        return 'bg-yellow-100 text-yellow-600  border-yellow-800';

      case 'release':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  }
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DatePipe, LowerCasePipe, BadgeClassPipe, NgIf],
  template: `
    <h2 class="mb-6">{{ 'blog posts' }}</h2>

    @for (post of posts; track post.attributes.slug) {
      <!-- todo:) -->
      <a *ngIf="post.attributes['externalUrl']"
         [href]="post.attributes['externalUrl']"
         target="_blank"
         rel="noopener noreferrer"
         class="block mb-6 p-7 shadow-lg rounded-lg border border-gray-400">
        <div class="flex justify-between items-center">
          <h3>{{ post.attributes.title }}</h3>
          <span class="text-xxs font-medium px-2.5 py-0.5 rounded"
                [class]="post.attributes['badgeType'] | badgeClass"
          >{{ post.attributes['badge'] }}</span>
        </div>
        <p class="text-xs text-gray-600 mb-4">{{ post.attributes['date'] | date | lowercase }}</p>
        <p class="font-semibold text-primary-500 mt-4 underline text-xs">view full article on {{post.attributes['externalDomain']}}</p>
      </a>

      <a *ngIf="!post.attributes['externalUrl']"
         [routerLink]="['/blog/', post.attributes.slug]"
         class="block mb-6 p-7 shadow-lg rounded-lg border border-gray-400">
        <div class="flex justify-between items-center">
          <h3>{{ post.attributes.title }}</h3>
          <span class="text-xxs font-medium px-2.5 py-0.5 rounded"
                [class]="post.attributes['badgeType'] | badgeClass"
          >{{ post.attributes['badge'] }}</span>
        </div>
        <p class="text-xs text-gray-600 mb-4">{{ post.attributes['date'] | date | lowercase }}</p>
        <p class="font-semibold text-primary-500 mt-4 underline text-xs">view full article</p>
      </a>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>().sort((a:any, b:any) => {
    return new Date(b.attributes['date']).getTime() - new Date(a.attributes['date']).getTime();
  });
};
// https://www.youtube.com/watch?v=8UumdecztKk
