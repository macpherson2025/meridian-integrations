# Meridian Integrations

Static marketing site for Meridian Integrations, a Colorado technology integration practice. The site is built to be owned as source code and deployed from GitHub to Cloudflare Pages.

Digital. Network. Energy. Automation.

## Stack

- [Astro](https://astro.build) 7
- TypeScript
- Semantic HTML
- One CSS file, self-hosted variable font (Manrope, Latin subset)
- No database, CMS, React, or analytics package

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run dev` serves the site at `http://localhost:4321`.

`npm run build` writes the production site to `dist/`.

`npm run preview` serves that build locally.

Node.js 22.12 or newer is required (`engines` in `package.json`).

## Before launch

Edit `src/config/site.ts`. Every placeholder is marked `UPDATE`. Do not invent:

- Phone number
- Email address
- Street address
- License numbers
- Certifications, dealer status, or partnerships
- Testimonials

Also set:

| Item | Where |
| --- | --- |
| Production domain | `SITE_URL` in `src/config/site.ts` |
| Form delivery | `PUBLIC_FORM_ENDPOINT` (see below) |
| Privacy and terms reviewed | `legalReviewed: true` only after counsel reviews those pages |
| Social profiles | `social` array, when real URLs exist |

`robots.txt`, canonical URLs, Open Graph tags, and the sitemap all use `SITE_URL`. Change it before the first production deploy. The checked-in value `https://meridianintegrations.com` is a placeholder until the real domain is confirmed.

## Project layout

```text
src/
  components/     Header, footer, diagrams, form, shared sections
  config/         Company info, navigation, FAQs, future city pages, schema helpers
  layouts/        Base layout and service-page layout
  pages/          One file per public URL
  styles/         Design tokens and global CSS
public/           Favicon, social image, Cloudflare headers, web manifest
```

Company name, phone, email, address, licenses, and social links live in `src/config/site.ts`. Navigation lives in `src/config/navigation.ts`.

## Future city pages

Do not generate thin location pages. `src/config/locations.ts` holds an empty list and a content shape. When a city has real copy — property character, project types, questions, nearby links — add an object with `published: true` and a slug such as `boulder-co`.

The route `src/pages/[slug].astro` builds only published entries, at `/{slug}/` (for example `/boulder-co/`). Slugs must not collide with existing pages. Unpublished entries are not built and are not added to the sitemap.

The same pattern can later hold case studies or a journal: add a folder under `src/pages/` and a link in `src/config/navigation.ts`. Those sections are intentionally not built yet.

## Consultation form

The form is in `src/components/ContactForm.astro`. It validates in the browser, includes a honeypot field named `company_website`, and records `startedAt` for the server.

If `PUBLIC_FORM_ENDPOINT` is empty, the form explains that it cannot deliver a request. No API key is embedded in the page.

When the endpoint is set, the browser `POST`s JSON:

```json
{
  "name": "",
  "company": "",
  "email": "",
  "phone": "",
  "service": "",
  "location": "",
  "message": "",
  "contactMethod": "Phone | Email | Either",
  "startedAt": 0,
  "source": "meridian-website"
}
```

The endpoint must:

- Reject the honeypot when `company_website` is present (the browser omits it from JSON; a native form post may include it)
- Validate every field again on the server
- Rate-limit by IP
- Ignore or reject submissions that arrive too quickly when `startedAt` is present
- Return a success status (`200`–`299`) with no secrets in the body
- Send mail or store the lead using credentials that exist only in the worker environment

Copy `.env.example` to `.env` for local development:

```bash
PUBLIC_FORM_ENDPOINT=https://your-worker.example.workers.dev/contact
```

In Cloudflare Pages, set the same variable under **Settings → Environment variables**. It is public by design. The protection is server-side.

Then update `public/_headers`:

- Add the worker origin to `connect-src` (the fetch from this site)
- Add it to `form-action` (a no-JavaScript submit posts the form directly)

`'unsafe-inline'` in `script-src` exists so JSON-LD structured data can sit in the page. Do not add third-party script tags.

## GitHub

From the project directory, if Git is not initialized yet:

```bash
git init
git add .
git status
git commit -m "Initial Meridian Integrations site."
```

Create an empty repository on GitHub, without a generated README if this project already has one. Then:

```bash
git branch -M main
git remote add origin git@github.com:YOUR_ACCOUNT/meridian-integrations.git
git push -u origin main
```

Use the GitHub web UI (**New repository**) or the [GitHub CLI](https://cli.github.com/):

```bash
gh repo create meridian-integrations --source=. --public --push
```

Confirm `.env` is not in the commit. It is listed in `.gitignore`. `.env.example` is safe to commit because it contains no secrets.

Later changes:

```bash
git add .
git commit -m "Describe the change."
git push
```

## Cloudflare Pages

1. In the Cloudflare dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorize GitHub and choose this repository.
3. Set the production branch to `main`.
4. Framework preset: **Astro**.
5. Build command: `npm run build`
6. Build output directory: `dist`
7. Environment variables: add `PUBLIC_FORM_ENDPOINT` only after the worker exists. Add `NODE_VERSION` = `22` if the default Node on Pages is older than 22.12.
8. Save and deploy. Cloudflare builds on every push to `main`.

### Custom domain

1. Open the Pages project → **Custom domains → Set up a domain**.
2. Enter the domain that matches `SITE_URL` in `src/config/site.ts`.
3. If the domain is already on Cloudflare, the DNS record is added for you.
4. If it is not, add the domain to Cloudflare and update the registrar nameservers, or create the CNAME Cloudflare shows you:
   - Apex domains often use a CNAME flattening record to `your-project.pages.dev`
   - `www` is a CNAME to `your-project.pages.dev`
5. Remove any old A or CNAME records that point the same hostname elsewhere.

Update `SITE_URL`, commit, and push so canonical tags and the sitemap use the real origin. `https://meridianintegrations.com` in the repository is not proof that the domain is registered to this project.

### SSL

Cloudflare provisions HTTPS automatically once the domain is active and proxied. The site also sends an HSTS header (`public/_headers`) telling browsers to stay on HTTPS. Do not enable HSTS preload until the domain has been serving HTTPS without issues.

### Rollback

Pages keeps each deployment. In the project’s **Deployments** list, open an older successful build and choose **Rollback to this deployment**. That restores the previous build without rewriting Git history.

The website source has its own history in Git. `git revert` or a new commit is how code changes are undone. A Pages rollback does not change the Git branch; the next push builds again from `main`.

## Security headers

`public/_headers` is applied by Cloudflare Pages:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- A restrictive `Permissions-Policy`
- `Strict-Transport-Security`
- A Content-Security-Policy that allows this origin, plus inline JSON-LD

The site does not claim to be immune to attack. Static hosting removes the database and plugin runtime from the public site. That is a smaller attack surface, not a guarantee.

## SEO

Each page sets a unique title, description, canonical URL, and Open Graph / Twitter metadata. Service pages include `Service`, `BreadcrumbList`, and `FAQPage` structured data. The home page includes `ProfessionalService` and `WebSite` nodes. Street address and telephone are omitted from schema until they are real values in `src/config/site.ts`.

`@astrojs/sitemap` writes `sitemap-index.xml` into `dist/` at build time. `src/pages/robots.txt.ts` points crawlers at it. The 404 page is `noindex` and is omitted from the sitemap.

## Performance notes

- Latin-only variable fonts, preloaded
- No image CDN and no third-party JavaScript
- CSS is one external file (`inlineStylesheets: 'never'`) so the Content-Security-Policy can keep styles on this origin
- Below-the-fold work is HTML and CSS, not a client framework
- Hover prefetch is enabled for internal links

## Accessibility

- Skip link, one `h1` per page, labeled landmarks
- Keyboard-operable navigation (`details` / `summary`, including without JavaScript)
- Visible focus, form labels, and a 48px minimum on primary controls
- `prefers-reduced-motion` support
- Diagrams are HTML, not ASCII, with visible captions
