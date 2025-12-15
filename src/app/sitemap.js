import { allBlogs } from './[locale]/blogs/_data/allBlogs';
import { allServices } from './[locale]/services/_data/servicesData';

export default async function sitemap() {
  const baseUrl = 'https://tajera.net';
  const locales = ['en', 'ar'];
  const routes = [];

  // Static pages
  locales.forEach((locale) => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });
    routes.push({
      url: `${baseUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
    routes.push({
      url: `${baseUrl}/${locale}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
    routes.push({
      url: `${baseUrl}/${locale}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    });
    routes.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Blog posts
  locales.forEach((locale) => {
    if (allBlogs[locale]) {
      allBlogs[locale].forEach((post) => {
        // Match the pattern used in blog links: encodeURIComponent preserves Arabic characters
        const slug = `${post.id}-${encodeURIComponent(post.title.replace(/\s+/g, '-'))}`;
        routes.push({
          url: `${baseUrl}/${locale}/blogs/${slug}`,
          lastModified: post.date ? new Date(post.date) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });
    }
  });

  // Service pages
  locales.forEach((locale) => {
    if (allServices[locale]) {
      allServices[locale].forEach((service) => {
        // Match the pattern: encodeURIComponent preserves Arabic characters
        const slug = `${service.id}-${encodeURIComponent(service.title.replace(/\s+/g, '-'))}`;
        routes.push({
          url: `${baseUrl}/${locale}/services/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      });
    }
  });

  return routes;
}

