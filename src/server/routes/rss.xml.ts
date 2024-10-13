//server/routes/rss.xml.ts

import { defineEventHandler, setHeader } from 'h3';
export default defineEventHandler((event) => {
  const feedString = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
</rss>
  `;
  setHeader(event, 'content-type', 'text/xml');
  return feedString;
});
