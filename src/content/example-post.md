---
title: block websites that you know distract you ⛔
slug: 2024-10-12-block-websites-that-you-know-distract-you
description:
coverImage: https://image4s.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80
---


# block websites that you know distract you ⛔

This productivity hack taught my brain that distracting websites are not available, so I don't even try to open them anymore. So whenever you try to visit these websites, you'll see "This site can't be reached", which is exactly what I need.
<br/>
<br/>
By the way, web extensions don't work for me because they're too easy to remove. With this method, I have to go into the terminal, remind what was the command, edit some files, and save them, which takes more time and makes me rethink my decision before doing it.
<br/>
<br/>
1. Open terminal and run following command:

```ts
sudo nano /etc/hosts
```

2. Add websites, which you would like to block, e.g.:

```ts 
127.0.0.1 www.facebook.com
127.0.0.1 www.x.com
127.0.0.1 www.tiktok.com
```
