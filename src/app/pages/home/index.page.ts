import {Component, } from '@angular/core';
import {RouterLink} from '@angular/router';
import BlogComponent from "../blog/index.page";
import MindsetComponent from "../mindset/index.page";
import ResourcesComponent from "../resources/index.page";
import {NgClass} from "@angular/common";
import AuthorComponent from "../../components/author.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BlogComponent, MindsetComponent, ResourcesComponent, NgClass, AuthorComponent],
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

    <app-author></app-author>

    <div class="mb-14 mt-16 h-px bg-gray-400"></div>

    <app-blog></app-blog>
  `,

})
export default class HomeComponent {
  headerTitle = "personal dev notes - handle them gently 😌";
};
