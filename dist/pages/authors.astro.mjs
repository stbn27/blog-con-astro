import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as addAttribute, d as renderTemplate } from '../chunks/astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BnkW9Tvr.mjs';
import { g as getCollection } from '../chunks/_astro_content_pMxPYBoN.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_C0P1T8Sf.mjs';
import { s as siteConfig } from '../chunks/site-config_Bu9gIhfp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AuthorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthorCard;
  const { author } = Astro2.props;
  const { avatar, bio, github, name, linkedIn, subtitle, twitter } = author.data;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-lg bg-slate-800 mx-auto rounded-lg shadow-md p-5"> ${renderComponent($$result, "Image", $$Image, { "src": avatar, "width": "200", "height": "200", "class": "w-32 h-32 rounded-full mx-auto", "alt": "Profile picture" })} <h2 class="text-center text-white text-2xl font-semibold mt-3">${name}</h2> <p class="text-center text-gray-100 mt-1">${subtitle}</p> <div class="flex justify-center mt-5"> <a${addAttribute(`https://x.com/${twitter}`, "href")} class="text-blue-500 hover:text-blue-700 mx-3">Twitter</a> <a${addAttribute(linkedIn, "href")} class="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a> <a${addAttribute(github, "href")} class="text-blue-500 hover:text-blue-700 mx-3">GitHub</a> </div> <div class="mt-5"> <h3 class="text-xl text-gray-400 font-semibold">Bio</h3> <p class="text-gray-300 mt-2"> ${bio} </p> <div class="flex justify-end"> <a class="text-slate-400"${addAttribute(`/blog/${author.id}`, "href")}>Leer más</a> </div> </div> </div>`;
}, "E:/astro-curso/blog-con-astro/src/components/AuthorCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const authors = await getCollection("author");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Listado de autores" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container px-6 py-10 mx-auto"> <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"> ${siteConfig.title} </h1> </section> <section class="grid grid-cols-1 sm:grid-cols-2 gap-2"> <!-- AuthorCard --> ${authors.map((author) => renderTemplate`${renderComponent($$result2, "AuthorCard", $$AuthorCard, { "author": author })}`)} </section> ` })}`;
}, "E:/astro-curso/blog-con-astro/src/pages/authors/index.astro", void 0);

const $$file = "E:/astro-curso/blog-con-astro/src/pages/authors/index.astro";
const $$url = "/authors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
