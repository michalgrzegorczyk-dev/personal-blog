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
    <h2 class="mb-4">about</h2>

    <div class="block mb-6 p-7 pb-8 shadow-lg rounded-lg border border-gray-400 bg-white">
      <h3>NgRx Workshops Certificate (10/2024)</h3>

      <embed
        src="https://mgdev.s3.eu-north-1.amazonaws.com/aboutme/Michal-Grzegorczyk.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>

    <div class="block mb-6 p-7 pb-8 shadow-lg rounded-lg border border-gray-400 bg-white">
      <h3>Ng Poland COnf 2024)</h3>

      <embed
        src="https://mgdev.s3.eu-north-1.amazonaws.com/aboutme/Certificate_of_Attendance.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>




    <div class="block mb-6 p-7 pb-8 shadow-lg rounded-lg border border-gray-400 bg-white">
      <h3>ClickUp Novice Expert</h3>

      <embed
        src="https://mgdev.s3.eu-north-1.amazonaws.com/aboutme/cpexpert.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>

    <div class="block mb-6 p-7 pb-8 shadow-lg rounded-lg border border-gray-400 bg-white">
      <h3>ClickUp Novice Certificate</h3>

      <embed
        src="https://mgdev.s3.eu-north-1.amazonaws.com/aboutme/cpnovice.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>

    <div class="block mb-6 p-7 pb-8 shadow-lg rounded-lg border border-gray-400 bg-white">
      <h3>16personalities (30.10.2024)</h3>

      <img src="./aboutme/16p.png" />

      <embed
        src="https://mgdev.s3.eu-north-1.amazonaws.com/aboutme/aboutarchitect.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>

    <div class="block mb-6 p-7 pb-8 shadow-lg rounded-lg border border-gray-400 bg-white">
      <h3>CliftonStrengths (30.10.2024)</h3>


      <embed
        src="https://mgdev.s3.eu-north-1.amazonaws.com/aboutme/top5.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
      <embed
        src="https://mgdev.s3.eu-north-1.amazonaws.com/aboutme/top34.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
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
