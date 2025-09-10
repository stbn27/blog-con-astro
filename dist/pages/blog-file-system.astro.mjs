import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BnkW9Tvr.mjs';
import { s as siteConfig } from '../chunks/site-config_Bu9gIhfp.mjs';
import { $ as $$TypeBlogPost } from '../chunks/TypeBlogPost_BcaI0GoI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BlogFileSystem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogFileSystem;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts-old/post-01.mdx": () => import('../chunks/post-01_BVnsIQdL.mjs').then(n => n._),"./posts-old/post-02.md": () => import('../chunks/post-02_DiQEcxgd.mjs').then(n => n._),"./posts-old/post-03.md": () => import('../chunks/post-03_DBYTU66x.mjs').then(n => n._),"./posts-old/post-04.md": () => import('../chunks/post-04_-acWmfvb.mjs').then(n => n._),"./posts-old/post-05.md": () => import('../chunks/post-05_C-86f5SA.mjs').then(n => n._)}), () => "./posts-old/*.{md,mdx}");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Fernando's Blog" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="container px-6 py-10 mx-auto"> <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"> ${siteConfig.title} </h1> <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "TypeBlogPost", $$TypeBlogPost, { ...post })}`)} </div> </div> </section> ` })}`;
}, "E:/astro-curso/blog-con-astro/src/pages/blog-file-system.astro", void 0);

const $$file = "E:/astro-curso/blog-con-astro/src/pages/blog-file-system.astro";
const $$url = "/blog-file-system";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BlogFileSystem,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
