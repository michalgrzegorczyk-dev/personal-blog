---
title: block websites that you know distract you ⛔
slug: 2024-10-13-block-websites-that-you-know-distract-you
description:
date: 2024-10-13
coverImage: ''
---


# block websites that you know distract you ⛔

I would like to share with you a simple productivity trick that I use to block distracting websites and
whenever I try to access them, I see the following view:
![can't be reached](./post.png)

FYI, chrome extensions don't work for me because they're too easy to remove with only 2 clicks. 
That method forces me to go through a few more steps to unblock the 
website like, open a terminal, remind what was the command, edit some files, and save them, which 
takes more time and makes me rethink my decision before doing it 😉
<br/>
<br/>
1. Open terminal and run following command:

```ts
sudo nano /etc/hosts
```
<br/>

2. Add websites, which you would like to block, e.g.:

```ts 
127.0.0.1 www.facebook.com
127.0.0.1 www.x.com
127.0.0.1 www.tiktok.com
```
