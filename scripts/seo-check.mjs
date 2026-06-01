import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const dist = join(root, 'dist');

function html(path) {
  const file = join(dist, path, 'index.html');
  assert.ok(existsSync(file), `Missing built page: ${file}`);
  return readFileSync(file, 'utf8');
}

function jsonLdDocuments(markup) {
  const docs = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = re.exec(markup))) {
    const parsed = JSON.parse(match[1]);
    if (Array.isArray(parsed)) docs.push(...parsed);
    else docs.push(parsed);
  }
  return docs;
}

function assertHasSchema(markup, type, page) {
  const docs = jsonLdDocuments(markup);
  assert.ok(docs.some((doc) => doc['@type'] === type), `${page} should include ${type} schema`);
}

const home = html('');
assertHasSchema(home, 'WebSite', 'home');
assertHasSchema(home, 'Organization', 'home');
assert.match(home, /<img[^>]+alt="[^"]+"/i, 'home should render at least one optimized visual image');

const promptPage = html('ai-photo-editing-prompts/cinematic-sunset-boy');
assert.match(promptPage, /<img[^>]+alt="Cinematic Sunset Boy AI Photo Editing Prompt preview"/i, 'prompt detail should render preview image with descriptive alt');
assert.match(promptPage, /By RSP Editor Team/i, 'prompt detail should show author');
assert.match(promptPage, /Updated/i, 'prompt detail should show updated date');
assertHasSchema(promptPage, 'Article', 'prompt detail');
assert.match(promptPage, /og:image" content="https:\/\/rspeditor\.com\/images\/prompts\/cinematic-sunset-boy\.svg"/i, 'prompt detail should use resource image as OG image');

const capcutPage = html('capcut-templates/hindi-song-beat-sync-2026');
assert.match(capcutPage, /<img[^>]+alt="Hindi Song Beat Sync Viral CapCut Template thumbnail"/i, 'capcut detail should render thumbnail image with descriptive alt');
assert.match(capcutPage, /By RSP Editor Team/i, 'capcut detail should show author');
assertHasSchema(capcutPage, 'Article', 'capcut detail');

const about = html('about');
for (const text of ['Our Mission', 'Editorial Standards', 'Copyright and DMCA Policy', 'How We Create AI Photo Editing Prompts']) {
  assert.match(about, new RegExp(text, 'i'), `about page should include ${text}`);
}

console.log('SEO visual/E-E-A-T checks passed');
