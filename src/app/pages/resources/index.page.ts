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
  selector: 'app-resources',
  standalone: true,
  imports: [RouterLink, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="mb-4">resources</h2>

    <div class="block mb-4 p-7 pb-8 shadow-lg rounded-lg border border-gray-400 bg-white">
      <ng-container *ngFor="let category of resourceCategories">
        <h3 class="mb-2 first-of-type:mt-0 mt-10">{{ category.name }}</h3>
        <ul>
          @for(link of category.links; track link.url) {
            <li class="mb-4 mt-0 last-of-type:mb-0">
              <a [href]="link.url" target="_blank" class="underline text-sm font-semibold">{{ link.title }}</a>
<!--              <p class="text-sm">{{ link.title }}</p>-->
            </li>
          }
        </ul>
      </ng-container>
    </div>
  `,
})
export default class ResourcesComponent {
  resourceCategories: ResourceCategory[] = [
    {
      name: 'angular',
      links: [
        {
          title: "ducin.dev/blog",
          url: "https://ducin.dev/blog"
        },
        {
          title: "davembush.github.io",
          url: 'https://davembush.github.io'
        },
        {
          title: "angular.love",
          url: 'https://angular.love'
        },
        {
          title: "angularspace.com",
          url: 'https://angularspace.com'
        },
        {
          title: 'dev.to/danielglejzner',
          url: 'https://dev.to/danielglejzner'
        }
      ]
    },
    {
      name: 'front end',
      links: [
        {
          title: 'frontendatscale.com',
          url: 'https://frontendatscale.com',
        },
      ]
    },
    {
      name: 'other',
      links: [
        {
          title: 'monkeyuser.com',
          url: 'https://monkeyuser.com'
        }
      ]
    }
  ];
};
