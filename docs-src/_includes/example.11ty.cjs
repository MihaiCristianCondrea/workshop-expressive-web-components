const page = require('./page.11ty.cjs');
const relative = require('./relative-path.cjs');

/**
 * This template extends the page template and adds an examples list.
 */
module.exports = function (data) {
  return page({
    ...data,
    content: renderExample(data),
  });
};

const renderExample = ({name, content, collections, page}) => {
  const examples = collections.example ?? [];

  return `
    <h1>${name}</h1>
    <section class="examples">
      <nav class="collection" aria-label="Component examples">
        <strong>Components</strong>
        <ul>
          ${examples
            .map(
              (post) => `
                  <li class="${post.url === page.url ? 'selected' : ''}">
                    <a href="${relative(page.url, post.url)}">${(
                post.data.name ?? post.data.description
              ).replace(/</g, '&lt;')}</a>
                  </li>
                `
            )
            .join('')}
        </ul>
      </nav>
      <div class="example-content">
        ${content}
      </div>
    </section>
  `;
};
