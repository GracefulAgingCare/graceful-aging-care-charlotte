# Graceful Aging Care LLC

React and Vite website for Graceful Aging Care LLC.

## Run locally

Use Node.js 24, then run:

```sh
npm ci
npm run dev
```

Build and check the production site with `npm run build` and `npm run preview`.
Run `npm run lint` to check the source code.

## Publish with GitHub Pages

1. In the repository's **Settings > Pages > Build and deployment**, set
   **Source** to **GitHub Actions**.
2. Upload or commit this project's contents to the root of the `main` branch
   of `Shaaat21/gracefulagingcare.com`. Include the `src/`, `public/`, and
   `.github/` folders along with `index.html`, `package.json`,
   `package-lock.json`, `vite.config.js`, `eslint.config.js`, `.gitignore`,
   and this README. Keep the folder structure; do not put everything inside
   an extra `Grac/` folder. Do not upload `node_modules/` or `dist/`.
3. Open **Actions > Deploy to GitHub Pages** and wait for a successful run.
   If the files were uploaded before Pages was enabled, choose **Run workflow**.
4. Open the website URL shown in **Settings > Pages**. Without a custom domain,
   it should be `https://shaaat21.github.io/gracefulagingcare.com/`.

The workflow runs `npm ci`, builds with Vite, and publishes `dist/`. It reads
the site's base path from GitHub Pages so asset URLs work at the repository
path or at a configured custom domain. A `_config.yml` Jekyll theme does not
build this React app and is not used by this workflow.

The custom domain `gracefulagingcare.com` also needs its own GitHub Pages and
DNS configuration. Naming the repository after a domain does not connect it.
Follow [GitHub's custom domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

Deployment reference: [Vite's GitHub Pages guide](https://vite.dev/guide/static-deploy.html#github-pages).
