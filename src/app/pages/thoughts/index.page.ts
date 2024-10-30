import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgIf, NgFor } from "@angular/common";
import { mindsetList } from "./data";

@Component({
  selector: 'app-mindset',
  standalone: true,
  imports: [NgIf, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="mb-6 text-left">{{  'thoughts' }}</h2>

    <div class="flex flex-col gap-6">
      @for (mindSpace of mindSpaces(); track mindSpace) {
      @if (mindSpace.type === 'text') {
      <blockquote class="p-6 shadow-lg rounded-lg border border-gray-400">
        <p class="text-gray-900 text-sm">"{{ mindSpace.content }}"</p>

        @if (mindSpace.author !== '') {
        <span class="block mt-4 text-right text text-pink-500 ">
          — {{ mindSpace.author }}
        </span>
        } @else {
        <span class="block mt-4 text-right text text-pink-500 ">
          — Unknown/From the Internet
        </span>
        }
      </blockquote>
      }
      @if (mindSpace.type === 'img') {
      <div class="flex justify-center">
        <img
          [src]="mindSpace.content"
          alt="Mind Space Image"
          class="rounded-lg"
          [style.width.px]="mindSpace.width"
          [style.height.px]="mindSpace.height"
          style="max-width: 600px;"
        >
      </div>
      }
      }
    </div>
  `
})
export default class MindsetComponent {
  readonly title = input('mindset');
  readonly mindSpaces = mindsetList;
}
