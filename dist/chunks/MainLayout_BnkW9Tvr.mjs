import { c as createComponent, a as createAstro, b as addAttribute, r as renderComponent, e as renderHead, f as renderSlot, d as renderTemplate } from './astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import { b as $$ClientRouter } from './_astro_assets_C0P1T8Sf.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="bg-gray-900"> <main class="mb-10 max-w-5xl m-auto px-5 py-2"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "E:/astro-curso/blog-con-astro/src/layout/MainLayout.astro", void 0);

export { $$MainLayout as $ };
