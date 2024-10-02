import {Component, signal, Renderer2, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass, NgIf, DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="mt-14 sm:mt-16 flex flex-col items-center">
        <div class="mb-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 text-xs text-gray-600">
            <a href="/" class="font-semibold mx-0 underline">michalgrzegorczyk.dev</a>
            <div class="hidden sm:block"> •</div>
            <div>© copyright {{ currentYear() }}</div>
            <div class="hidden sm:block"> •</div>
            <a href="https://github.com/michalgrzegorczyk-dev/personal-blog" target="_blank" class="underline font-semibold mx-0">source code</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
class FooterComponent {
  readonly currentYear = signal(new Date().getFullYear());
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgIf, FooterComponent],
  template: `
    <main class="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

      <aside class="mb-10 md:mb-16">
        <div class="lg:sticky lg:top-20">
          <nav class="mt-4 flex items-center justify-between px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            <div class="flex flex-row space-x-0 pr-10">
              <a href="/" class="text-lg text-gray-900 hover:text-gray-950">
                <span class="font-semibold underline">michalgrzegorczyk.dev</span>
                👨🏻‍💻
              </a>
            </div>
            <!-- Mobile Menu Button -->
            <div class="lg:hidden flex">
              <button (click)="toggleMobileMenu()" class="text-gray-800 focus:outline-none">
                <!-- Icon for the hamburger menu when closed, 'x' when opened -->

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     class="h-8 w-8 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400">
                  <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>

                <!--                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
                <!--                  <path *ngIf="!isMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>-->
                <!--                  <path *ngIf="isMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>-->
                <!--                </svg>-->
              </button>
            </div>

            <!-- Navigation Links for Desktop -->
            <div class="hidden lg:flex flex-row space-x-0 ml-auto text-gray-900 hover:text-primary-500">
              <a href="/blog" class="font-semibold text-sm underline pr-10" style="font-size: 1.14rem">blog</a>
              <a href="/mindset" class="font-semibold text-sm underline pr-10" style="font-size: 1.14rem">mindset</a>
              <a href="/productivity" class="font-semibold text-sm  underline pr-10" style="font-size: 1.14rem">productivity</a>
              <a href="/resources" class="font-semibold text-sm underline" style="font-size: 1.14rem">resources</a>
            </div>
          </nav>

          <!-- Mobile Dropdown Menu with Overlay -->
          <div class="z-10 fixed inset-0 z-60 bg-black/25 transition-opacity"
               [ngClass]="{'opacity-100': isMenuOpen(), 'opacity-0 pointer-events-none': !isMenuOpen()}"
               (click)="toggleMobileMenu()">
          </div>

          <div
            class="z-10 fixed left-0 top-0 z-70 h-full w-full bg-white opacity-95 duration-300 transition-transform transform"
            [ngClass]="{
              'translate-x-0': isMenuOpen(),
              'translate-x-full': !isMenuOpen()
            }"
          >
            <nav class="mt-8 flex h-full basis-0 flex-col items-start overflow-y-auto pl-12 pt-2 text-left">
              <a href="/" class="text-xl mb-4 py-2 pr-4 font-bold tracking-widest text-gray-900">home</a>
              <a href="/blog" class="text-xl mb-4 py-2 pr-4 font-bold tracking-widest text-gray-900">blog</a>
              <a href="/mindset" class="text-xl mb-4 py-2 pr-4 font-bold tracking-widest text-gray-900">mindset</a>
              <a href="/productivity" class="text-xl mb-4 py-2 pr-4 font-bold tracking-widest text-gray-900">productivity</a>
              <a href="/resources" class="text-xl mb-4 py-2 pr-4 font-bold tracking-widest text-gray-900">resources</a>
            </nav>
            <button (click)="toggleMobileMenu()"
                    class="fixed right-4 top-7 z-80 h-16 w-16 p-4 text-gray-900 hover:text-primary-500"
                    aria-label="Toggle Menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>

        </div>
      </aside>

      <router-outlet/>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .transition-transform {
        transition: transform 0.3s ease-in-out;
      }
    `,
  ],
})
export class AppComponent {
  readonly isMenuOpen = signal(false);

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleMobileMenu() {
    this.isMenuOpen.update((value) => {
      if (!value) {
        this.renderer.addClass(this.document.body, 'no-scroll');
      } else {
        this.renderer.removeClass(this.document.body, 'no-scroll');
      }
      return !value;
    });
  }

}
