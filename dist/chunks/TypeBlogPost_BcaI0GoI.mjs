import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as addAttribute, g as renderTransition, d as renderTemplate } from './astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import { F as Formatter } from './formatter_B9Pyf3JP.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_C0P1T8Sf.mjs';
/* empty css                                    */

const $$Astro = createAstro();
const $$TypeBlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TypeBlogPost;
  const { post } = Astro2.props;
  const frontmatter = post.data;
  return renderTemplate`${maybeRenderHead()}<div class="lg:flex"> ${renderComponent($$result, "Image", $$Image, { "class": "object-cover w-full h-56 rounded-lg lg:w-64", "src": frontmatter.image, "alt": frontmatter.title, "width": 500, "width": 500, "quality": "low", "loading": "lazy", "data-astro-transition-scope": renderTransition($$result, "fe73k2ha", "", `${post.slug}-image`) })} <div class="flex flex-col justify-between py-6 lg:mx-6"> <a${addAttribute(`/posts/${post.slug}`, "href")} class="text-xl font-semibold hover:underline text-white"> ${frontmatter.description} </a> <span class="text-sm text-gray-300">${Formatter.formatDate(String(frontmatter.date))}</span> </div> </div>`;
}, "E:/astro-curso/blog-con-astro/src/components/TypeBlogPost.astro", "self");

export { $$TypeBlogPost as $ };
