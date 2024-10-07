import {Component, ChangeDetectionStrategy, input} from '@angular/core';
import {RouterLink} from '@angular/router';

// TODO: Turn these productivity posts into MDX
@Component({
  selector: 'app-productivity',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="mb-6">{{ title() }}</h2>

    <div class="block mb-4 p-7 pb-8 shadow-lg rounded-lg border border-gray-400 bg-white">
      <h3 class="mb-3">block websites that you know distract you ⛔</h3>
      <p class="mb-7 text-sm">
        This productivity hack taught my brain that distracting
        websites are not available, so I don't even try to open them anymore.
        So whenever you try to visit these websites, you'll see "This site can't be reached", which is exactly what
        I need.
        <br><br>
        By the way, web extensions don't work for me because they're too easy to remove. With this method,
        I have to go into the terminal, remind what was the command, edit some files, and save them, which takes more
        time and makes me rethink my
        decision before doing it.
      </p>

      <ul class="mt-8">
        <li class="text-pink-500 text-sm mb-8 font-medium">
          <span>1. Open terminal and run following command:</span>
          <pre class="language-ts rounded-md"><code class="language-ts">sudo nano /etc/hosts</code></pre>
        </li>


        <li class="text-pink-500 text-sm font-medium">
          <span>2. Add websites, which you would like to block, e.g.:</span>
          <pre class="language-ts rounded-md"><code class="language-ts">127.0.0.1 www.facebook.com
127.0.0.1 www.x.com
127.0.0.1 www.tiktok.com</code></pre>
        </li>
      </ul>
    </div>

  `,
})
export default class ProductivityComponent {
  limit = input(3);
  title = input('productivity');

  codeForHighlight1 = `  sudo nano /etc/hosts`;

  codeForHighlight2 =
  `  # open terminal and run following command
  sudo nano /etc/hosts

  # Add websites, which you would like
          to block, e.g.
  127.0.0.1 www.facebook.com
  127.0.0.1 www.x.com
  127.0.0.1 www.tiktok.com
  `;


};
