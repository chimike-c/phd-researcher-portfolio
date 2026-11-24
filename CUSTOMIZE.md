# Customizing your portfolio

All page text lives in the `lib/` folder, separate from layout. Edit these files and commit.

| To change | Edit |
| --- | --- |
| Name, email, LinkedIn, CV file, education, honors, certifications, navigation | `lib/profile.ts` |
| Research page | `lib/research.ts` |
| Teaching page | `lib/teaching.ts` |
| Service & Leadership page | `lib/service.ts` |
| Home page hero and pillar cards | `components/hero.tsx`, `components/portfolio-sections.tsx` |

Text in `[square brackets]` is a placeholder and appears in italics on the site. Search the `lib/` folder for `[Add` and `DRAFT` to find everything still to confirm.

## Adding things
- **A publication:** add an entry to `publications` in `lib/research.ts`. The empty-state message disappears automatically.
- **A completed project:** copy the ongoing project in `projects` and set `status: 'Completed'`.
- **A teaching sample:** add a PDF to `public/teaching/` and a `files` entry in `lib/teaching.ts`.
- **An updated CV:** replace `public/Divinegift-Chimere-CV.pdf`, keeping the same file name.

## Before sharing the site publicly
1. Fill in or remove every placeholder (see above).
2. Check every item marked `DRAFT`, especially the Research page's instrument descriptions and future directions.
3. Decide whether to name Beta-Learning partners or students. Names are left out on purpose.
4. Review the CV PDF: it lists a phone number and home city that anyone can download.
