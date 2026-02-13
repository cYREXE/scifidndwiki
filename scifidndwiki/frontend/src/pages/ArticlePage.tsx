import { Link, useParams } from 'react-router-dom';
import { getArticleBySlug } from '../data/content';
import ArticleRenderer from '../components/ArticleRenderer';

interface ArticlePageProps {
  basePath: string;
  categoryLabel: string;
}

export default function ArticlePage({ basePath, categoryLabel }: ArticlePageProps) {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h1 className="page-title">Article Not Found</h1>
        <p style={{ marginTop: '1rem', color: 'var(--phb-text-muted)' }}>
          The page you seek has been lost to the void.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/">Return to the Compendium</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span className="breadcrumbs__sep">/</span>
        <Link to={basePath}>{categoryLabel}</Link>
        <span className="breadcrumbs__sep">/</span>
        <span className="breadcrumbs__current">{article.title}</span>
      </div>

      {/* Page title */}
      <h1 className="page-title">{article.title}</h1>
      {article.subtitle && <p className="page-subtitle">{article.subtitle}</p>}

      <hr className="article-divider" />

      {/* Article body */}
      <ArticleRenderer content={article.content} />
    </div>
  );
}

/* ─── Route wrappers for each category ─── */

export function ClassArticlePage() {
  return <ArticlePage basePath="/classes" categoryLabel="Classes" />;
}

export function ClassSpellsArticlePage() {
  return <ArticlePage basePath="/classes/spells" categoryLabel="Spell Lists" />;
}

export function PlanetArticlePage() {
  return <ArticlePage basePath="/lore/planets" categoryLabel="Planets" />;
}

export function ReligionArticlePage() {
  return <ArticlePage basePath="/lore/religions" categoryLabel="Religions" />;
}

export function RaceArticlePage() {
  return <ArticlePage basePath="/races" categoryLabel="Races" />;
}

export function ItemArticlePage() {
  return <ArticlePage basePath="/items" categoryLabel="Equipment" />;
}
