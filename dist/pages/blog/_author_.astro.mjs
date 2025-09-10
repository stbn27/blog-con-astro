import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import { s as siteConfig } from '../../chunks/site-config_Bu9gIhfp.mjs';
import { g as getCollection } from '../../chunks/_astro_content_pMxPYBoN.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../../chunks/_astro_assets_C0P1T8Sf.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BnkW9Tvr.mjs';
import { $ as $$TypeBlogPost } from '../../chunks/TypeBlogPost_BcaI0GoI.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = (async () => {
  const [authors, posts] = await Promise.all([
    getCollection("author"),
    getCollection("blog")
  ]);
  return authors.map((author) => ({
    params: { author: author.id },
    props: {
      blogPosts: posts.filter(
        (post) => post.data.author.id === author.id
      ),
      author: author.data
    }
  }));
});
const $$author = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$author;
  const { blogPosts, author } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Posts by ${author.name}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gray-900"> <div class="container px-6 py-10 mx-auto"> <h1 class="text-3xl font-semibold capitalize lg:text-4xl text-white"> ${siteConfig.title} </h1> <a href="/">Regresar</a> <div class="text-md text-gray-400 mb-0 flex flex-row mt-2"> ${renderComponent($$result2, "Image", $$Image, { "class": "rounded-full", "src": author.avatar, "alt": author.name, "width": 50, "height": 50 })} <div class="flex flex-col ml-5"> <a>${author.name}</a> <span>Listado de todos mis posts</span> </div> </div> <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"> ${blogPosts.map((post) => renderTemplate`${renderComponent($$result2, "TypeBlogPost", $$TypeBlogPost, { "post": post })}`)} </div> </div> </section> ` })} `;
}, "E:/astro-curso/blog-con-astro/src/pages/blog/[author].astro", void 0);

const $$file = "E:/astro-curso/blog-con-astro/src/pages/blog/[author].astro";
const $$url = "/blog/[author]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$author,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
