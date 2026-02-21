import type { Article, ContentBlock, CategoryId } from '../types';
import { articles } from './content';

export interface SearchResult {
  article: Article;
  snippet: string;
}

const CATEGORY_BASE_PATH: Record<CategoryId, string> = {
  classes: '/classes',
  'class-spells': '/classes/spells',
  'lore-planets': '/lore/planets',
  'lore-religions': '/lore/religions',
  races: '/races',
  items: '/items',
};

export function getArticlePath(a: Article): string {
  return `${CATEGORY_BASE_PATH[a.category]}/${a.slug}`;
}

const STRIP_HTML = /<[^>]+>/g;

function extractText(blocks: ContentBlock[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case 'paragraph':
          return b.text;
        case 'heading2':
        case 'heading3':
        case 'heading4':
          return b.text;
        case 'quote':
          return `${b.text} ${b.attribution}`;
        case 'trait':
          return `${b.name} ${b.description}`;
        case 'spell-block':
          return `${b.name} ${b.level} ${b.description}`;
        case 'stat-block':
          return b.entries.map((e) => `${e.label} ${e.value}`).join(' ');
        case 'ordered-list':
        case 'unordered-list':
          return b.items.join(' ');
        case 'table':
          return [...b.headers, ...b.rows.flat()].join(' ');
        default:
          return '';
      }
    })
    .join(' ')
    .replace(STRIP_HTML, '');
}

/**
 * Search all articles for a keyword and return results grouped by categoryLabel.
 */
export function searchArticles(query: string): Map<string, SearchResult[]> {
  const q = query.toLowerCase().trim();
  if (!q) return new Map();

  const grouped = new Map<string, SearchResult[]>();

  for (const article of articles) {
    const fullText =
      `${article.title} ${article.subtitle ?? ''} ${article.summary} ${extractText(article.content)}`.toLowerCase();

    const idx = fullText.indexOf(q);
    if (idx === -1) continue;

    const start = Math.max(0, idx - 50);
    const end = Math.min(fullText.length, idx + q.length + 50);
    let snippet = fullText.slice(start, end).trim();
    if (start > 0) snippet = '...' + snippet;
    if (end < fullText.length) snippet = snippet + '...';

    const group = grouped.get(article.categoryLabel) ?? [];
    group.push({ article, snippet });
    grouped.set(article.categoryLabel, group);
  }

  return grouped;
}
