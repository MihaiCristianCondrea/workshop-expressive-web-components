const relative = require('./relative-path.cjs');

const items = [
  {url: '/', label: 'Home', icon: 'ri-home-5-line'},
  {url: '/examples/', label: 'Examples', icon: 'ri-layout-grid-line'},
  {url: '/api/', label: 'API', icon: 'ri-code-box-line'},
  {url: '/install/', label: 'Install', icon: 'ri-download-cloud-2-line'},
];

module.exports = function ({page}) {
  const currentUrl = page.url;
  const links = items
    .map((item) => {
      const selected =
        item.url === '/'
          ? currentUrl === '/'
          : currentUrl === item.url || currentUrl.startsWith(item.url);
      const current = selected ? ' aria-current="page"' : '';

      return `<a class="site-tab${
        selected ? ' selected' : ''
      }" role="tab" aria-selected="${String(selected)}" href="${relative(
        page.url,
        item.url
      )}"${current}>
    <i class="${item.icon}" aria-hidden="true"></i>
    <span>${item.label}</span>
  </a>`;
    })
    .join('\n  ');

  return `
<nav class="site-nav" aria-label="Primary">
  <div class="site-tabs" role="tablist" aria-label="Documentation sections">
  ${links}
  </div>
  <button class="theme-switch" type="button" aria-label="Use dark theme" aria-pressed="false" data-theme-toggle>
    <span class="theme-switch__track" aria-hidden="true">
      <span class="theme-switch__handle">
        <i class="ri-sun-line theme-switch__sun" aria-hidden="true"></i>
        <i class="ri-moon-line theme-switch__moon" aria-hidden="true"></i>
      </span>
    </span>
  </button>
</nav>`;
};
