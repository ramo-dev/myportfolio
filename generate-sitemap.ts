

// generate-sitemap.ts
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

async function generateSitemap() {
  // Create a SitemapStream with your website's hostname
  const sitemap = new SitemapStream({ hostname: 'https://www.annuar.site' });

  // Add static routes
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });

  // End the sitemap stream
  sitemap.end();

  // Convert the sitemap stream to XML string
  // Explicitly type the parameter as `Buffer` which is the expected type
  const sitemapXML: string = await streamToPromise(sitemap).then((sm: Buffer) => sm.toString());

  // Write the sitemap XML to a file in the public directory
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemapXML);
}

// Run the function and handle any errors
generateSitemap().catch(console.error);

