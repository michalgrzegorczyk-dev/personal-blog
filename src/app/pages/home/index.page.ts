import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import BlogComponent from "../blog/index.page";
import ProductivityComponent from "../productivity/index.page";
import MindsetComponent from "../mindset/index.page";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BlogComponent, MindsetComponent, ProductivityComponent],
  template: `
    <h1 class="mb-6 leading-10">{{ headerTitle }}</h1>

    @for (paragraph of aboutMeParagraphs; track $index) {
      <p class="text-sm mb-5" style="font-size: 1.2rem">{{ paragraph }}</p>
    }

    <div class="flex space-x-4 mt-5">
      @for (social of socialMedia; track social.name) {
        <a class="font-semibold underline" style="font-size: 1.12rem" [href]="social.url" target="_blank" [attr.aria-label]="social.name">{{ social.name }}</a>
      }
    </div>

    <div class="mb-14 mt-16 h-px bg-gray-400"></div>

    <app-blog [postLimit]="2"></app-blog>

    <div class="mb-14 mt-16 h-px bg-gray-400"></div>

    <app-mindset></app-mindset>

    <div class="mb-14 mt-16 h-px bg-gray-400"></div>

    <app-productivity></app-productivity>
  `,
})
export default class HomeComponent {
  // headerTitle = "here are my notes rather than a blog, so please treat them with delicacy 🌱😌 (at least at early stage)";
  headerTitle = "personal dev notes - handle them gently 🌱😌";

  // aboutMeParagraphs =
  //    ["Hi! I'm Michal, a software engineer with over 8 years of experience. Throughout my career, I've mostly worked with Java and Angular, building new applications from scratch and working on big legacy systems as well. Lately, I've been focusing mostly on front-end development, mainly using Angular.",
  //     "I also do a lot of freelance work in my free time. This sometimes lets me lead projects from start to finish, maintain and add new features to customers' existing systems, and collaborate with other developers, designers, and social media experts.",
  //     "As a software engineer, I often think about how products make money, which is moving me towards product management instead of just technical work. I also like to focus on creating good team spirit and maintaining transparency among team members.",
  //     "Here, I'd like to share my thoughts, show some code, post some memes or quotes, and talk about productivity, which is sometimes a challenge for me these days."];

  aboutMeParagraphs = [
    `Hi! I'm Michal, a Software Engineer with 6+ years of experience. I've mainly worked with Java and Angular/React, building web
    apps from scratch, improving and expanding existing applications, while also maintaining large legacy systems.
    Lately, I've been focusing more on front-end work, especially with Angular, while also keeping an interest in Node.js.`,

    "In my free time, I freelance a lot, looking for side jobs, leading projects, adding features, collaborating with other developers, designers, and social media " +
    "experts, while also exploring " +
    "how products make money, which is pushing me towards product management. I mainly focus on delivery, but building team spirit and keeping things open and clear are very important to me as well.",

    `Here, on this website, I'll share my thoughts, code, memes, and talk about productivity. I hope you'll find something useful here, and if you have
    any questions or suggestions, feel free to reach out to me.`
  ];
  socialMedia = [
    {name: "linkedin", url: "https://www.linkedin.com/in/michalgrzegorczyk-dev/"},
    {name: "discord", url: "https://discord.gg/aF2rvQDQ"},
    {name: "github", url: "https://github.com/michalgrzegorczyk-dev/"},
  ];
};
