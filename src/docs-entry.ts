import 'remixicon/fonts/remixicon.css';
import './components/button/ws-button.js';
import './components/app-bar/ws-app-bar.js';
import './components/drawer/ws-drawer.js';
import './components/drawer/ws-drawer-item.js';
import './components/brand/ws-brand-mark.js';
import './components/tabs/ws-tabs.js';
import './components/tabs/ws-tab.js';
import './components/breadcrumbs/ws-breadcrumbs.js';
import './components/code-block/ws-code-block.js';
import './components/switch/ws-switch.js';
import './components/card/ws-card.js';
import './components/page/ws-page.js';
import './components/docs-shell/ws-docs-shell.js';
import './components/docs-shell/ws-hero.js';
import './components/docs-shell/ws-footer.js';

const docsTabSelectors =
  'ws-tabs.site-tabs ws-tab, ws-tabs.collection-tabs ws-tab';
const siteLogoSelector = '[data-site-logo]';

const toMilliseconds = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return 240;
  if (trimmed.endsWith('ms')) return Number.parseFloat(trimmed);
  if (trimmed.endsWith('s')) return Number.parseFloat(trimmed) * 1000;
  return Number.parseFloat(trimmed) || 240;
};

const getTabsMotionDuration = (tabs: Element) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 0;

  return toMilliseconds(
    getComputedStyle(tabs).getPropertyValue('--ws-motion-duration-slow')
  );
};

const getTabUrl = (tab: Element) => {
  const href = tab.getAttribute('href');
  return href ? new URL(href, window.location.href) : null;
};

const findDocsTab = (event: Event) =>
  event
    .composedPath()
    .find(
      (target): target is Element =>
        target instanceof Element && target.matches(docsTabSelectors)
    );

const findSiteLogo = (event: Event) =>
  event
    .composedPath()
    .find(
      (target): target is HTMLAnchorElement =>
        target instanceof HTMLAnchorElement && target.matches(siteLogoSelector)
    );

const sameDocument = (url: URL) =>
  url.origin === window.location.origin &&
  url.pathname === window.location.pathname &&
  url.search === window.location.search;

const enhanceDocsTabNavigation = () => {
  document.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const tab = findDocsTab(event);
    const tabs = tab?.closest('ws-tabs');
    const url = tab ? getTabUrl(tab) : null;
    if (!tab || !tabs || !url || url.origin !== window.location.origin) return;
    if (sameDocument(url)) return;

    event.preventDefault();
    window.setTimeout(() => {
      window.location.href = url.href;
    }, getTabsMotionDuration(tabs));
  });
};

const restartBrandAnimation = (logo: HTMLAnchorElement) => {
  const brandMark = logo.querySelector('ws-brand-mark') as {
    restartAnimation?: () => void;
  } | null;
  brandMark?.restartAnimation?.();
};

const enhanceSiteLogoNavigation = () => {
  document.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const logo = findSiteLogo(event);
    const url = logo ? getTabUrl(logo) : null;
    if (!logo || !url || url.origin !== window.location.origin) return;

    restartBrandAnimation(logo);
    if (sameDocument(url)) return;

    event.preventDefault();
    window.setTimeout(() => {
      window.location.href = url.href;
    }, 320);
  });
};

const prefetchDocsTabs = () => {
  const connection = (
    navigator as Navigator & {connection?: {saveData?: boolean}}
  ).connection;
  if (connection?.saveData) return;

  const prefetched = new Set<string>();
  for (const tab of document.querySelectorAll(docsTabSelectors)) {
    const url = getTabUrl(tab);
    if (!url || url.origin !== window.location.origin || sameDocument(url))
      continue;
    if (prefetched.has(url.href)) continue;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url.href;
    link.as = 'document';
    document.head.append(link);
    prefetched.add(url.href);
  }
};

const scheduleDocsTabPrefetch = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(prefetchDocsTabs);
    return;
  }

  globalThis.setTimeout(prefetchDocsTabs, 250);
};

enhanceDocsTabNavigation();
enhanceSiteLogoNavigation();
scheduleDocsTabPrefetch();
