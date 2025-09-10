import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DKbU_Q-f.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, a as $$Picture } from '../chunks/_astro_assets_C0P1T8Sf.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_BnkW9Tvr.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const post05Img = new Proxy({"src":"/_astro/post-05.CRMHgplj.png","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/astro-curso/blog-con-astro/src/assets/images/post-05.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("E:/astro-curso/blog-con-astro/src/assets/images/post-05.png");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Im\xE1genes", "data-astro-cid-7okrfk4n": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-5xl text-white" data-astro-cid-7okrfk4n>Imágenes</h1> <img loading="eager" src="/assets/images/post-05.png" width="250" height="250" data-astro-cid-7okrfk4n> ${renderComponent($$result2, "Image", $$Image, { "src": post05Img, "width": "250", "height": "250", "alt": "Imagen del post", "data-astro-cid-7okrfk4n": true })} ${renderComponent($$result2, "Image", $$Image, { "src": post05Img, "style": {
    width: "250px",
    height: "250px"
  }, "width": "500", "height": "500", "alt": "Imagen del post", "data-astro-cid-7okrfk4n": true })} <h1 data-astro-cid-7okrfk4n>Quality Low</h1> ${renderComponent($$result2, "Image", $$Image, { "src": post05Img, "quality": "low", "width": "250", "height": "250", "alt": "Imagen del post", "data-astro-cid-7okrfk4n": true })} <h1 data-astro-cid-7okrfk4n>Quality HIGH</h1> ${renderComponent($$result2, "Image", $$Image, { "src": post05Img, "quality": "high", "width": "250", "height": "250", "alt": "Imagen del post", "data-astro-cid-7okrfk4n": true })} <h1 data-astro-cid-7okrfk4n>Formatos</h1> ${renderComponent($$result2, "Image", $$Image, { "src": post05Img, "format": "avif", "width": "250", "height": "250", "alt": "Imagen del post", "data-astro-cid-7okrfk4n": true })} <h1 data-astro-cid-7okrfk4n>Picture</h1>    ${renderComponent($$result2, "Picture", $$Picture, { "src": post05Img, "alt": "Imagen del post", "data-astro-cid-7okrfk4n": true })} <div${addAttribute({
    height: "3000px"
  }, "style")} data-astro-cid-7okrfk4n></div> <img loading="lazy" src="/assets/images/post-01.png" width="250" height="250" data-astro-cid-7okrfk4n> ` })} `;
}, "E:/astro-curso/blog-con-astro/src/pages/images/index.astro", void 0);

const $$file = "E:/astro-curso/blog-con-astro/src/pages/images/index.astro";
const $$url = "/images";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
