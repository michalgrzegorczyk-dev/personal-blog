import { Component, ChangeDetectionStrategy, signal, input } from '@angular/core';
import { NgIf } from "@angular/common";
import { mindSpaceList } from "./data";

@Component({
  selector: 'app-mind-space',
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="mb-6 text-left">{{ title() ?? 'mind space' }}</h2>

    <div class="relative w-full">
      <div class="px-14"> <!-- Adjusted padding for content -->
        @if (currentMindSpace().type === 'text') {
          <blockquote class="p-8 shadow-lg rounded-lg border border-gray-400">
            <p class="text-gray-900 text-sm">"{{ currentMindSpace().content }}"</p>

            @if (currentMindSpace().author !== '') {
              <span class="block mt-4 sm:mt-5 text-right text-sm text-pink-500">
              — {{ currentMindSpace().author }}
              </span>
            }
          </blockquote>
        }
        @if (currentMindSpace().type === 'img') {
          <div class="flex justify-center">
            <img class="max-w-full h-auto max-h-[560px] rounded-lg" [src]="currentMindSpace().content" alt="Mind Space Image">
          </div>
        }
      </div>

      <button (click)="prevItem()" class="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-primary-500 text-white rounded hover:bg-primary-600">
        ←
      </button>
      <button (click)="nextItem()" class="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-primary-500 text-white rounded hover:bg-primary-600">
        →
      </button>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `
})
export default class MindSpaceComponent {
  readonly title = input('mind space');

  private currentIndex = signal(0);
  private mindSpaces = signal(mindSpaceList());

  currentMindSpace = () => this.mindSpaces()[this.currentIndex()];

  prevItem() {
    this.currentIndex.update(index =>
      (index - 1 + this.mindSpaces().length) % this.mindSpaces().length
    );
  }

  nextItem() {
    this.currentIndex.update(index =>
      (index + 1) % this.mindSpaces().length
    );
  }
}
