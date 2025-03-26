
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://AbdulZahidShaik.github.io/AngularPortfolio_AbdulZahid/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AngularPortfolio_AbdulZahid"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5057, hash: 'df64ef2dbdcfb51b9718a277fbdde0eab3ef15bccc651dd23f89a195e4c380bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1173, hash: '0cb18925d8b491faa544657877452b8624bb52adeb20197224dd189e9e321b92', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 71213, hash: 'beaced3340217e35cdf60a3293e9bb75a43c8b305e4ca737dc1ac85813aa0789', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JTP6OJQT.css': {size: 573574, hash: 'eFDUU+Szxjk', text: () => import('./assets-chunks/styles-JTP6OJQT_css.mjs').then(m => m.default)}
  },
};
