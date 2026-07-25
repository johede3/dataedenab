# Saldy Project Card Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a Saldy card to the existing Dataeden project marquee, linked to the public Saldy site.

**Architecture:** Reuse the existing data-driven `projects` array and unchanged `ProjectCard` rendering. Store the provided 192×192 Sandy image under the app's existing project-image directory and reference it from the new Saldy entry.

**Tech Stack:** Next.js 15, React 19, TypeScript, Next Image, pnpm.

---

### Task 1: Add Saldy to the project catalogue

**Files:**
- Create: `public/images/projects/saldy.png`
- Modify: `src/app/data/projects.ts:1-50`

**Step 1: Confirm the existing image path convention**

Run: `ls public/images/projects`

Expected: Existing project-card image assets are stored in this directory.

**Step 2: Copy the supplied asset**

Run: `cp /Users/johannesedenholm/Dokument/bokforing-xxx/public/sandy-icon-192.png public/images/projects/saldy.png`

Expected: A 192×192 local image is available for the new card.

**Step 3: Add the minimal project entry**

```ts
{
  name: "Saldy",
  description: "Ett modernt bokföringsprogram för småföretag.",
  img: "/images/projects/saldy.png",
  url: "https://www.saldy.se/",
},
```

**Step 4: Verify the catalogue data**

Run: `rg -n -A5 'name: "Saldy"' src/app/data/projects.ts && sips -g pixelWidth -g pixelHeight public/images/projects/saldy.png`

Expected: Correct name, description, image path, URL, and 192×192 image dimensions.

**Step 5: Run the production build**

Run: `pnpm build`

Expected: Exit code 0.

**Step 6: Commit**

Run: `git add public/images/projects/saldy.png src/app/data/projects.ts && git commit -m "feat: add Saldy project card"`
