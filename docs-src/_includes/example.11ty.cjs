const page = require('./page.11ty.cjs');
const relative = require('./relative-path.cjs');

/**
 * This template extends the page template and adds an examples list.
 */
module.exports = function (data) {
  return page({
    ...data,
    hideBreadcrumbs: true,
    content: renderExample(data),
  });
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const stripTags = (value) =>
  String(value)
    .replace(/<[^>]*>/g, '')
    .trim();

const slugify = (value) =>
  stripTags(value)
    .toLowerCase()
    .replace(/&[a-z0-9#]+;/gi, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'section';

const addHeadingIds = (content) => {
  const headings = [];
  const counts = new Map();
  const html = content.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/g,
    (match, level, attrs, headingContent) => {
      const existing = attrs.match(/\sid=(['"])(.*?)\1/i);
      const baseId = existing?.[2] || slugify(headingContent);
      const count = counts.get(baseId) ?? 0;
      counts.set(baseId, count + 1);
      const id = count === 0 ? baseId : `${baseId}-${count + 1}`;

      headings.push({
        id,
        level: Number(level),
        text: stripTags(headingContent),
      });

      if (existing) return match;
      return `<h${level}${attrs} id="${id}">${headingContent}</h${level}>`;
    }
  );

  return {html, headings};
};

const renderToc = (headings) => {
  if (!headings.length) {
    return `
      <aside class="example-toc" aria-label="Table of contents">
        <strong>Table of contents</strong>
        <p>No sections yet.</p>
      </aside>
    `;
  }

  return `
    <aside class="example-toc" aria-label="Table of contents">
      <strong>Table of contents</strong>
      <ul>
        ${headings
          .map(
            (heading) => `
              <li class="toc-level-${heading.level}">
                <a href="#${escapeHtml(heading.id)}">${escapeHtml(
              heading.text
            )}</a>
              </li>
            `
          )
          .join('')}
      </ul>
    </aside>
  `;
};

const renderExample = ({name, content, collections, page}) => {
  const examples = [...(collections.example ?? [])].sort(
    (a, b) => (a.data.order ?? 0) - (b.data.order ?? 0)
  );
  const {html, headings} = addHeadingIds(content);

  return `
    <section class="examples">
      <nav class="collection" aria-label="Component examples">
        <strong>Components</strong>
        <ws-tabs class="collection-tabs" orientation="vertical" aria-label="Component examples" defer-navigation prefetch>
          ${examples
            .map(
              (post) => `
                <ws-tab${
                  post.url === page.url ? ' selected' : ''
                } href="${relative(page.url, post.url)}">${(
                post.data.name ?? post.data.description
              ).replace(/</g, '&lt;')}</ws-tab>
              `
            )
            .join('')}
        </ws-tabs>
      </nav>
      <div class="example-content">
        <h1>${name}</h1>
        ${html}
      </div>
      ${renderToc(headings)}
    </section>
    <script>
      (() => {
        const tocLinks = Array.from(document.querySelectorAll('.example-toc a'));
        if (!tocLinks.length) return;

        const byId = new Map(tocLinks.map(link => [decodeURIComponent(link.hash.slice(1)), link]));
        const headings = Array.from(document.querySelectorAll('.example-content h2[id], .example-content h3[id]'));

        const setCurrent = id => {
          tocLinks.forEach(link => link.removeAttribute('aria-current'));
          byId.get(id)?.setAttribute('aria-current', 'true');
        };

        tocLinks.forEach(link => {
          link.addEventListener('click', () => setCurrent(decodeURIComponent(link.hash.slice(1))));
        });

        if (!('IntersectionObserver' in window)) {
          setCurrent(headings[0]?.id);
          return;
        }

        const observer = new IntersectionObserver(entries => {
          const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          if (visible?.target?.id) setCurrent(visible.target.id);
        }, {rootMargin: '0px 0px -70% 0px', threshold: 0.1});

        headings.forEach(heading => observer.observe(heading));
        setCurrent(headings[0]?.id);
      })();
    </script>
  `;
};
