import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchArticles, getArticlePath } from '../data/search';
import type { SearchResult } from '../data/search';

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const initial = params.get('q') ?? '';
  const [query, setQuery] = useState(initial);

  const results = useMemo(() => searchArticles(query), [query]);
  const totalCount = useMemo(
    () => Array.from(results.values()).reduce((n, r) => n + r.length, 0),
    [results],
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setQuery(v);
    setParams(v ? { q: v } : {}, { replace: true });
  }

  return (
    <div>
      <h1 className="page-title">Search</h1>
      <p className="page-subtitle">Search the Compendium by keyword</p>
      <hr className="article-divider" />

      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for classes, spells, planets, traits..."
          autoFocus
        />
      </div>

      {query.trim().length > 0 && (
        <p className="search-count">
          {totalCount} result{totalCount !== 1 ? 's' : ''} for "<strong>{query.trim()}</strong>"
        </p>
      )}

      {totalCount === 0 && query.trim().length > 0 && (
        <div className="search-empty">
          <p>No results found. Try a different keyword.</p>
        </div>
      )}

      <div className="search-results">
        {Array.from(results.entries()).map(([categoryLabel, items]) => (
          <SearchGroup key={categoryLabel} label={categoryLabel} items={items} query={query} />
        ))}
      </div>
    </div>
  );
}

function SearchGroup({
  label,
  items,
  query,
}: {
  label: string;
  items: SearchResult[];
  query: string;
}) {
  return (
    <div className="search-group">
      <h2 className="search-group__label">{label}</h2>
      {items.map((r) => (
        <Link
          key={r.article.id}
          to={getArticlePath(r.article)}
          className="search-result"
        >
          <span className="search-result__title">{r.article.title}</span>
          {r.article.subtitle && (
            <span className="search-result__subtitle">{r.article.subtitle}</span>
          )}
          <span className="search-result__snippet">
            <Highlight text={r.snippet} query={query} />
          </span>
        </Link>
      ))}
    </div>
  );
}

function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.toLowerCase().trim();
  if (!q) return <>{text}</>;

  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const idx = remaining.toLowerCase().indexOf(q);
    if (idx === -1) {
      parts.push(remaining);
      break;
    }
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push(
      <mark key={key++} className="search-highlight">
        {remaining.slice(idx, idx + q.length)}
      </mark>,
    );
    remaining = remaining.slice(idx + q.length);
  }

  return <>{parts}</>;
}
