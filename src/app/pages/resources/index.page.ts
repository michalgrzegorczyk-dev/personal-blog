import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from "@angular/common";

interface ResourceLink {
  url: string;
  title: string;
}

interface ResourceCategory {
  name: string;
  links: ResourceLink[];
}

@Component({
  selector: 'app-productivity',
  standalone: true,
  imports: [RouterLink, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="mb-4">resources</h2>

    <ng-container *ngFor="let category of resourceCategories">
      <h3 class="mb-4">{{ category.name }}</h3>
      <ul>
        @for(link of category.links; track link.url) {
          <li class="mb-7 last-of-type:mb-8">
            <a [href]="link.url" class="underline">{{ link.url }}</a>
            <p class="text-xs">{{ link.title }}</p>
          </li>
        }
      </ul>
    </ng-container>
  `,
})
export default class ResourcesComponent {
  resourceCategories: ResourceCategory[] = [
    {
      name: 'angular',
      links: [
        {
          title: "It's a blog by an experienced guy who focuses on Angular. He shares his programming notes, mostly about Angular.",
          url: 'https://davembush.github.io/'
        },
        {
          title: "A website full of passionate people who love Angular, now merged with Angular in Depth - one of the most popular blog sites about Angular.",
          url: 'https://www.angular.love/'
        },
        {
          title: "Angualr Sapce is created by Daniel Glejzner. The Hub for Learning and Growing as an Angular Developer.",
          url: 'https://www.angularspace.com/'
        },
        {
          title: 'Daniel Glejzner dev.to',
          url: 'https://dev.to/danielglejzner'
        }
      ]
    },
    {
      name: 'front end',
      links: [
        {
          title: 'A quality website focused on advanced frontend techniques, scalable architectures, and solutions.',
          url: 'https://frontendatscale.com/',
        },
      ]
    },
  ];
};
