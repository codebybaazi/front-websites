---
target: the blog post layout
total_score: 22
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
p2_count: 2
target_identity: "file:D:\\workspace\\React\\FairPlayProject48\\src\\components\\blog"
timestamp: 2026-09-01T08-21-09Z
slug: src-components-blog
---
Method: dual-agent (A: b93ec977-4557-4ffa-b099-eacaf300d501 · B: ccc88998-64e9-4346-9360-ebfb683e1a9a)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Bookmark / Subscribe / Watch Live give no state; featured ignores the active topic |
| 2 | Match System / Real World | 3 | ID/UPI/IPL/WhatsApp is fluent; “Insights,” fake casino badges, and an email field under a WhatsApp promise leak |
| 3 | User Control and Freedom | 2 | Back-to-index works; no search clear; dead controls; invalid slug never 404s |
| 4 | Consistency and Standards | 2 | Five card dialects; Read the guide / Read Guide / Read more; three hero systems; `prose-orange` on a green brand |
| 5 | Error Prevention | 2 | `slice(1)` drops the first filtered hit; fabricated read time; clickable no-ops |
| 6 | Recognition Rather Than Recall | 3 | Topics and search help; identical blurbs and sr-only featured title hide which guide is open |
| 7 | Flexibility and Efficiency | 2 | Search + eight topics only; no sort, save, or skip-to-content |
| 8 | Aesthetic and Minimalist Design | 2 | Green glass has punch; pulse blurs, 9px tracking, Unsplash toys, and marketing chrome crowd reading |
| 9 | Error Recovery | 2 | Empty search names a next step; under-review and silent no-ops do not |
| 10 | Help and Documentation | 2 | This is the help centre, but topics are magazine labels, not jobs |
| **Total** | | **22/40** | **Acceptable** |

#### Design Specificity Verdict

**LLM assessment**: Half authored, half interchangeable. Voice is Fairplay: cricket desk, Fairplay ID, UPI, WhatsApp, IPL, “check the slip.” Dark glass and the lime WhatsApp slab belong here. The composition does not: live-dot magazine hero, 16/9 fintech cards, Unsplash casino, fake “Live markets” glass. Worst product miss: identical `desc` strings and a featured card whose title is `sr-only`. Help-centre intent is wearing a SaaS-insights costume (“BACK TO INSIGHTS”, “Verified Content”).

**Deterministic scan**: CLI detector (`detect.mjs --json`) on `src/components/blog` (5 files), `src/routes/blog.tsx`, `src/routes/posts.$slug.tsx`, and `src/components/RecentPostsSection.tsx` — exit 0, **0 findings**, unique rules **0**. Detector did not catch the LLM issues (dead controls, hidden title, filter/list mismatch, copy clones). Those are UX/affordance failures, not the mechanical rules this scan flags.

**Visual overlays**: No reliable user-visible overlay. Browser automation is not available in this session; live-server and `detect.js` injection were not started. Fallback signal: CLI JSON only (`[]` on all four targets).

#### Overall Impression

Brand and copy already know the audience. The layout still performs “premium crypto blog.” The single biggest opportunity is a reading/help path: find one guide by job, read it, Open an ID — and strip the title-less featured card, cloned blurbs, dead controls, and post-hero link storms.

#### What's Working

- Job copy that belongs to Indian Fairplay users: UPI, WhatsApp ID, cricket desk, slip/settlement caution — not generic insights lorem.
- Compound `BlogPost` variants share one state contract; homepage `RecentPostsSection` (“Latest from the Fairplay desk”) is the most on-brand composition.
- Empty search state, newcomer FAQ, and AIOverview “not betting advice” are the right reading-mode instincts.

#### Priority Issues

- **[P1] Featured card hides the title over identical blurbs**
  - **Why it matters**: Users cannot tell which guide is featured or how cards differ — fatal for “find a guide.”
  - **Fix**: Show the real title as the featured headline; write unique one-line jobs per slug.
  - **Suggested command**: `$impeccable clarify`

- **[P1] Affordance lies — Bookmark, Subscribe, Watch Live**
  - **Why it matters**: Betting-ID users treat fake controls as scam signals.
  - **Fix**: Remove or wire them; one WhatsApp primary, no ghost theatre.
  - **Suggested command**: `$impeccable harden`

- **[P1] Index is a magazine stack; filter list lies**
  - **Why it matters**: Eight topics + featured + grid + newsletter + quick links + FAQ; `filteredArticles.slice(1)` drops the first match while featured stays the newest unfiltered post.
  - **Fix**: Search or four job chips (ID, UPI, Login, IPL), then a complete matching list; featured must obey the filter.
  - **Suggested command**: `$impeccable distill`

- **[P2] Article chrome fights reading**
  - **Why it matters**: Three hero types, duplicate meta, six hub chips, four CTAs, then InternalLinkGrid and related posts dilute the WhatsApp peak-end.
  - **Fix**: One hero, body, one ID CTA, related after.
  - **Suggested command**: `$impeccable layout`

- **[P2] Type and lexicon split the system**
  - **Why it matters**: 9–10px uppercase pills, Title-Case SEO H1s, Insights vs guides, `prose-orange` vs primary green — hard to scan, especially on a phone.
  - **Fix**: One reading scale; sentence-case titles; “Guides” everywhere.
  - **Suggested command**: `$impeccable typeset`

#### Persona Red Flags

**Jordan (First-Timer)**: Featured block with no visible title; topics are Strategy/Analysis, not “Get an ID.” FAQ that says start with ID is below the fold. On the post, “BACK TO INSIGHTS,” casino “Get Started,” and “Open an ID” name the same fear three ways.

**Casey (Distracted Mobile)**: `pt-40` / `py-32` and a 16/9 featured image before the list; on small screens Search + 8 topics + Trending sit above the grid. 9px category type; bookmark tap target is tiny; WhatsApp CTA after a long article, not in the thumb zone; search uses `focus:outline-none`.

**Riley (Stress Tester)**: Bookmark, Subscribe, and Watch Live look live and do nothing. Topic “News” can empty the grid while featured still shows an unrelated post. Identical dates and blurbs. Unknown slug paints a full hero then “Post Under Review.” `readMinutes` is `description.length / 40`. Nested `<article>` elements.

**Sam (Accessibility)**: Search is placeholder-only (no label). Featured title only in `sr-only` with a duplicate CTA link. 9–10px `/30` contrast. Motion with no reduced-motion. “Watch Live” is a `div`, not a control. Empty-state type at `text-white/10–20`.

#### Minor Observations

- `BlogPost.Frame` is always `<article>` inside a feed of cards.
- Related (italic uppercase) vs Recent (semibold 17px) feel like two products.
- Newsletter copy forbids deposits-on-email, then asks for `you@email.com`.
- Casino hero ignores CMS title.
- Quick links include `/blog` (self) under editorial labels that don’t match destinations.
- Sticky `top-32` sidebar wastes mobile.

#### Questions to Consider

- If the only conversion that matters is WhatsApp for a Fairplay ID, why does the index end on a dead email form and the article end on four peer links?
- What if topics were four jobs (Get ID, Fix login, Add UPI, Bet this IPL match) and every other magazine category disappeared?
- Would a confident Fairplay desk put the guide title in 72px and delete the Unsplash casino and the fake live-markets glass card tomorrow?
