import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Deuw9-Mx.mjs';
import { d as decodeKey } from './chunks/astro/server_BroNZFhW.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

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
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
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
    isIndex: rawRouteData.isIndex
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
    middleware(_, next) {
      return next();
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

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Projects/Astro%20Project/Nioka-Portofolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CZ3zs3Y1.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Projects/Astro Project/Nioka-Portofolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","D:/Projects/Astro Project/Nioka-Portofolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","D:/Projects/Astro Project/Nioka-Portofolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_BgodT0Fr.mjs","D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/Qualification":"_astro/Qualification.CPWP1_5_.js","D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/ButtonUp":"_astro/ButtonUp.BkwSO-6Q.js","D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/Navbar":"_astro/Navbar.BSqQbM2n.js","D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/Skills":"_astro/Skills.DtXI1kUJ.js","D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/BottomNav":"_astro/BottomNav.CI9zfnu6.js","D:/Projects/Astro Project/Nioka-Portofolio/src/components/react/Hero":"_astro/Hero.6KQSuShz.js","@astrojs/react/client.js":"_astro/client.DRsCJ7vl.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Adhim_Niokagi_IT_CVS.ChhDTG-7.pdf","/_astro/adhim_niokagi.itm8V4Bw.jpg","/_astro/html.CKyDEyeN.png","/_astro/js.B8qeKn1m.png","/_astro/bootstrap.CReEuvD6.png","/_astro/css.DfFIrX7C.png","/_astro/Tailw.Cc0deQtW.png","/_astro/reactjs.rD3V6UCs.png","/_astro/vite.Di796QcD.png","/_astro/Figma.wI4upNcG.png","/_astro/php.DfLeXNm7.png","/_astro/nodejs.CqOBj1-i.png","/_astro/MySQL.CKGYqRW9.png","/_astro/Laravel.ClnSHGaH.png","/_astro/Express.CeSowpY4.png","/_astro/Postman.u-bg5XJ9.png","/_astro/mongodb.CN3iCCaF.png","/_astro/Nest.js.ClGh1ENG.png","/_astro/adhim_3hp.DNVQ0fyl.jpeg","/_astro/index.CZ3zs3Y1.css","/_astro/BottomNav.CI9zfnu6.js","/_astro/ButtonUp.BkwSO-6Q.js","/_astro/client.DRsCJ7vl.js","/_astro/Hero.6KQSuShz.js","/_astro/index.DJO9vBfz.js","/_astro/jsx-runtime.CYYqVSlZ.js","/_astro/Navbar.BSqQbM2n.js","/_astro/PartTitle.BtqKyj17.js","/_astro/Qualification.CPWP1_5_.js","/_astro/Skills.DtXI1kUJ.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"t/4F/5GL+o8eBejRsD1ez2bj3YM+5OR22+9ymuq9/mA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
