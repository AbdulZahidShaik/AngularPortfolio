
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://AbdulZahidShaik.github.io/AngularPortfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AngularPortfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5046, hash: 'fb759001beb2548ba23216567cee08b2461a5a6b0c0cf301ebd51c04205b76a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1162, hash: '023204cca38d3c86f5804778bc2f085cd94fdd68cc0bdd619d47bc15265801da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 71202, hash: 'bff73b02c02c27a11f804d3d1d3f7fe761ed44befc8c8f0f518765721871ef30', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JTP6OJQT.css': {size: 573574, hash: 'eFDUU+Szxjk', text: () => import('./assets-chunks/styles-JTP6OJQT_css.mjs').then(m => m.default)}
  },
};
