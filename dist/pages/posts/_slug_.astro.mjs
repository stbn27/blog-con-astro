import { c as createComponent, a as createAstro, b as addAttribute, r as renderComponent, e as renderHead, f as renderSlot, d as renderTemplate, m as maybeRenderHead, g as renderTransition } from '../../chunks/astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import { b as $$ClientRouter, $ as $$Image } from '../../chunks/_astro_assets_C0P1T8Sf.mjs';
/* empty css                                     */
/* empty css                                     */
import { F as Formatter } from '../../chunks/formatter_B9Pyf3JP.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as getEntry, g as getCollection } from '../../chunks/_astro_content_pMxPYBoN.mjs';
/* empty css                                               */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="bg-gray-900"> <a href="/" id="btn-back">Regresar</a> <main class="mb-10 max-w-5xl m-auto px-2 py-2"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "E:/astro-curso/blog-con-astro/src/layout/BlogLayout.astro", void 0);

const $$Astro = createAstro();
const getStaticPaths = (async () => {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
});
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const frontmatter = post.data;
  const { Content, headings } = await post.render();
  const author = (await getEntry("author", post.data.author.id)).data;
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": frontmatter.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-xs text-gray-500 mb-0">${frontmatter.title}</h1>  <div class="text-md text-gray-400 mb-0 flex flex-row mt-2"> ${renderComponent($$result2, "Image", $$Image, { "src": author.avatar, "class": "rounded-full", "alt": author.name, "width": 50, "height": 50 })} <div class="flex flex-col ml-5"> <a${addAttribute(`/blog/${frontmatter.author.id}`, "href")}>${author.name}</a> <span class="text-xs text-gray-200"> ${Formatter.formatDate(frontmatter.date)} </span> </div> </div>   ${renderComponent($$result2, "Image", $$Image, { "src": frontmatter.image, "alt": frontmatter.title, "width": 600, "height": 220, "class": "object-cover w-full h-[250px] my-5 rounded-md", "data-astro-transition-scope": renderTransition($$result2, "cvyjz5sb", "", `${post.slug}-image`) })} <h3>Tabla de contenidos</h3> <ol> ${headings.map((heading, index) => renderTemplate`<li> <a${addAttribute(`#${heading.slug}`, "href")}> ${index + 1} - ${heading.text} </a> </li>`)} </ol>  ${renderComponent($$result2, "Content", Content, {})} <div class="my-20"> <a href="#btn-back">Ir arriba</a> </div> ` })}`;
}, "E:/astro-curso/blog-con-astro/src/pages/posts/[slug].astro", "self");

const $$file = "E:/astro-curso/blog-con-astro/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
