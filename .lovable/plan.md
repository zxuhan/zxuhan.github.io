

# Portfolio Redesign Plan

## Overview
Five major changes: warm light color theme, profile picture, tech stack logo strip as section divider, welcome/loading page, and panda photo as a banner background.

---

## 1. Warm Light Color Theme
Shift the entire palette from dark cyberpunk to a warm, light modern tone:
- Background: warm off-white/cream (#faf8f5 or similar)
- Text: dark charcoal (#2a2a2a)
- Accent: warm teal or terracotta for highlights
- Cards: white with soft shadows
- Borders: light warm gray
- Update all CSS variables in `src/index.css`
- Update navbar background, scrollbar, loading screen colors accordingly

## 2. Profile Picture Placeholder (Hero Section)
- Add a round profile picture placeholder in the hero section next to the intro text
- Use a placeholder image (gray circle with a user icon or initials)
- Layout: side-by-side on desktop (text left, photo right), stacked on mobile
- Rounded full with a subtle border/shadow

## 3. Tech Stack Logo Strip (Section Divider)
- Remove the "Tech Stack" text label and the current Lucide icon approach
- Replace with actual SVG logos for: Java, Python, Go, MySQL, Redis, Docker, Git
- Use free SVG logos from CDN (e.g., cdn.jsdelivr.net/gh/devicons/devicon)
- Display as a horizontal row of circular "stone/badge" style icons (inspired by picture 1)
- Position this strip as a visual separator between the About/Hero section and Experience section
- Icons float/bob gently on hover

## 4. Education Cards
- Convert the current simple two-line education display into styled cards
- Each card shows: degree, university, dates, with a subtle icon or accent
- Minimal card design with warm shadows matching the new theme

## 5. Welcome/Loading Page
- Keep the existing loading screen concept but adapt colors to the warm theme
- Dark charcoal text on cream/warm background
- Typing animation stays, accent color updates

## 6. Panda Photo as Banner Background
- Copy `IMG_3862.jpeg` into the project assets
- Add a LinkedIn-style rectangular banner/cover photo area at the top of the hero section or behind it
- The panda image serves as the banner with a subtle overlay gradient
- Profile picture overlaps the bottom edge of the banner (LinkedIn style)

---

## Technical Details

### Files to modify:
- `src/index.css` — all CSS variables for warm light theme
- `src/components/LoadingScreen.tsx` — color adjustments
- `src/components/Navbar.tsx` — light theme navbar
- `src/components/HeroSection.tsx` — major restructure: banner image, profile photo, education cards, remove tech stack from here
- `src/components/TechIcon.tsx` — refactor to use SVG logo images instead of Lucide icons
- `src/pages/Index.tsx` — add tech strip divider component between Hero and Experience

### New files:
- `src/components/TechStrip.tsx` — horizontal logo strip divider
- `src/components/EducationCard.tsx` — styled education card component
- Copy `IMG_3862.jpeg` to `src/assets/banner.jpeg`

### Tech stack logos (from devicon CDN):
- Java, Python, Go, MySQL, Redis, Docker, Git
- Displayed in circular containers with subtle hover animation

