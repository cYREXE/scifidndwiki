import { Link, useLocation } from 'react-router-dom';
import { getArticlesByCategory } from '../data/content';
import type { CategoryId } from '../types';

/* Map URL paths to category IDs and display info */
const categoryMap: Record<
  string,
  { categoryId: CategoryId; title: string; subtitle: string; icon: string; basePath: string }
> = {
  '/classes': {
    categoryId: 'classes',
    title: 'Character Classes',
    subtitle: 'Choose your role among the stars',
    icon: '⚔️',
    basePath: '/classes',
  },
  '/classes/spells': {
    categoryId: 'class-spells',
    title: 'Spell Lists',
    subtitle: 'Programs, abilities, and techniques by class',
    icon: '✨',
    basePath: '/classes/spells',
  },
  '/races': {
    categoryId: 'races',
    title: 'Playable Races',
    subtitle: 'The peoples of the 25th century',
    icon: '👤',
    basePath: '/races',
  },
  '/lore/planets': {
    categoryId: 'lore-planets',
    title: 'Planets & Places',
    subtitle: 'Worlds of the known galaxy',
    icon: '🌍',
    basePath: '/lore/planets',
  },
  '/lore/religions': {
    categoryId: 'lore-religions',
    title: 'Religions & Faiths',
    subtitle: 'Belief systems of the void',
    icon: '🕯️',
    basePath: '/lore/religions',
  },
  '/items': {
    categoryId: 'items',
    title: 'Equipment & Items',
    subtitle: 'Weapons, tools, and gear',
    icon: '🔧',
    basePath: '/items',
  },
};

export default function CategoryPage() {
  const location = useLocation();
  const info = categoryMap[location.pathname];

  if (!info) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h1 className="page-title">Category Not Found</h1>
        <p>
          <Link to="/">Return to the Compendium</Link>
        </p>
      </div>
    );
  }

  const articlesList = getArticlesByCategory(info.categoryId);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span className="breadcrumbs__sep">/</span>
        <span className="breadcrumbs__current">{info.title}</span>
      </div>

      <div className="category-page__header">
        <h1 className="page-title">
          {info.icon} {info.title}
        </h1>
        <p className="page-subtitle">{info.subtitle}</p>
      </div>

      <hr className="article-divider" />

      <div className="article-list-grid">
        {articlesList.map((article) => (
          <Link
            key={article.id}
            to={`${info.basePath}/${article.slug}`}
            className="article-card"
          >
            {article.bannerImage && (
              <img
                src={article.bannerImage}
                alt={article.title}
                className="article-card__thumb"
              />
            )}
            <div className="article-card__body">
              <div className="article-card__title">{article.title}</div>
              <div className="article-card__summary">{article.summary}</div>
            </div>
          </Link>
        ))}

        {articlesList.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--phb-text-muted)', padding: '2rem' }}>
            No entries yet. Check back as the compendium grows.
          </p>
        )}
      </div>
    </div>
  );
}
