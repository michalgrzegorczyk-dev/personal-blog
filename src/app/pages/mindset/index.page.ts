import {Component, ChangeDetectionStrategy, signal, input, computed} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from "@angular/common";
import {mindsets} from "./data";

@Component({
  selector: 'app-mindset',
  standalone: true,
  imports: [RouterLink, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="mb-6">{{ title() ?? 'mind space' }}</h2>

    @for (mindset of mindsetsInternal(); track mindset.content) {
      <div class="mb-10 last-of-type:mb-0">
        @if (mindset.type === 'text') {
          <blockquote class="p-8 relative shadow-lg rounded-lg border border-gray-400">
            <!--            <p class="text-gray-800 text-base sm:text-xl">"{{ mindset.content }}"</p>-->
            <p class="text-gray-900 text-sm">"{{ mindset.content }}"</p>

            @if (mindset.author !== '') {
              <span class="block mt-4 sm:mt-5 text-right text-sm text-pink-500">
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
  readonly title = input('mind space');
  readonly limit = input(3);
  readonly mindsetsInternal = computed(() => mindsets().slice(0, this.limit()));
};
