import {Component, } from '@angular/core';
import {RouterLink} from '@angular/router';
import BlogComponent from "../blog/index.page";
import MindSpaceComponent from "../mind-space/index.page";
import ResourcesComponent from "../resources/index.page";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BlogComponent, MindSpaceComponent, ResourcesComponent, NgClass],
  template: `
    <h2 class="mb-6 leading-10">{{ headerTitle }}</h2>


    <p class="text-sm mb-5">
      Hi! I'm Michal, a Software Engineer with 6+ years of experience. I've mainly worked with Java and Angular/React,
      building web
      apps from scratch, improving and expanding existing applications, while also maintaining large legacy systems.
      Lately, I've been focusing more on front-end work, especially with Angular, while also keeping an interest in
      Node.js.
    </p>
    <p class="text-sm mb-5">
      In my free time, I freelance a lot, looking for side jobs, leading projects, adding features, collaborating with
      other developers, designers, and social media
      experts, while also exploring how products make money, which is pushing me towards product management. I mainly
      focus on delivery, but building team spirit and keeping things open and clear are very important to me as well.

    </p>


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


    <div class="mb-14 mt-16 h-px bg-gray-400"></div>

    <app-blog></app-blog>
  `,

})
export default class HomeComponent {
  headerTitle = "personal dev notes - handle them gently 😌";

  aboutMeParagraphs = [
    `Hi! I'm Michal, a Software Engineer with 6+ years of experience. I've mainly worked with Java and Angular/React, building web
    apps from scratch, improving and expanding existing applications, while also maintaining large legacy systems.
    Lately, I've been focusing more on front-end work, especially with Angular, while also keeping an interest in Node.js.`,

    "In my free time, I freelance a lot, looking for side jobs, leading projects, adding features, collaborating with other developers, designers, and social media " +
    "experts, while also exploring " +
    "how products make money, which is pushing me towards product management. I mainly focus on delivery, but building team spirit and keeping things open and clear are very important to me as well.",
  ];
  socialMedia = [
    {name: "linkedin", url: "https://www.linkedin.com/in/michalgrzegorczyk-dev/"},
    {name: "discord", url: "https://discord.gg/aF2rvQDQ"},
    {name: "github", url: "https://github.com/michalgrzegorczyk-dev/"},
  ];
};
