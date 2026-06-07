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

function countResourceCards(markup) {
  return (markup.match(/data-pagefind-ignore/g) ?? []).length;
}

const home = html('');
assertHasSchema(home, 'WebSite', 'home');
assertHasSchema(home, 'Organization', 'home');
assert.match(home, /<img[^>]+alt="[^"]+"/i, 'home should render at least one optimized visual image');
assert.match(home, /Browse AI Prompts/i, 'hero should offer a primary prompt browsing CTA');
assert.match(home, /Explore CapCut Templates/i, 'hero should offer a CapCut CTA');
assert.match(home, /Free to copy/i, 'hero should show free-to-copy trust note');
assert.match(home, /No login required/i, 'hero should show no-login trust note');
assert.match(home, /Updated weekly/i, 'hero should show freshness trust note');
assert.match(home, /data-toast/i, 'home should include a global toast region');
assert.match(home, /Trending/i, 'home should expose discovery badges');
assert.match(home, /flex-wrap/i, 'home tags should wrap cleanly with reduced chip count');
assert.match(home, /data-visual-variant="clean"/i, 'first three prompt cards should opt into clean visual pilot');
assert.match(home, /data-clean-preview/i, 'clean prompt cards should render simplified preview treatment');
assert.equal(countResourceCards(home), 12, 'home should stay focused with 6 prompt cards and 6 CapCut cards');

const promptListing = html('ai-photo-editing-prompts');
assert.equal(countResourceCards(promptListing), 16, 'AI Prompts listing should show 16 curated popular prompts');
assert.match(promptListing, /Showing 16 popular prompts/i, 'AI Prompts listing should explain curated scope');
assert.match(promptListing, /Coastal Charm Fox Spirit Magazine Cover AI Photo Editing Prompt/i, 'AI Prompts listing should include selected 16th prompt');
assert.doesNotMatch(promptListing, /Double Exposure Travel AI Photo Editing Prompt/i, 'AI Prompts listing should hide non-curated prompt cards for now');

const capcutListing = html('capcut-templates');
assert.equal(countResourceCards(capcutListing), 14, 'CapCut listing should show 14 curated popular templates');
assert.match(capcutListing, /Showing 14 popular templates/i, 'CapCut listing should explain curated scope');
assert.match(capcutListing, /Bike Rider CapCut Template/i, 'CapCut listing should include selected 13th template');
assert.doesNotMatch(capcutListing, /Lyrics Reaction CapCut Template/i, 'CapCut listing should hide non-curated templates for now');

const promptPage = html('ai-photo-editing-prompts/cinematic-sunset-boy');
assert.match(promptPage, /<img[^>]+alt="Cinematic portrait style inspiration photo for sunset boy AI editing prompt"/i, 'prompt detail should render preview image with descriptive alt');
assert.match(promptPage, /By RSP Editor Team/i, 'prompt detail should show author');
assert.match(promptPage, /Updated/i, 'prompt detail should show updated date');
assertHasSchema(promptPage, 'Article', 'prompt detail');
assert.match(promptPage, /og:image" content="https:\/\/rspeditor\.com\/images\/photos\/cinematic-sunset-boy-v2\.webp"/i, 'prompt detail should use resource image as OG image');

const capcutPage = html('capcut-templates/hindi-song-beat-sync-2026');
assert.match(capcutPage, /<img[^>]+alt="Hindi Song Beat Sync Viral CapCut Template thumbnail"/i, 'capcut detail should render thumbnail image with descriptive alt');
assert.match(capcutPage, /By RSP Editor Team/i, 'capcut detail should show author');
assertHasSchema(capcutPage, 'Article', 'capcut detail');

const about = html('about');
for (const text of ['Our Mission', 'Editorial Standards', 'Copyright and DMCA Policy', 'How We Create AI Photo Editing Prompts']) {
  assert.match(about, new RegExp(text, 'i'), `about page should include ${text}`);
}

console.log('SEO visual/E-E-A-T checks passed');
