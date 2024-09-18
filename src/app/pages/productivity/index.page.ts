import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';

// TODO: Turn these productivity posts into MDX
@Component({
  selector: 'app-productivity',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="mb-4">productivity</h2>

    <div class="block mb-4 p-5 shadow-lg rounded-lg border border-gray-400 bg-white">
      <h3 class="mb-3">block websites that you know distract you ⛔</h3>
      <p class="mb-7">
        This productivity hack taught my brain that distracting
        websites are not available, so I don't even try to open them anymore.
        So whenever you try to visit these websites, you'll see "This site can't be reached," which is exactly what
        I need.
        <br><br>
        By the way, web extensions don't work for me because they're too easy to remove. With this method,
        I have to go into the terminal, remind what was the command, edit some files, and save them, which takes more
        time and makes me rethink my
        decision before doing it.
        <br><br>
        The approach is relatively easy to achieve and can be set up in a minute. Please follow the commands below.
      </p>

      <ul>
        <li class="text-pink-500 mb-6 text-base">1. Open terminal and run following command:<br>
          <code class="flex flex-col items-center bg-gray-50 rounded-lg p-5 mt-2 text-primary-500 border">
            <p class="font-semibold text-xs text-gray-800 w-full">sudo nano /etc/hosts</p>
          </code>
        </li>
        <li class="text-pink-500 text-base">2. Add websites, which you would like to block, e.g.: <br>
          <code class="flex flex-col items-center bg-gray-50 rounded-lg p-5 mt-2 text-primary-500 border">
            <p class="font-semibold text-xs text-gray-800 w-full">127.0.0.1 www.facebook.com</p>
            <p class="font-semibold text-xs text-gray-800 w-full">127.0.0.1 www.x.com</p>
            <p class="font-semibold text-xs text-gray-800 w-full">127.0.0.1 www.tiktok.com</p>
          </code>
        </li>
      </ul>
    </div>
  `,
})
export default class ProductivityComponent {
};
