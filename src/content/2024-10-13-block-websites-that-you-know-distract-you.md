---
title: block websites that you know distract you ⛔
slug: 2024-10-13-block-websites-that-you-know-distract-you
description:
date: 2024-10-13
coverImage: ''
badge: productivity
badgeType: productivity
---


# block websites that you know distract you ⛔

I would like to share with you a simple productivity trick that I use to block distracting websites on macOS.
Whenever I try to access them, I see the following message: "This site can’t be reached".
![can't be reached](./post.png)

There are few options to achieve this. FYI, Chrome extensions don't work for me because they're too easy to disable with just 2 clicks. 
My approach forces me to go through a few more steps to unblock a 
website such as opening a terminal, recalling the command, editing some files, and saving them.
This extra effort makes me rethink my decision before proceeding 😉
<br/>
<br/>
To block websites, follow these steps:
<br/>
<br/>
1. Open your terminal and run the following command:

```ts
sudo nano /etc/hosts
```
<br/>

2. Add the websites, which you’d like to block, e.g.:

```ts 
127.0.0.1 www.facebook.com
127.0.0.1 www.x.com
127.0.0.1 www.tiktok.com
```
<br/>

Check if the websites are blocked in your browser. If it doesn’t work, try checking in incognito mode. You may also need to remove all cookies for those websites and flush the DNS cache with the following command:

```ts
sudo dscacheutil -flushcache
```


<br/>

This method has helped me avoid using Facebook, TikTok, and other distracting websites altogether. I hope it works for you too! 🚀
