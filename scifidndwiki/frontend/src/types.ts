/* ─── Content Block Types ─── */

export type ContentBlock =
  | { type: 'quote'; text: string; attribution: string }
  | { type: 'heading2'; text: string }
  | { type: 'heading3'; text: string }
  | { type: 'heading4'; text: string }
  | { type: 'paragraph'; text: string; dropCap?: boolean }
  | { type: 'image'; src: string; alt: string; caption?: string; float?: 'left' | 'right' | 'full' }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'unordered-list'; items: string[] }
  | { type: 'stat-block'; entries: StatEntry[] }
  | { type: 'trait'; name: string; description: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'spell-block'; name: string; level: string; properties: StatEntry[]; description: string }
  | { type: 'divider' };

export interface StatEntry {
  label: string;
  value: string;
}

/* ─── Article ─── */

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: CategoryId;
  categoryLabel: string;
  bannerImage?: string;
  summary: string;
  content: ContentBlock[];
}

/* ─── Navigation ─── */

export type CategoryId =
  | 'classes'
  | 'class-spells'
  | 'lore-planets'
  | 'lore-religions'
  | 'races'
  | 'items';

export interface NavCategory {
  id: CategoryId;
  label: string;
  icon: string;
  basePath: string;
  articles: { slug: string; title: string }[];
}

export interface NavSection {
  label: string;
  icon: string;
  basePath?: string;
  categories?: NavCategory[];
  articles?: { slug: string; title: string; basePath: string }[];
}
