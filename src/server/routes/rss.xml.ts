//server/routes/rss.xml.ts
import {injectContentFiles} from '@analogjs/content';
import { defineEventHandler, setHeader } from 'h3';
import PostAttributes from "../../app/post-attributes";

// // Simple function to get blog posts (replace with your actual data fetching logic)
// function getBlogPosts() {
//   return [
//     { title: 'First Post', date: '2024-03-01', slug: '/blog/first-post' },
//     { title: 'Second Post', date: '2024-03-15', slug: '/blog/second-post' },
//     // Add more posts as needed
//   ];
// }

export default defineEventHandler(async (event) => {
  const posts = injectContentFiles<PostAttributes>();

  const siteURL = 'https://michalgrzegorczyk.dev'; // Replace with your actual site URL

  let feedString = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Personal Blog - Michal Grzegorczyk</title>
    <link>${siteURL}</link>
    <description></description>
    <language>en-us</language>`;

  posts.forEach(post => {
    feedString += `
    <item>
      <title>${post.attributes.title}</title>
      <link>${siteURL}${post.attributes.slug}</link>
    </item>`;
  });

  feedString += `
  </channel>
</rss>`;

  setHeader(event, 'content-type', 'text/xml');
  return feedString;
});
