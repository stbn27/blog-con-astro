import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_pMxPYBoN.mjs';
import { s as siteConfig } from '../chunks/site-config_Bu9gIhfp.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_BnkW9Tvr.mjs';
import { $ as $$TypeBlogPost } from '../chunks/TypeBlogPost_BcaI0GoI.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getCollection(
    "blog",
    (post) => post.data.isDraft === false
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "STBN || Mi blog", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900" data-astro-cid-j7pv25f6> <div class="container px-6 py-10 mx-auto" data-astro-cid-j7pv25f6> <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white" data-astro-cid-j7pv25f6> ${siteConfig.title} </h1> <a class="mr-2" href="/blog/1" data-astro-cid-j7pv25f6>Blog paginado</a> <a class="mr-2" href="/authors" data-astro-cid-j7pv25f6>Autores</a> <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2" data-astro-cid-j7pv25f6> ${blogPosts.map((post) => renderTemplate`${renderComponent($$result2, "TypeBlogPost", $$TypeBlogPost, { "post": post, "data-astro-cid-j7pv25f6": true })}`)} </div> </div> </section> ` })} `;
}, "E:/astro-curso/blog-con-astro/src/pages/index.astro", void 0);

const $$file = "E:/astro-curso/blog-con-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
