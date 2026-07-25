# Public Contact Email Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Present `johannes@dataeden.se` consistently everywhere the production site publishes a contact email.

**Architecture:** Keep the existing static data shape and Formspree form ID. Replace the public contact address in the dedicated data/configuration locations, update the direct contact-page link, and bind the FAQ `mailto:` URL to its existing contact-email value.

**Tech Stack:** Next.js 15, React 19, TypeScript, pnpm.

---

### Task 1: Update public contact references

**Files:**
- Modify: `src/app/data/footer.ts:29`
- Modify: `src/app/data/faq.ts:7`
- Modify: `src/app/kontakt/page.tsx:96-97`
- Modify: `src/app/layout.tsx:103-107`
- Modify: `src/components/FAQ/FAQ.tsx:32-37`

**Step 1: Confirm the current contact references**

Run: `git grep -n 'kontakt@dataeden.se' -- src`

Expected: References in the footer data, FAQ data, contact page, layout metadata, and FAQ rendering.

**Step 2: Apply the minimal replacement**

```tsx
// src/components/FAQ/FAQ.tsx
<a href={`mailto:${faqDetails.contactEmail}`}>
  {faqDetails.contactEmail}
</a>
```

Replace the four current `kontakt@dataeden.se` values with `johannes@dataeden.se`. Do not change `useForm("xyzkqznp")`.

**Step 3: Confirm the stale address is gone**

Run: `git grep -n 'kontakt@dataeden.se' -- src`

Expected: No output.

**Step 4: Run the production build**

Run: `pnpm build`

Expected: Exit code 0.

**Step 5: Commit**

Run: `git add src/app/data/footer.ts src/app/data/faq.ts src/app/kontakt/page.tsx src/app/layout.tsx src/components/FAQ/FAQ.tsx && git commit -m "fix: update public contact email"`
