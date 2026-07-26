import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ fallback: 'index.html' }),
    // GitHub Pages serves a project site under /<repo>/, so every asset and
    // link must be prefixed with that path. The Pages workflow sets BASE_PATH
    // to /<repo>. Empty by default, so local dev and the GitLab build (served
    // at root by nginx) are unaffected.
    paths: {
      base: process.env.BASE_PATH ?? ''
    }
  }
};
