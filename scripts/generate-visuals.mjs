import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();

const promptImages = [
  ['prompts/cinematic-sunset-boy', 'Cinematic Sunset', '#f97316', '#0891b2'],
  ['prompts/cinematic-sunset-girl', 'Golden Hour', '#f59e0b', '#db2777'],
  ['prompts/attitude-boy', 'Attitude Edit', '#111827', '#22d3ee'],
  ['prompts/cute-couple', 'Couple Prompt', '#ec4899', '#8b5cf6'],
  ['prompts/birthday-poster', 'Birthday Poster', '#facc15', '#f97316'],
  ['prompts/cricket-stadium', 'Cricket Edit', '#16a34a', '#0ea5e9'],
  ['prompts/anime-inspired', 'Anime Inspired', '#a855f7', '#38bdf8'],
  ['prompts/instagram-dp', 'Instagram DP', '#e11d48', '#f97316'],
  ['prompts/viral-reels-cover', 'Reels Cover', '#06b6d4', '#d946ef'],
  ['prompts/lofi-dusk-filter', 'Lofi Dusk', '#6366f1', '#f472b6'],
  ['prompts/travel-double-exposure', 'Travel Double Exposure', '#0f766e', '#84cc16'],
  ['prompts/profile-avatar', 'Profile Avatar', '#2563eb', '#14b8a6'],
];

const capcutImages = [
  ['capcut/hindi-song-beat-sync-2026', 'Hindi Beat Sync', '#ef4444', '#f59e0b'],
  ['capcut/punjabi-song-reels-2026', 'Punjabi Reels', '#f97316', '#22c55e'],
  ['capcut/love-beat-sync-2026', 'Love Beat Sync', '#ec4899', '#fb7185'],
  ['capcut/attitude-reels-2026', 'Attitude Reels', '#020617', '#38bdf8'],
  ['capcut/birthday-video-2026', 'Birthday Video', '#facc15', '#a855f7'],
  ['capcut/photo-beat-sync-2026', 'Photo Beat Sync', '#0891b2', '#d946ef'],
];

function svg(title, c1, c2, kind) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
    <radialGradient id="r" cx="72%" cy="24%" r="50%"><stop offset="0" stop-color="rgba(255,255,255,.55)"/><stop offset="1" stop-color="rgba(255,255,255,0)"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#020617" flood-opacity=".35"/></filter>
  </defs>
  <rect width="1200" height="675" fill="#020617"/>
  <rect x="38" y="38" width="1124" height="599" rx="54" fill="url(#g)"/>
  <rect x="38" y="38" width="1124" height="599" rx="54" fill="url(#r)"/>
  <circle cx="980" cy="132" r="82" fill="rgba(255,255,255,.24)"/>
  <circle cx="1018" cy="170" r="26" fill="rgba(255,255,255,.36)"/>
  <g filter="url(#shadow)">
    <rect x="110" y="118" width="330" height="440" rx="42" fill="rgba(15,23,42,.72)" stroke="rgba(255,255,255,.3)"/>
    <circle cx="275" cy="252" r="76" fill="rgba(255,255,255,.82)"/>
    <path d="M150 505c36-104 220-104 250 0" fill="rgba(255,255,255,.82)"/>
  </g>
  <g fill="rgba(255,255,255,.92)">
    <text x="500" y="218" font-family="Inter,Arial,sans-serif" font-size="34" font-weight="800" letter-spacing="3">RSP EDITOR</text>
    <text x="500" y="318" font-family="Inter,Arial,sans-serif" font-size="72" font-weight="900">${title}</text>
    <text x="500" y="390" font-family="Inter,Arial,sans-serif" font-size="30" font-weight="700">${kind}</text>
  </g>
  <g transform="translate(505 438)" fill="none" stroke="rgba(255,255,255,.78)" stroke-width="10" stroke-linecap="round">
    <path d="M0 40h260"/><path d="M45 0h170"/><path d="M95 80h70"/>
  </g>
</svg>`;
}

for (const [name, title, c1, c2] of [...promptImages.map(x => [...x, 'AI photo editing prompt preview']), ...capcutImages.map(x => [...x, 'CapCut template thumbnail'])]) {
  const file = join(root, 'public/images', `${name}.svg`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, svg(title, c1, c2, c2));
}
console.log(`Generated ${promptImages.length + capcutImages.length} safe SVG visuals`);
