import { defineConfig } from 'astro/config';

export default defineConfig({
  // Two hosts, two roots. Cloudflare serves at the bare domain; GitHub Pages
  // serves from /district-violence/. The GitHub workflow sets BASE_PATH
  // explicitly — Cloudflare leaves it unset, so it builds for the root.
  site: process.env.BASE_PATH ? 'https://26jdw2msfn-stack.github.io' : 'https://district-violence.sherstiukmark.workers.dev',
  base: process.env.BASE_PATH,
  output: 'static',
});
