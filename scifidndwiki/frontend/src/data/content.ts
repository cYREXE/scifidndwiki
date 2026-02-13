import type { Article } from '../types';
import { classArticles } from './classes';
import { loreArticles } from './lore';
import { raceArticles } from './races';
import { itemArticles } from './items';

export const articles: Article[] = [
  ...classArticles,
  ...loreArticles,
  ...raceArticles,
  ...itemArticles,
];

/* ─── Lookup helpers ─── */

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Article['category']): Article[] {
  return articles.filter((a) => a.category === category);
}
