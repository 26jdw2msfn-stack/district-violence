import { defineConfig } from 'astro/config';

export default defineConfig({
  // Two hosts, two roots: Cloudflare Pages serves at the bare domain, GitHub
  // Pages serves from /district-violence/. CF_PAGES is set automatically by
  // Cloudflare's build, so the base path only kicks in on GitHub Actions.
  site: process.env.CF_PAGES ? 'https://district-violence.pages.dev' : 'https://26jdw2msfn-stack.github.io',
  base: process.env.CF_PAGES ? undefined : '/district-violence/',
  output: 'static',
});
