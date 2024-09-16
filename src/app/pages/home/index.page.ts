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
    <h1 class="mb-6 leading-10">{{ headerTitle() }}</h1>

    @for (paragraph of aboutMeParagraphs(); track $index) {
      <p class="text-lg mb-3">{{ paragraph }}</p>
    }

    <div class="flex space-x-4 mt-5">
      @for(social of socialMedia(); track social.name) {
        <a class="underline" [href]="social.url" target="_blank" [attr.aria-label]="social.name">{{ social.name }}</a>
      }
    </div>

    <div class="mb-10 mt-12 h-px bg-gray-200"></div>

    <app-blog [postLimit]="2"></app-blog>

    <div class="mb-10 mt-12 h-px bg-gray-200"></div>

    <app-mindset></app-mindset>

    <div class="mb-10 mt-12 h-px bg-gray-200"></div>

    <app-productivity></app-productivity>
  `,
})
export default class HomeComponent {
  headerTitle = signal("these are my notes rather than a professional blog, so please treat them with delicacy 🌱😌 (at least at early stage)");

  aboutMeParagraphs = signal([
    "Hi! I'm Michal, a software engineer with over 8 years of experience. Throughout my career, I've mostly worked with Java and Angular, building new applications from scratch and working on big legacy systems as well. Lately, I've been focusing mostly on front-end development, mainly using Angular.",
    "I also do a lot of freelance work in my free time. This sometimes lets me lead projects from start to finish, maintain and add new features to customers' existing systems, and collaborate with other developers, designers, and social media experts.",
    "As a software engineer, I often think about how products make money, which is moving me towards product management instead of just technical work. I also like to focus on creating good team spirit and maintaining transparency among team members.",
    "Here, I'd like to share my thoughts, show some code, post some memes or quotes, and talk about productivity, which is sometimes a challenge for me these days."
  ]);

  socialMedia = signal([
    {name: "linkedin", url: "https://www.linkedin.com/in/michalgrzegorczyk-dev/"},
    // {name: "youtube", url: "https://www.youtube.com"},
    // {name: "twitter", url: "https://x.com/michalgrzeg_dev"},
    {name: "github", url: "https://github.com/michalgrzegorczyk-dev/"},
  ]);
};
