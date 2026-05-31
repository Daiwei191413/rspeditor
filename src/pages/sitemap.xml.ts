import type { APIRoute } from 'astro';
import { allTags, resources } from '../data/resources';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString() ?? 'https://rspeditor.com/';
  const staticPaths = ['/', '/ai-photo-editing-prompts/', '/capcut-templates/', '/search/', '/about/', '/contact/', '/legal/privacy-policy/', '/legal/disclaimer/', '/legal/dmca/', '/legal/terms/'];
  const urls = [
    ...staticPaths,
    ...resources.map((resource) => resource.type === 'prompt' ? `/ai-photo-editing-prompts/${resource.slug}/` : `/capcut-templates/${resource.slug}/`),
    ...allTags.map((tag) => `/tag/${tag}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${new URL(path, base).toString()}</loc><changefreq>weekly</changefreq><priority>${path === '/' ? '1.0' : '0.7'}</priority></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
