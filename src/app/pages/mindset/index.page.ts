import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from "@angular/common";
import {mindsets} from "./data";

// todo font-size 16px

@Component({
  selector: 'app-mindset',
  standalone: true,
  imports: [RouterLink, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="mb-4">mind space</h2>

    @for (mindset of mindsets(); track mindset.content) {
      <div class="mb-10 last-of-type:mb-0">
        @if (mindset.type === 'text') {
          <blockquote class="p-5 sm:p-9 relative shadow-lg rounded-lg border border-gray-400">
            <p class="text-gray-800 text-base sm:text-lg">"{{ mindset.content }}"</p>

            @if (mindset.author !== '') {
              <span class="block mt-4 sm:mt-5 text-right text-sm sm:text-base text-primary-500" style="color: #ff117a">
              — {{ mindset.author }}
              </span>
            }
          </blockquote>
        }
        @if (mindset.type === 'img') {
          <img class="w-full max-w-2xl" [src]="mindset.content" alt="ss">
        }
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export default class MindsetComponent {
  readonly mindsets = mindsets;
};
