//server/routes/rss.xml.ts

import { defineEventHandler, setHeader } from 'h3';
// Simple function to get blog posts (replace with your actual data fetching logic)
function getBlogPosts() {
  return [
    { title: 'First Post', date: '2024-03-01', slug: '/blog/first-post' },
    { title: 'Second Post', date: '2024-03-15', slug: '/blog/second-post' },
    // Add more posts as needed
  ];
}

export default defineEventHandler((event) => {
  const posts = getBlogPosts();
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
      <title>${post.title}</title>
      <link>${siteURL}${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
  });

  feedString += `
  </channel>
</rss>`;

  setHeader(event, 'content-type', 'text/xml');
  return feedString;
});
