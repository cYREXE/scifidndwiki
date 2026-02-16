import type { NavSection } from '../types';

export const navigation: NavSection[] = [
  {
    label: 'Classes',
    icon: '⚔️',
    categories: [
      {
        id: 'classes',
        label: 'Character Classes',
        icon: '⚔️',
        basePath: '/classes',
        articles: [
          { slug: 'the-engineer', title: 'The Engineer' },
          { slug: 'the-vanguard', title: 'The Vanguard' },
          { slug: 'the-technomancer', title: 'The Technomancer' },
          { slug: 'the-splicer', title: 'The Splicer' },
          { slug: 'the-thespian', title: 'The Thespian' },
        ],
      },
      {
        id: 'class-spells',
        label: 'Spell Lists',
        icon: '✨',
        basePath: '/classes/spells',
        articles: [
          { slug: 'the-engineer-spells', title: 'Engineer Spells' },
          { slug: 'the-vanguard-spells', title: 'Vanguard Spells' },
          { slug: 'the-technomancer-spells', title: 'Technomancer Spells' },
          { slug: 'the-splicer-spells', title: 'Splicer Spells' },
          { slug: 'the-thespian-spells', title: 'Thespian Spells' },
        ],
      },
    ],
  },
  {
    label: 'Races',
    icon: '👤',
    categories: [
      {
        id: 'races',
        label: 'Playable Races',
        icon: '👤',
        basePath: '/races',
        articles: [
          { slug: 'humans', title: 'Humans' },
          { slug: 'autos', title: 'Autos' },
        ],
      },
    ],
  },
  {
    label: 'Lore',
    icon: '📜',
    categories: [
      {
        id: 'lore-planets',
        label: 'Planets',
        icon: '🌍',
        basePath: '/lore/planets',
        articles: [
          { slug: 'earth', title: 'The Redeemed Earth' },
          { slug: 'obair', title: 'Obair' },
          { slug: 'lalochna', title: 'La Lochna' },
        ],
      },
      {
        id: 'lore-religions',
        label: 'Religions',
        icon: '🕯️',
        basePath: '/lore/religions',
        articles: [
          { slug: 'neo-abraham', title: 'Church of New Abraham' },
          { slug: 'the-communion', title: 'The Communion' },
        ],
      },
    ],
  },
  {
    label: 'Equipment',
    icon: '🔧',
    categories: [
      {
        id: 'items',
        label: 'Items & Gear',
        icon: '🔧',
        basePath: '/items',
        articles: [{ slug: 'equipment', title: 'Equipment & Items' }],
      },
    ],
  },
  {
    label: 'Tools',
    icon: '📋',
    articles: [
      { slug: 'character-sheet', title: 'Character Sheet', basePath: '/tools' },
    ],
  },
];
