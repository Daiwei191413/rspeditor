export type Resource =
  | { type: 'prompt'; slug: string; title: string; description: string; tags: string[]; tool: string; bestFor: string[]; prompt: string; image?: string; imageAlt?: string; imagePosition?: string; ogImage?: string; author?: string; datePublished?: string; dateModified?: string; badge?: 'New' | 'Trending' | 'Popular' | 'Free' }
  | { type: 'capcut'; slug: string; title: string; description: string; tags: string[]; duration: string; assetsNeeded: string; bestFor: string[]; templateUrl: string; image?: string; imageAlt?: string; imagePosition?: string; ogImage?: string; author?: string; datePublished?: string; dateModified?: string; badge?: 'New' | 'Trending' | 'Popular' | 'Free' };

const rawResources = [
  {
    "type": "prompt",
    "slug": "cinematic-sunset-boy",
    "image": "/images/photos/cinematic-sunset-boy-v2.webp",
    "imageAlt": "Cinematic portrait style inspiration photo for sunset boy AI editing prompt",
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
    "prompt": "Transform my uploaded photo into a cinematic sunset portrait. Place me standing on a rooftop or open field with a dramatic golden-orange sunset sky behind. Keep my face 100% realistic — same features, same skin tone, no AI distortion. Add warm golden hour side-lighting on my face, subtle lens flare from the sun, slight depth-of-field blur on the background, and a faint orange color grade across the whole image. My outfit should look stylish and modern. Composition: vertical 4:5, subject centered, sky taking up 40% of frame. Final output should look like a professional mobile photography shot, not AI-generated. Resolution: 2048x2560px minimum."
  },
  {
    "type": "prompt",
    "slug": "cinematic-sunset-girl",
    "image": "/images/photos/cinematic-sunset-girl-v2.webp",
    "imageAlt": "Golden hour portrait style inspiration photo for sunset girl AI editing prompt",
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
    "prompt": "Edit my uploaded photo into a soft golden hour girl portrait. Background: blurred city skyline or flower garden with warm sunset tones. Keep my face completely unchanged — same eyes, nose, lips, skin texture. Add soft diffused golden light wrapping around my hair and shoulders, gentle bokeh circles in the background, and a warm peachy-pink color palette. Hair should have natural golden highlights from the backlight. Composition: vertical 4:5, soft vignette edges, subject slightly off-center. Style reference: professional portrait photography with natural light. Output resolution: 2048x2560px, no watermark."
  },
  {
    "type": "prompt",
    "slug": "lofi-dusk-filter",
    "image": "/images/photos/lofi-dusk-filter.webp",
    "imageAlt": "Moody mountain landscape with Milky Way stars for lofi dusk filter AI editing",
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
    "prompt": "Apply a lofi dusk aesthetic to my uploaded photo. Color grading: muted purple-blue shadows, warm desaturated highlights, slight grain texture like analog film. Keep my face 100% unchanged and realistic. Background should have a dreamy soft-focus with purple-pink dusk sky tones bleeding through. Add subtle film grain (ISO 800 look), slightly lifted blacks, and a cool-to-warm split tone. The overall mood should feel nostalgic and calm, like a lo-fi music video thumbnail. Vertical 4:5 crop, centered subject. Output: high-res PNG, minimum 2048x2560px."
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
    "prompt": "Create a double exposure effect combining my uploaded portrait with a travel landscape. My face and upper body silhouette should be clearly visible, with a mountain/ocean/city skyline scene blended inside the silhouette area. Keep my facial features 100% realistic where visible. Use a clean white or dark gradient background outside the silhouette. The landscape inside should have vibrant but not oversaturated colors — think teal water, green mountains, or warm city lights. Add a subtle light leak or gradient overlay where the portrait meets the landscape. Style: editorial magazine double exposure, not cheap Photoshop overlay. Vertical 4:5, high-res 2048x2560px output."
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
    "image": "/images/photos/cute-couple.webp",
    "imageAlt": "Romantic couple portrait style inspiration for AI photo editing",
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
    "prompt": "Edit my uploaded couple photo into a cute romantic portrait. Keep both faces 100% realistic and unchanged. Background: soft pastel bokeh (pink, peach, or lavender tones) or a dreamy garden/cafe setting. Add warm soft lighting that flatters both skin tones equally. Include subtle heart-shaped bokeh or fairy light effects in the background (tasteful, not overdone). Both subjects should have natural skin texture with gentle retouching. Color palette: warm and soft — think rose gold highlights, creamy skin tones. Composition: vertical 4:5, both faces clearly visible and well-lit. Style: professional couple photography, not cartoon or illustration. Output: 2048x2560px."
  },
  {
    "type": "prompt",
    "slug": "cricket-stadium",
    "image": "/images/photos/cricket-stadium.webp",
    "imageAlt": "Cricket stadium atmosphere inspiration for AI photo editing",
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
    "prompt": "Place me in a packed cricket stadium scene. I should be standing in the foreground wearing a cricket jersey or casual sporty outfit, with a massive floodlit stadium behind me full of cheering fans. Keep my face 100% realistic and unchanged. Stadium should have bright white floodlights creating dramatic backlighting, green pitch visible, and colorful crowd in soft bokeh. Add slight lens flare from the stadium lights and a warm evening sky. The mood should feel like a World Cup final night match. Composition: vertical 4:5, me taking up lower 60% of frame, stadium filling the background. Output: photorealistic, 2048x2560px."
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
    "image": "/images/photos/birthday-poster.webp",
    "imageAlt": "Birthday celebration style inspiration for AI poster editing",
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
    "image": "/images/photos/attitude-boy.webp",
    "imageAlt": "Confident male portrait style inspiration for AI photo editing",
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
    "prompt": "Transform my uploaded photo into a dark attitude boy portrait. Background: pitch black or very dark urban wall with subtle smoke/fog effects. Keep my face completely realistic — no changes to features. Lighting: dramatic single-source side light (cool white or ice blue) hitting one side of my face, other side in deep shadow. Add a subtle rim light on hair/shoulders. My expression and pose should look confident and intense. Color grade: high contrast, desaturated with slight teal-orange split toning in shadows/highlights. Add very subtle particle/dust effects in the light beam. Vertical 4:5, cinematic aspect. Output: 2048x2560px, no text overlays."
  },
  {
    "type": "prompt",
    "slug": "spring-bougainvillea-portrait",
    "image": "/images/photos/spring-bougainvillea-portrait.webp",
    "imageAlt": "Smiling woman in a white lace dress holding a pink rose beside blooming spring bougainvillea on a sunlit street",
    "imagePosition": "center 35%",
    "title": "Spring Bougainvillea Portrait AI Photo Editing Prompt",
    "description": "Transform a portrait into a warm spring flower-wall photo with bougainvillea, soft sunlight, and natural facial identity preservation.",
    "tags": [
      "spring",
      "flower-portrait",
      "bougainvillea",
      "profile-photo"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "WhatsApp status"
    ],
    "prompt": "Transform the uploaded portrait into a sweet and airy springtime photo while preserving the person's facial identity, facial features, and natural expression. The person is standing beside a bougainvillea-covered wall, with a sunlit street on the right side and softly blurred trees in the background. Style the scene with fuchsia, pink, and white bougainvillea flowers, warm sunlight, soft natural lighting, subtle rim light, shallow depth of field, warm film-like color grading, and a gentle pastoral spring atmosphere. The subject wears a white lace camisole dress with a loose white shirt, an off-white woven headband, small gold round earrings, and a delicate chain necklace, gently holding a pink rose near the face. Create a realistic high-quality vertical portrait with cinematic composition and natural skin texture."
  },
  {
    "type": "prompt",
    "slug": "bike-rider",
    "image": "/images/photos/bike-rider.webp",
    "imageAlt": "Motorcycle rider style inspiration for AI photo editing",
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
    "image": "/images/photos/gym-boy.webp",
    "imageAlt": "Muscular man doing bicep curl in gym for fitness AI photo editing",
    "imagePosition": "center 25%",
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
    "image": "/images/photos/wedding-couple.webp",
    "imageAlt": "Romantic beach wedding couple at sunset for AI photo editing",
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
    "slug": "neon-cyberpunk-portrait",
    "image": "/images/photos/neon-cyberpunk.webp",
    "imageAlt": "Neon cyberpunk portrait preview with cyan and magenta city lighting",
    "title": "Neon Cyberpunk AI Photo Editing Prompt",
    "description": "Transform your portrait into a futuristic cyberpunk scene with neon lighting.",
    "tags": [
      "cyberpunk",
      "neon",
      "tech",
      "futuristic"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "YouTube Shorts"
    ],
    "prompt": "Transform my uploaded photo into a cyberpunk neon portrait. Place me in a futuristic city street or tech lab environment. Keep my face 100% realistic and unchanged. Lighting: dramatic dual-tone neon — cyan/electric blue from one side, hot magenta/pink from the other. Add holographic UI elements floating near me (subtle, not blocking face), neon sign reflections on wet surfaces, and slight chromatic aberration on edges. My outfit should look techy — dark jacket with subtle LED accents or reflective material. Background: dark urban alley with neon signs, rain-slicked ground reflecting colors, slight fog/haze for depth. Color grade: high contrast, deep blacks, saturated neon highlights. Composition: vertical 4:5, subject centered. Output: 2048x2560px, photorealistic, no text overlays."
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
    "image": "/images/photos/anime-portrait.webp",
    "imageAlt": "Colorful artistic style inspiration for anime portrait AI editing",
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
    "image": "/images/photos/studio-headshot.webp",
    "imageAlt": "Professional studio headshot style inspiration for AI photo editing",
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
    "slug": "luxury-pool-fashion-portrait",
    "image": "/images/photos/luxury-pool-fashion-portrait.webp",
    "imageAlt": "Young blonde woman in a white one-shoulder dress standing in a bright swimming pool with soft blurred lounge chairs in the background",
    "imagePosition": "center top",
    "title": "Luxury Pool Fashion Portrait AI Photo Editing Prompt",
    "description": "Create a photorealistic luxury pool fashion portrait with soft natural light, turquoise water, and magazine-style editorial detail.",
    "tags": [
      "pool",
      "fashion",
      "portrait",
      "photorealistic"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Instagram DP",
      "Reels cover",
      "Fashion portrait"
    ],
    "prompt": "Transform the uploaded portrait into an ultra-realistic luxury pool fashion photograph while preserving the person's facial identity, facial features, skin tone, and natural expression. The subject is standing in clear turquoise swimming pool water with the water level around the waist, creating soft ripples and natural light reflections. Style the subject with fair porcelain-like skin, refined dimensional facial features, bright light-colored eyes, soft natural makeup, and an elegant calm expression looking directly at the camera. Create blonde hair tied high in a ponytail with soft airy bangs, with both arms raised above the head as if adjusting the hair. Outfit: a white ruched fitted mini dress with a one-shoulder design, realistic wet fabric texture, delicate folds, natural drape, and a three-dimensional fabric flower detail on the chest. Environment: a luxury indoor pool with softly blurred lounge chairs in the background, shallow depth of field, creamy bokeh, cinematic natural lighting, subtle volumetric light, high-end fashion magazine editorial style. Use realistic skin texture, lifelike eyes, detailed fabric wrinkles, professional 85mm portrait lens look, f/1.8 aperture, sharp focus on the face, HDR, high dynamic range, photorealistic 8K-quality vertical portrait, fashion magazine cover quality."
  },
  {
    "type": "prompt",
    "slug": "coastal-charm-fox-spirit-cover",
    "image": "/images/photos/coastal-charm-fox-spirit-cover.webp",
    "imageAlt": "Fantasy Coastal Charm magazine cover featuring a red-haired fox spirit woman posing in tropical water at sunset with summer editorial cover text",
    "imagePosition": "center 25%",
    "title": "Coastal Charm Fox Spirit Magazine Cover AI Photo Editing Prompt",
    "description": "Create a glossy fantasy fashion magazine cover with coastal sunset lighting, fox-spirit character styling, swimwear editorial text, and luxury summer typography.",
    "tags": [
      "magazine-cover",
      "fantasy",
      "summer",
      "fashion"
    ],
    "tool": "ChatGPT / Gemini",
    "bestFor": [
      "Magazine cover",
      "Fantasy portrait",
      "Summer editorial"
    ],
    "prompt": "Transform the uploaded portrait into a glossy fantasy fashion magazine cover titled COASTAL CHARM while preserving the person's facial identity, facial features, and natural expression. Create a vertical luxury editorial cover set in shallow tropical water during golden hour, with warm cinematic sunset lighting, turquoise water reflections, dark lush island greenery in the softly blurred background, and a polished high-fashion beach aesthetic. Style the subject as an elegant nine-tailed fox spirit inspired character with vivid red wet hair, soft bangs, large fox-like ears, subtle leafy and gold hair ornaments, glowing wet skin highlights, and a dramatic over-the-shoulder swimwear editorial pose. Outfit: colorful glossy bikini or luxury swimwear in red, magenta, purple, and jewel-tone accents, with realistic wet fabric shine and premium fashion styling. Add refined magazine typography: large cream serif masthead COASTAL CHARM at the top, issue details such as 2024 July and NO.78, side cover lines about SUMMER SPECIAL, ISLAND FANTASY, COVER FEATURE, BEAUTY SECRETS, and ENERGY & SENSE, plus a large bottom headline SUMMER IN HEAT. Use balanced editorial layout, readable serif typography, realistic print magazine composition, shallow depth of field, creamy bokeh, HDR, high dynamic range, ultra-detailed skin and hair texture, cinematic color grading, 8K photorealistic quality, international fashion magazine cover finish."
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
    "image": "/images/photos/capcut-hindi-song.webp",
    "imageAlt": "Music concert atmosphere for Hindi song beat sync video template",
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
    "image": "/images/photos/capcut-punjabi.webp",
    "imageAlt": "Energetic dance vibe for Punjabi song reels template",
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
    "image": "/images/photos/capcut-love.webp",
    "imageAlt": "Romantic mood inspiration for love beat sync video template",
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
    "image": "/images/photos/capcut-attitude.webp",
    "imageAlt": "Confident style inspiration for attitude reels template",
    "imagePosition": "center 30%",
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
    "image": "/images/photos/capcut-birthday.webp",
    "imageAlt": "Birthday celebration mood for video template",
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
    "image": "/images/photos/capcut-photo-sync.webp",
    "imageAlt": "Camera and photography mood for photo beat sync template",
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
    "image": "/images/photos/capcut-slow-motion.webp",
    "imageAlt": "Dynamic motion inspiration for slow motion video template",
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
    "image": "/images/photos/capcut-sad-song.webp",
    "imageAlt": "Moody emotional atmosphere for sad song video template",
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
    "image": "/images/photos/capcut-friendship.webp",
    "imageAlt": "Friends together inspiration for friendship video template",
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
    "image": "/images/photos/capcut-couple.webp",
    "imageAlt": "Couple together inspiration for romantic video template",
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
    "image": "/images/photos/capcut-travel.webp",
    "imageAlt": "Road trip adventure mood for travel reels template",
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
    "image": "/images/photos/capcut-cricket.webp",
    "imageAlt": "Cricket match atmosphere for fan celebration video template",
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
    "image": "/images/photos/capcut-bike.webp",
    "imageAlt": "Motorcycle riding style for bike rider video template",
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
    "slug": "tech-intro",
    "image": "/images/photos/capcut-tech-intro.webp",
    "imageAlt": "Futuristic blue AI logo reveal preview for tech intro template",
    "title": "Tech Intro CapCut Template",
    "description": "Futuristic tech intro with glitch transitions and digital rain effects.",
    "tags": [
      "tech",
      "intro",
      "glitch",
      "futuristic"
    ],
    "duration": "8s",
    "assetsNeeded": "3 photos + logo",
    "bestFor": [
      "YouTube Intro",
      "Instagram Reels",
      "Tech content"
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

const AUTHOR = 'RSP Editor Team';
const DATE_PUBLISHED = '2026-06-01';
const DATE_MODIFIED = '2026-06-01';

const promptVisuals = [
  'cinematic-sunset-boy',
  'cinematic-sunset-girl',
  'attitude-boy',
  'cute-couple',
  'birthday-poster',
  'cricket-stadium',
  'anime-inspired',
  'instagram-dp',
  'viral-reels-cover',
  'lofi-dusk-filter',
  'travel-double-exposure',
  'profile-avatar'
];

const capcutVisuals = [
  'hindi-song-beat-sync-2026',
  'punjabi-song-reels-2026',
  'love-beat-sync-2026',
  'attitude-reels-2026',
  'birthday-video-2026',
  'photo-beat-sync-2026'
];

function pickPromptVisual(item: Resource) {
  if (item.type !== 'prompt') return '';
  if (item.slug === 'cinematic-sunset-boy') return 'cinematic-sunset-boy';
  if (item.slug === 'cinematic-sunset-girl') return 'cinematic-sunset-girl';
  if (item.tags.includes('attitude')) return 'attitude-boy';
  if (item.tags.includes('couple') || item.tags.includes('love')) return 'cute-couple';
  if (item.tags.includes('birthday')) return 'birthday-poster';
  if (item.tags.includes('cricket')) return 'cricket-stadium';
  if (item.tags.includes('anime')) return 'anime-inspired';
  if (item.tags.includes('instagram-dp') || item.tags.includes('profile-photo')) return 'instagram-dp';
  if (item.tags.includes('reels-cover') || item.tags.includes('viral')) return 'viral-reels-cover';
  if (item.tags.includes('lofi') || item.slug.includes('lofi')) return 'lofi-dusk-filter';
  if (item.tags.includes('travel') || item.slug.includes('travel')) return 'travel-double-exposure';
  return promptVisuals[Math.abs(item.slug.length) % promptVisuals.length];
}

function pickCapcutVisual(item: Resource) {
  if (item.type !== 'capcut') return '';
  if (capcutVisuals.includes(item.slug)) return item.slug;
  if (item.tags.includes('hindi-song')) return 'hindi-song-beat-sync-2026';
  if (item.tags.includes('punjabi-song')) return 'punjabi-song-reels-2026';
  if (item.tags.includes('love') || item.tags.includes('couple')) return 'love-beat-sync-2026';
  if (item.tags.includes('attitude')) return 'attitude-reels-2026';
  if (item.tags.includes('birthday')) return 'birthday-video-2026';
  return 'photo-beat-sync-2026';
}

function pickBadge(item: Resource) {
  if (item.tags.includes('trending') || item.tags.includes('viral') || item.tags.includes('beat-sync')) return 'Trending';
  if (item.tags.includes('birthday') || item.tags.includes('cricket') || item.tags.includes('hindi-song')) return 'Popular';
  if (item.slug.includes('2026')) return 'New';
  return 'Free';
}

function withEditorialMetadata(item: Resource): Resource {
  const visual = item.type === 'prompt' ? pickPromptVisual(item) : pickCapcutVisual(item);
  const folder = item.type === 'prompt' ? 'prompts' : 'capcut';
  return {
    ...item,
    image: item.image ?? `/images/${folder}/${visual}.svg`,
    imageAlt: item.imageAlt ?? `${item.title} ${item.type === 'prompt' ? 'preview' : 'thumbnail'}`,
    ogImage: item.ogImage ?? item.image ?? `/images/${folder}/${visual}.svg`,
    author: item.author ?? AUTHOR,
    datePublished: item.datePublished ?? DATE_PUBLISHED,
    dateModified: item.dateModified ?? DATE_MODIFIED,
    badge: item.badge ?? pickBadge(item)
  };
}

export const resources = rawResources.map(withEditorialMetadata);
export const prompts = resources.filter((item) => item.type === 'prompt');
export const capcuts = resources.filter((item) => item.type === 'capcut');

export const featuredPromptSlugs = [
  'spring-bougainvillea-portrait',
  'luxury-pool-fashion-portrait',
  'coastal-charm-fox-spirit-cover',
  'cinematic-sunset-boy',
  'cinematic-sunset-girl',
  'lofi-dusk-filter',
  'cute-couple',
  'cricket-stadium',
  'birthday-poster',
  'attitude-boy',
  'bike-rider',
  'gym-boy',
  'wedding-couple',
  'neon-cyberpunk-portrait',
  'anime-portrait',
  'studio-headshot'
];

export const featuredCapcutSlugs = [
  'hindi-song-beat-sync',
  'punjabi-song-reels',
  'love-beat-sync',
  'attitude-reels',
  'birthday-video',
  'photo-beat-sync',
  'slow-motion',
  'sad-song',
  'friendship',
  'couple-template',
  'travel-reels',
  'cricket-fan',
  'bike-rider-template',
  'tech-intro'
];

const bySlug = (items: Resource[], slugs: string[]) => slugs.map((slug) => items.find((item) => item.slug === slug)).filter(Boolean) as Resource[];

export const featuredPrompts = bySlug(prompts, featuredPromptSlugs);
export const featuredCapcuts = bySlug(capcuts, featuredCapcutSlugs);
export const allTags = Array.from(new Set(resources.flatMap((item) => item.tags))).sort();
export const getBySlug = (type: Resource['type'], slug: string) => resources.find((item) => item.type === type && item.slug === slug);
export const getRelated = (resource: Resource, limit = 6) => resources.filter((item) => item.slug !== resource.slug && item.tags.some((tag) => resource.tags.includes(tag))).slice(0, limit);
