import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-author',
  standalone: true,
  template: `
    <div class="items-center flex flex-col sm:flex-row sm:space-x-6">
      <img
        src="./profile.jpeg"
        alt="Michal Grzegorczyk"
        class="mt-4 w-32 h-auto rounded-full border border-gray-400 shadow-lg"
      >
      <div class="text-center sm:text-left flex-grow">
        <h3 class="text-xl font-semibold">Michal Grzegorczyk</h3>
        <p class="text-xs text-gray-600 mb-2">Software Engineer & Freelancer</p>
        <div class="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
          @for (social of socialMedia; track social.name) {
            <a
              class="font-semibold underline text-xs"
              [href]="social.url"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="social.name"
            >
              {{ social.name }}
            </a>
          }
        </div>
      </div>
    </div>

  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `
})
export default class AuthorComponent {
  socialMedia = [
    {name: "linkedin", url: "https://www.linkedin.com/in/michalgrzegorczyk-dev"},
    {name: "discord", url: "https://discord.gg/aF2rvQDQ"},
    {name: "github", url: "https://github.com/michalgrzegorczyk-dev"},
  ];

}
