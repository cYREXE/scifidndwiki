import type { ContentBlock } from '../types';

interface ArticleRendererProps {
  content: ContentBlock[];
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  return (
    <div className="article">
      {content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

/* ─── Individual Block Renderer ─── */

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'quote':
      return (
        <blockquote className="flavor-quote">
          <span className="flavor-quote__text">{block.text}</span>
          <span className="flavor-quote__attribution">{block.attribution}</span>
        </blockquote>
      );

    case 'heading2':
      return <h2 className="heading-2">{block.text}</h2>;

    case 'heading3':
      return <h3 className="heading-3">{block.text}</h3>;

    case 'heading4':
      return <h4 className="heading-4">{block.text}</h4>;

    case 'paragraph':
      return (
        <p
          className={`article-paragraph ${block.dropCap ? 'drop-cap' : ''}`}
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );

    case 'image':
      return (
        <figure
          className={`article-image ${
            block.float === 'right'
              ? 'article-image--float-right'
              : block.float === 'left'
                ? 'article-image--float-left'
                : 'article-image--full'
          }`}
        >
          <img src={block.src} alt={block.alt} loading="lazy" />
          {block.caption && (
            <figcaption className="article-image__caption">{block.caption}</figcaption>
          )}
        </figure>
      );

    case 'ordered-list':
      return (
        <ol className="article-list">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      );

    case 'unordered-list':
      return (
        <ul className="article-list">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );

    case 'stat-block':
      return (
        <div className="stat-block">
          {block.entries.map((entry, i) => (
            <div key={i} className="stat-block__entry">
              <span className="stat-block__label">{entry.label}</span>
              <span
                className="stat-block__value"
                dangerouslySetInnerHTML={{ __html: entry.value }}
              />
            </div>
          ))}
        </div>
      );

    case 'trait':
      return (
        <div className="trait-block">
          <span className="trait-block__name">{block.name}.</span>
          <span className="trait-block__sep"> </span>
          <span
            className="trait-block__description"
            dangerouslySetInnerHTML={{ __html: block.description }}
          />
        </div>
      );

    case 'table':
      return (
        <div className="class-table-wrapper">
          <table className="class-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'spell-block':
      return (
        <div className="spell-block">
          <div className="spell-block__header">
            <h3 className="spell-block__name">{block.name}</h3>
            <span className="spell-block__level">{block.level}</span>
          </div>
          <div className="spell-block__properties">
            {block.properties.map((prop, i) => (
              <div key={i} className="spell-block__prop">
                <span className="spell-block__prop-label">{prop.label}:</span>{' '}
                <span dangerouslySetInnerHTML={{ __html: prop.value }} />
              </div>
            ))}
          </div>
          <div
            className="spell-block__description"
            dangerouslySetInnerHTML={{ __html: block.description }}
          />
        </div>
      );

    case 'divider':
      return <hr className="article-divider" />;

    default:
      return null;
  }
}
