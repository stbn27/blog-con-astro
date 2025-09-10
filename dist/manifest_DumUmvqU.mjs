import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { D as NOOP_MIDDLEWARE_HEADER, G as decodeKey } from './chunks/astro/server_DKbU_Q-f.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/astro-curso/blog-con-astro/","cacheDir":"file:///E:/astro-curso/blog-con-astro/node_modules/.astro/","outDir":"file:///E:/astro-curso/blog-con-astro/dist/","srcDir":"file:///E:/astro-curso/blog-con-astro/src/","publicDir":"file:///E:/astro-curso/blog-con-astro/public/","buildClientDir":"file:///E:/astro-curso/blog-con-astro/dist/client/","buildServerDir":"file:///E:/astro-curso/blog-con-astro/dist/server/","adapterName":"","routes":[{"file":"file:///E:/astro-curso/blog-con-astro/dist/authors/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/authors","isIndex":true,"type":"page","pattern":"^\\/authors\\/?$","segments":[[{"content":"authors","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/authors/index.astro","pathname":"/authors","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///E:/astro-curso/blog-con-astro/dist/blog-file-system/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog-file-system","isIndex":false,"type":"page","pattern":"^\\/blog-file-system\\/?$","segments":[[{"content":"blog-file-system","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog-file-system.astro","pathname":"/blog-file-system","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///E:/astro-curso/blog-con-astro/dist/images/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/images","isIndex":true,"type":"page","pattern":"^\\/images\\/?$","segments":[[{"content":"images","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/images/index.astro","pathname":"/images","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-01/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts-old/post-01","isIndex":false,"type":"page","pattern":"^\\/posts-old\\/post-01\\/?$","segments":[[{"content":"posts-old","dynamic":false,"spread":false}],[{"content":"post-01","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-old/post-01.mdx","pathname":"/posts-old/post-01","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-02/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts-old/post-02","isIndex":false,"type":"page","pattern":"^\\/posts-old\\/post-02\\/?$","segments":[[{"content":"posts-old","dynamic":false,"spread":false}],[{"content":"post-02","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-old/post-02.md","pathname":"/posts-old/post-02","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-03/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts-old/post-03","isIndex":false,"type":"page","pattern":"^\\/posts-old\\/post-03\\/?$","segments":[[{"content":"posts-old","dynamic":false,"spread":false}],[{"content":"post-03","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-old/post-03.md","pathname":"/posts-old/post-03","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-04/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts-old/post-04","isIndex":false,"type":"page","pattern":"^\\/posts-old\\/post-04\\/?$","segments":[[{"content":"posts-old","dynamic":false,"spread":false}],[{"content":"post-04","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-old/post-04.md","pathname":"/posts-old/post-04","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-05/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts-old/post-05","isIndex":false,"type":"page","pattern":"^\\/posts-old\\/post-05\\/?$","segments":[[{"content":"posts-old","dynamic":false,"spread":false}],[{"content":"post-05","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-old/post-05.md","pathname":"/posts-old/post-05","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///E:/astro-curso/blog-con-astro/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/astro-curso/blog-con-astro/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/astro-curso/blog-con-astro/src/components/TypeBlogPost.astro",{"propagation":"in-tree","containsHead":false}],["E:/astro-curso/blog-con-astro/src/pages/blog-file-system.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog-file-system@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/astro-curso/blog-con-astro/src/pages/blog/[author].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[author]@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/astro-curso/blog-con-astro/src/pages/blog/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/astro-curso/blog-con-astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["E:/astro-curso/blog-con-astro/src/pages/authors/index.astro",{"propagation":"in-tree","containsHead":true}],["E:/astro-curso/blog-con-astro/src/pages/images/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/authors/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/authors/index@_@astro":"pages/authors.astro.mjs","\u0000@astro-page:src/pages/blog/[author]@_@astro":"pages/blog/_author_.astro.mjs","\u0000@astro-page:src/pages/blog/[page]@_@astro":"pages/blog/_page_.astro.mjs","\u0000@astro-page:src/pages/blog-file-system@_@astro":"pages/blog-file-system.astro.mjs","\u0000@astro-page:src/pages/images/index@_@astro":"pages/images.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/posts-old/post-01@_@mdx":"pages/posts-old/post-01.astro.mjs","\u0000@astro-page:src/pages/posts-old/post-02@_@md":"pages/posts-old/post-02.astro.mjs","\u0000@astro-page:src/pages/posts-old/post-03@_@md":"pages/posts-old/post-03.astro.mjs","\u0000@astro-page:src/pages/posts-old/post-04@_@md":"pages/posts-old/post-04.astro.mjs","\u0000@astro-page:src/pages/posts-old/post-05@_@md":"pages/posts-old/post-05.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DumUmvqU.mjs","E:\\astro-curso\\blog-con-astro\\.astro\\content-assets.mjs":"chunks/content-assets_BilZ3z0K.mjs","E:\\astro-curso\\blog-con-astro\\.astro\\content-modules.mjs":"chunks/content-modules_DmV29qXP.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CTJ2ibWY.mjs","E:/astro-curso/blog-con-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CpucqbHm.mjs","E:/astro-curso/blog-con-astro/src/content/blog/post-01.mdx?astroPropagatedAssets":"chunks/post-01_CKx-COXz.mjs","E:/astro-curso/blog-con-astro/src/content/blog/post-01.mdx":"chunks/post-01_C2XodwW8.mjs","E:/astro-curso/blog-con-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.U4jOVs4w.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///E:/astro-curso/blog-con-astro/dist/authors/index.html","/file:///E:/astro-curso/blog-con-astro/dist/blog-file-system/index.html","/file:///E:/astro-curso/blog-con-astro/dist/images/index.html","/file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-01/index.html","/file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-02/index.html","/file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-03/index.html","/file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-04/index.html","/file:///E:/astro-curso/blog-con-astro/dist/posts-old/post-05/index.html","/file:///E:/astro-curso/blog-con-astro/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"EArUluiT6p99nVcp3P1b2ytt2/IEwDc0xbFvKe2A8Iw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
