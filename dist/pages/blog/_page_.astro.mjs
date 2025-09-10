import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import { $ as $$TypeBlogPost } from '../../chunks/TypeBlogPost_BcaI0GoI.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BnkW9Tvr.mjs';
import { g as getCollection } from '../../chunks/_astro_content_pMxPYBoN.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = (async ({ paginate }) => {
  const blogPosts = await getCollection("blog");
  return paginate(blogPosts, { pageSize: 2 });
});
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Fernando's Blog paginado", "data-astro-cid-j3zk6p6w": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-10 mx-auto" data-astro-cid-j3zk6p6w> <h1 class="text-3xl font-semibold capitalize lg:text-4xl text-white" data-astro-cid-j3zk6p6w>
Fernando's Blog paginado
</h1> </div> <section class="bg-gray-900" aria-label="Entradas de blog" data-astro-cid-j3zk6p6w> <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2" data-astro-cid-j3zk6p6w> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "TypeBlogPost", $$TypeBlogPost, { "post": post, "data-astro-cid-j3zk6p6w": true })}`)} </div> </section> <section aria-label="Controles" class="flex justify-between my-10" data-astro-cid-j3zk6p6w> <a${addAttribute(page.url.prev, "href")}${addAttribute({
    disabled: !page.url.prev
  }, "class:list")} data-astro-cid-j3zk6p6w>Anteriores</a> <a${addAttribute(page.url.next, "href")}${addAttribute({
    disabled: !page.url.next
  }, "class:list")} data-astro-cid-j3zk6p6w>Siguientes</a> </section> ` })} `;
}, "E:/astro-curso/blog-con-astro/src/pages/blog/[page].astro", void 0);

const $$file = "E:/astro-curso/blog-con-astro/src/pages/blog/[page].astro";
const $$url = "/blog/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
