export type Resource =
  | { type: 'prompt'; slug: string; title: string; description: string; tags: string[]; tool: string; bestFor: string[]; prompt: string }
  | { type: 'capcut'; slug: string; title: string; description: string; tags: string[]; duration: string; assetsNeeded: string; bestFor: string[]; templateUrl: string };

export const resources = [
  {
    "type": "prompt",
    "slug": "cinematic-sunset-boy",
    "title": "Cinematic Sunset Boy AI Photo Editing Prompt",
    "description": "Create a warm cinematic sunset portrait for Instagram DP and Reels covers.",
    "tags": [
      "cinematic",
      "sunset",
      "boy",
      "instagram-dp",
      "trending"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a cinematic sunset boy style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "cinematic-sunset-girl",
    "title": "Cinematic Sunset Girl AI Photo Editing Prompt",
    "description": "Turn a simple selfie into a soft golden hour cinematic portrait.",
    "tags": [
      "cinematic",
      "sunset",
      "girl",
      "profile-photo"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a cinematic sunset girl style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "lofi-dusk-filter",
    "title": "Lofi Dusk Filter AI Photo Editing Prompt",
    "description": "Generate the popular glowing lofi dusk filter look for social posts.",
    "tags": [
      "lofi",
      "dusk",
      "instagram",
      "trending"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a lofi dusk filter style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "double-exposure-travel",
    "title": "Double Exposure Travel AI Photo Editing Prompt",
    "description": "Blend portrait and travel landscape into a viral double exposure image.",
    "tags": [
      "double-exposure",
      "travel",
      "reels-cover"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a double exposure travel style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "three-layer-portrait",
    "title": "3 Layer AI Photo Editing Prompt",
    "description": "Create the viral three-layer portrait composition for boys, girls, and couples.",
    "tags": [
      "3-layer",
      "portrait",
      "trending"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a 3 layer style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "five-layer-aesthetic",
    "title": "5 Layer Aesthetic AI Photo Editing Prompt",
    "description": "Build a multi-layer aesthetic portrait poster with clean depth and style.",
    "tags": [
      "5-layer",
      "aesthetic",
      "poster"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a 5 layer aesthetic style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "horror-girlfriend",
    "title": "Horror Girlfriend AI Photo Editing Prompt",
    "description": "Create a scary romantic ghost girlfriend style AI image safely.",
    "tags": [
      "horror",
      "girlfriend",
      "cinematic"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a horror girlfriend style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "cute-couple",
    "title": "Cute Couple AI Photo Editing Prompt",
    "description": "Make a romantic couple portrait for status, DP, and reels covers.",
    "tags": [
      "couple",
      "love",
      "whatsapp-status"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a cute couple style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "cricket-stadium",
    "title": "Cricket Stadium AI Photo Editing Prompt",
    "description": "Place yourself inside a dramatic cricket stadium fan poster.",
    "tags": [
      "cricket",
      "stadium",
      "sports",
      "india"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a cricket stadium style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "chibi-cartoon",
    "title": "Chibi Cartoon AI Photo Editing Prompt",
    "description": "Convert your portrait into a cute chibi cartoon style image.",
    "tags": [
      "chibi",
      "cartoon",
      "avatar"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a chibi cartoon style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "miniature-figure",
    "title": "Miniature AI Photo Editing Prompt",
    "description": "Create a viral miniature toy figure version of your photo.",
    "tags": [
      "miniature",
      "toy",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a miniature style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "instagram-milestone-poster",
    "title": "Instagram Milestone Poster AI Prompt",
    "description": "Design a follower milestone poster for Instagram and YouTube creators.",
    "tags": [
      "instagram",
      "milestone",
      "poster"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a instagram milestone poster ai prompt style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "hand-drawing-crayon",
    "title": "Hand Drawing Crayon Style AI Prompt",
    "description": "Generate a handmade crayon drawing portrait style for social media.",
    "tags": [
      "drawing",
      "crayon",
      "handmade"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a hand drawing crayon style ai prompt style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "birthday-poster",
    "title": "Birthday Poster AI Photo Editing Prompt",
    "description": "Create a birthday poster portrait with balloons, lights, and stylish typography.",
    "tags": [
      "birthday",
      "poster",
      "celebration"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a birthday poster style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "attitude-boy",
    "title": "Attitude Boy AI Photo Editing Prompt",
    "description": "Make a bold attitude boy portrait with cinematic lighting.",
    "tags": [
      "attitude",
      "boy",
      "instagram-dp"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a attitude boy style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "attitude-girl",
    "title": "Attitude Girl AI Photo Editing Prompt",
    "description": "Create a confident attitude girl portrait for profile photos.",
    "tags": [
      "attitude",
      "girl",
      "profile-photo"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a attitude girl style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "bike-rider",
    "title": "Bike Rider AI Photo Editing Prompt",
    "description": "Create a dramatic bike rider poster for reels and DP.",
    "tags": [
      "bike",
      "rider",
      "attitude"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a bike rider style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "gym-boy",
    "title": "Gym Boy AI Photo Editing Prompt",
    "description": "Generate a fitness transformation style gym portrait.",
    "tags": [
      "gym",
      "fitness",
      "boy"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a gym boy style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "royal-king",
    "title": "Royal King AI Photo Editing Prompt",
    "description": "Turn a portrait into a royal king cinematic poster.",
    "tags": [
      "royal",
      "king",
      "poster"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a royal king style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "wedding-couple",
    "title": "Wedding Couple AI Photo Editing Prompt",
    "description": "Create a soft wedding couple portrait with realistic lighting.",
    "tags": [
      "wedding",
      "couple",
      "love"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a wedding couple style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "rainy-night-cinematic",
    "title": "Rainy Night Cinematic AI Prompt",
    "description": "Make a moody rainy night portrait with neon reflections.",
    "tags": [
      "rain",
      "night",
      "cinematic"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a rainy night cinematic ai prompt style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "neon-street",
    "title": "Neon Street AI Photo Editing Prompt",
    "description": "Create a cyber neon street portrait for Instagram.",
    "tags": [
      "neon",
      "street",
      "cyberpunk"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a neon street style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "luxury-car",
    "title": "Luxury Car AI Photo Editing Prompt",
    "description": "Place yourself beside a luxury car with cinematic city lighting.",
    "tags": [
      "car",
      "luxury",
      "attitude"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a luxury car style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "eid-mubarak-poster",
    "title": "Eid Mubarak AI Photo Editing Prompt",
    "description": "Create an Eid Mubarak festival poster with elegant details.",
    "tags": [
      "eid",
      "festival",
      "poster"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a eid mubarak style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "anime-portrait",
    "title": "Anime Portrait AI Photo Editing Prompt",
    "description": "Convert a selfie into an anime-inspired portrait without copying protected characters.",
    "tags": [
      "anime",
      "portrait",
      "avatar"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a anime portrait style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "studio-headshot",
    "title": "Studio Headshot AI Photo Editing Prompt",
    "description": "Create a clean professional studio headshot from a casual photo.",
    "tags": [
      "headshot",
      "studio",
      "professional"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a studio headshot style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "cinematic-sunset-boy-v2",
    "title": "Cinematic Sunset Boy Viral AI Photo Editing Prompt",
    "description": "Create a warm cinematic sunset portrait for Instagram DP and Reels covers. Includes sharper mobile-friendly details.",
    "tags": [
      "cinematic",
      "sunset",
      "boy",
      "instagram-dp",
      "trending",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a cinematic sunset boy viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "cinematic-sunset-girl-v2",
    "title": "Cinematic Sunset Girl Viral AI Photo Editing Prompt",
    "description": "Turn a simple selfie into a soft golden hour cinematic portrait. Includes sharper mobile-friendly details.",
    "tags": [
      "cinematic",
      "sunset",
      "girl",
      "profile-photo",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a cinematic sunset girl viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "lofi-dusk-filter-v2",
    "title": "Lofi Dusk Filter Viral AI Photo Editing Prompt",
    "description": "Generate the popular glowing lofi dusk filter look for social posts. Includes sharper mobile-friendly details.",
    "tags": [
      "lofi",
      "dusk",
      "instagram",
      "trending",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a lofi dusk filter viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "double-exposure-travel-v2",
    "title": "Double Exposure Travel Viral AI Photo Editing Prompt",
    "description": "Blend portrait and travel landscape into a viral double exposure image. Includes sharper mobile-friendly details.",
    "tags": [
      "double-exposure",
      "travel",
      "reels-cover",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a double exposure travel viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "three-layer-portrait-v2",
    "title": "3 Layer Viral AI Photo Editing Prompt",
    "description": "Create the viral three-layer portrait composition for boys, girls, and couples. Includes sharper mobile-friendly details.",
    "tags": [
      "3-layer",
      "portrait",
      "trending",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a 3 layer viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "five-layer-aesthetic-v2",
    "title": "5 Layer Aesthetic Viral AI Photo Editing Prompt",
    "description": "Build a multi-layer aesthetic portrait poster with clean depth and style. Includes sharper mobile-friendly details.",
    "tags": [
      "5-layer",
      "aesthetic",
      "poster",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a 5 layer aesthetic viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "horror-girlfriend-v2",
    "title": "Horror Girlfriend Viral AI Photo Editing Prompt",
    "description": "Create a scary romantic ghost girlfriend style AI image safely. Includes sharper mobile-friendly details.",
    "tags": [
      "horror",
      "girlfriend",
      "cinematic",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a horror girlfriend viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "cute-couple-v2",
    "title": "Cute Couple Viral AI Photo Editing Prompt",
    "description": "Make a romantic couple portrait for status, DP, and reels covers. Includes sharper mobile-friendly details.",
    "tags": [
      "couple",
      "love",
      "whatsapp-status",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a cute couple viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "cricket-stadium-v2",
    "title": "Cricket Stadium Viral AI Photo Editing Prompt",
    "description": "Place yourself inside a dramatic cricket stadium fan poster. Includes sharper mobile-friendly details.",
    "tags": [
      "cricket",
      "stadium",
      "sports",
      "india",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a cricket stadium viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "chibi-cartoon-v2",
    "title": "Chibi Cartoon Viral AI Photo Editing Prompt",
    "description": "Convert your portrait into a cute chibi cartoon style image. Includes sharper mobile-friendly details.",
    "tags": [
      "chibi",
      "cartoon",
      "avatar",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a chibi cartoon viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "miniature-figure-v2",
    "title": "Miniature Viral AI Photo Editing Prompt",
    "description": "Create a viral miniature toy figure version of your photo. Includes sharper mobile-friendly details.",
    "tags": [
      "miniature",
      "toy",
      "viral",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a miniature viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "instagram-milestone-poster-v2",
    "title": "Instagram Milestone Poster Viral AI Prompt",
    "description": "Design a follower milestone poster for Instagram and YouTube creators. Includes sharper mobile-friendly details.",
    "tags": [
      "instagram",
      "milestone",
      "poster",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a instagram milestone poster viral ai prompt style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "hand-drawing-crayon-v2",
    "title": "Hand Drawing Crayon Style Viral AI Prompt",
    "description": "Generate a handmade crayon drawing portrait style for social media. Includes sharper mobile-friendly details.",
    "tags": [
      "drawing",
      "crayon",
      "handmade",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a hand drawing crayon style viral ai prompt style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "birthday-poster-v2",
    "title": "Birthday Poster Viral AI Photo Editing Prompt",
    "description": "Create a birthday poster portrait with balloons, lights, and stylish typography. Includes sharper mobile-friendly details.",
    "tags": [
      "birthday",
      "poster",
      "celebration",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a birthday poster viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "attitude-boy-v2",
    "title": "Attitude Boy Viral AI Photo Editing Prompt",
    "description": "Make a bold attitude boy portrait with cinematic lighting. Includes sharper mobile-friendly details.",
    "tags": [
      "attitude",
      "boy",
      "instagram-dp",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a attitude boy viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "attitude-girl-v2",
    "title": "Attitude Girl Viral AI Photo Editing Prompt",
    "description": "Create a confident attitude girl portrait for profile photos. Includes sharper mobile-friendly details.",
    "tags": [
      "attitude",
      "girl",
      "profile-photo",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a attitude girl viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "bike-rider-v2",
    "title": "Bike Rider Viral AI Photo Editing Prompt",
    "description": "Create a dramatic bike rider poster for reels and DP. Includes sharper mobile-friendly details.",
    "tags": [
      "bike",
      "rider",
      "attitude",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a bike rider viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "gym-boy-v2",
    "title": "Gym Boy Viral AI Photo Editing Prompt",
    "description": "Generate a fitness transformation style gym portrait. Includes sharper mobile-friendly details.",
    "tags": [
      "gym",
      "fitness",
      "boy",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a gym boy viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "royal-king-v2",
    "title": "Royal King Viral AI Photo Editing Prompt",
    "description": "Turn a portrait into a royal king cinematic poster. Includes sharper mobile-friendly details.",
    "tags": [
      "royal",
      "king",
      "poster",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a royal king viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "wedding-couple-v2",
    "title": "Wedding Couple Viral AI Photo Editing Prompt",
    "description": "Create a soft wedding couple portrait with realistic lighting. Includes sharper mobile-friendly details.",
    "tags": [
      "wedding",
      "couple",
      "love",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a wedding couple viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "rainy-night-cinematic-v2",
    "title": "Rainy Night Cinematic Viral AI Prompt",
    "description": "Make a moody rainy night portrait with neon reflections. Includes sharper mobile-friendly details.",
    "tags": [
      "rain",
      "night",
      "cinematic",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a rainy night cinematic viral ai prompt style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "neon-street-v2",
    "title": "Neon Street Viral AI Photo Editing Prompt",
    "description": "Create a cyber neon street portrait for Instagram. Includes sharper mobile-friendly details.",
    "tags": [
      "neon",
      "street",
      "cyberpunk",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a neon street viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "luxury-car-v2",
    "title": "Luxury Car Viral AI Photo Editing Prompt",
    "description": "Place yourself beside a luxury car with cinematic city lighting. Includes sharper mobile-friendly details.",
    "tags": [
      "car",
      "luxury",
      "attitude",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a luxury car viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "prompt",
    "slug": "eid-mubarak-poster-v2",
    "title": "Eid Mubarak Viral AI Photo Editing Prompt",
    "description": "Create an Eid Mubarak festival poster with elegant details. Includes sharper mobile-friendly details.",
    "tags": [
      "eid",
      "festival",
      "poster",
      "viral"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Edit my uploaded photo into a eid mubarak viral style image. Keep my face identity realistic and natural. Use cinematic mobile-friendly lighting, sharp facial details, clean background separation, realistic skin texture, and social-media-ready composition. Make it suitable for Instagram DP, Reels cover, YouTube Shorts thumbnail, and WhatsApp status. Avoid changing my facial features too much. Output a high-resolution vertical 4:5 portrait."
  },
  {
    "type": "capcut",
    "slug": "hindi-song-beat-sync",
    "title": "Hindi Song Beat Sync CapCut Template",
    "description": "A fast beat-sync template for Hindi song reels and shorts.",
    "tags": [
      "hindi-song",
      "beat-sync",
      "trending"
    ],
    "duration": "12s",
    "assetsNeeded": "8 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "punjabi-song-reels",
    "title": "Punjabi Song CapCut Template",
    "description": "High-energy Punjabi song template for attitude reels.",
    "tags": [
      "punjabi-song",
      "attitude",
      "reels"
    ],
    "duration": "14s",
    "assetsNeeded": "10 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "love-beat-sync",
    "title": "Love Beat Sync CapCut Template",
    "description": "Romantic beat sync edit for couples and love status.",
    "tags": [
      "love",
      "couple",
      "beat-sync"
    ],
    "duration": "15s",
    "assetsNeeded": "8 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "attitude-reels",
    "title": "Attitude Reels CapCut Template",
    "description": "Bold attitude template with shake and flash transitions.",
    "tags": [
      "attitude",
      "reels",
      "shake-effect"
    ],
    "duration": "11s",
    "assetsNeeded": "6 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "birthday-video",
    "title": "Birthday CapCut Template",
    "description": "Birthday video template for friends, family, and status posts.",
    "tags": [
      "birthday",
      "celebration",
      "status"
    ],
    "duration": "18s",
    "assetsNeeded": "12 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "photo-beat-sync",
    "title": "Photo Beat Sync CapCut Template",
    "description": "Simple photo beat sync edit for any trending audio.",
    "tags": [
      "photo",
      "beat-sync",
      "trending"
    ],
    "duration": "10s",
    "assetsNeeded": "7 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "slow-motion",
    "title": "Slow Motion CapCut Template",
    "description": "Smooth slow motion template for cinematic clips.",
    "tags": [
      "slow-motion",
      "cinematic",
      "video"
    ],
    "duration": "13s",
    "assetsNeeded": "3 clips",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "sad-song",
    "title": "Sad Song CapCut Template",
    "description": "Emotional sad song template with lyric timing.",
    "tags": [
      "sad-song",
      "lyrics",
      "status"
    ],
    "duration": "16s",
    "assetsNeeded": "9 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "friendship",
    "title": "Friendship CapCut Template",
    "description": "Friendship memories edit for reels and WhatsApp status.",
    "tags": [
      "friendship",
      "memories",
      "status"
    ],
    "duration": "20s",
    "assetsNeeded": "15 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "couple-template",
    "title": "Couple CapCut Template",
    "description": "Cute couple transition template for love reels.",
    "tags": [
      "couple",
      "love",
      "transition"
    ],
    "duration": "12s",
    "assetsNeeded": "8 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "travel-reels",
    "title": "Travel Reels CapCut Template",
    "description": "Travel montage template with cinematic transitions.",
    "tags": [
      "travel",
      "montage",
      "reels"
    ],
    "duration": "17s",
    "assetsNeeded": "12 clips",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "cricket-fan",
    "title": "Cricket CapCut Template",
    "description": "Cricket fan edit template for match days and IPL posts.",
    "tags": [
      "cricket",
      "sports",
      "india"
    ],
    "duration": "13s",
    "assetsNeeded": "8 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "bike-rider-template",
    "title": "Bike Rider CapCut Template",
    "description": "Bike rider attitude edit with speed ramp feel.",
    "tags": [
      "bike",
      "rider",
      "attitude"
    ],
    "duration": "11s",
    "assetsNeeded": "5 clips",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "lyrics-reaction",
    "title": "Trending Lyrics CapCut Template",
    "description": "Lyric reaction template for viral hook sections.",
    "tags": [
      "lyrics",
      "reaction",
      "viral"
    ],
    "duration": "15s",
    "assetsNeeded": "7 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "blur-effect",
    "title": "Blur Effect CapCut Template",
    "description": "Clean blur transition template for profile edits.",
    "tags": [
      "blur-effect",
      "transition",
      "profile"
    ],
    "duration": "10s",
    "assetsNeeded": "6 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "flash-effect",
    "title": "Flash Effect CapCut Template",
    "description": "Fast flash effect edit for energetic reels.",
    "tags": [
      "flash-effect",
      "beat-sync",
      "reels"
    ],
    "duration": "9s",
    "assetsNeeded": "8 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "three-d-zoom",
    "title": "3D Zoom CapCut Template",
    "description": "Classic 3D zoom template for portrait photos.",
    "tags": [
      "3d-zoom",
      "photo",
      "classic"
    ],
    "duration": "12s",
    "assetsNeeded": "6 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "smooth-transition",
    "title": "Smooth Transition CapCut Template",
    "description": "Smooth photo transition template for daily reels.",
    "tags": [
      "smooth-transition",
      "reels",
      "photo"
    ],
    "duration": "14s",
    "assetsNeeded": "10 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "shake-effect",
    "title": "Shake Effect CapCut Template",
    "description": "Shake transition template for attitude and rap songs.",
    "tags": [
      "shake-effect",
      "attitude",
      "rap"
    ],
    "duration": "10s",
    "assetsNeeded": "7 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "mini-vlog",
    "title": "Mini Vlog CapCut Template",
    "description": "Mini vlog template for daily moments and lifestyle content.",
    "tags": [
      "mini-vlog",
      "daily",
      "lifestyle"
    ],
    "duration": "22s",
    "assetsNeeded": "10 clips",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "hindi-song-beat-sync-2026",
    "title": "Hindi Song Beat Sync Viral CapCut Template",
    "description": "A fast beat-sync template for Hindi song reels and shorts. Optimized for 2026 reels trends.",
    "tags": [
      "hindi-song",
      "beat-sync",
      "trending",
      "2026"
    ],
    "duration": "12s",
    "assetsNeeded": "8 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "punjabi-song-reels-2026",
    "title": "Punjabi Song Viral CapCut Template",
    "description": "High-energy Punjabi song template for attitude reels. Optimized for 2026 reels trends.",
    "tags": [
      "punjabi-song",
      "attitude",
      "reels",
      "2026"
    ],
    "duration": "14s",
    "assetsNeeded": "10 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "love-beat-sync-2026",
    "title": "Love Beat Sync Viral CapCut Template",
    "description": "Romantic beat sync edit for couples and love status. Optimized for 2026 reels trends.",
    "tags": [
      "love",
      "couple",
      "beat-sync",
      "2026"
    ],
    "duration": "15s",
    "assetsNeeded": "8 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "attitude-reels-2026",
    "title": "Attitude Reels Viral CapCut Template",
    "description": "Bold attitude template with shake and flash transitions. Optimized for 2026 reels trends.",
    "tags": [
      "attitude",
      "reels",
      "shake-effect",
      "2026"
    ],
    "duration": "11s",
    "assetsNeeded": "6 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "birthday-video-2026",
    "title": "Birthday Viral CapCut Template",
    "description": "Birthday video template for friends, family, and status posts. Optimized for 2026 reels trends.",
    "tags": [
      "birthday",
      "celebration",
      "status",
      "2026"
    ],
    "duration": "18s",
    "assetsNeeded": "12 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "photo-beat-sync-2026",
    "title": "Photo Beat Sync Viral CapCut Template",
    "description": "Simple photo beat sync edit for any trending audio. Optimized for 2026 reels trends.",
    "tags": [
      "photo",
      "beat-sync",
      "trending",
      "2026"
    ],
    "duration": "10s",
    "assetsNeeded": "7 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "slow-motion-2026",
    "title": "Slow Motion Viral CapCut Template",
    "description": "Smooth slow motion template for cinematic clips. Optimized for 2026 reels trends.",
    "tags": [
      "slow-motion",
      "cinematic",
      "video",
      "2026"
    ],
    "duration": "13s",
    "assetsNeeded": "3 clips",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "sad-song-2026",
    "title": "Sad Song Viral CapCut Template",
    "description": "Emotional sad song template with lyric timing. Optimized for 2026 reels trends.",
    "tags": [
      "sad-song",
      "lyrics",
      "status",
      "2026"
    ],
    "duration": "16s",
    "assetsNeeded": "9 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "friendship-2026",
    "title": "Friendship Viral CapCut Template",
    "description": "Friendship memories edit for reels and WhatsApp status. Optimized for 2026 reels trends.",
    "tags": [
      "friendship",
      "memories",
      "status",
      "2026"
    ],
    "duration": "20s",
    "assetsNeeded": "15 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  },
  {
    "type": "capcut",
    "slug": "couple-template-2026",
    "title": "Couple Viral CapCut Template",
    "description": "Cute couple transition template for love reels. Optimized for 2026 reels trends.",
    "tags": [
      "couple",
      "love",
      "transition",
      "2026"
    ],
    "duration": "12s",
    "assetsNeeded": "8 photos",
    "bestFor": [
      "Instagram Reels",
      "YouTube Shorts",
      "WhatsApp status"
    ],
    "templateUrl": "https://www.capcut.com/templates"
  }
] satisfies Resource[];
export const prompts = resources.filter((item) => item.type === 'prompt');
export const capcuts = resources.filter((item) => item.type === 'capcut');
export const allTags = Array.from(new Set(resources.flatMap((item) => item.tags))).sort();
export const getBySlug = (type: Resource['type'], slug: string) => resources.find((item) => item.type === type && item.slug === slug);
export const getRelated = (resource: Resource, limit = 6) => resources.filter((item) => item.slug !== resource.slug && item.tags.some((tag) => resource.tags.includes(tag))).slice(0, limit);
