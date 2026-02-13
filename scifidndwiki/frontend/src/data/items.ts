import type { Article } from '../types';

export const itemArticles: Article[] = [
  /* ================================================================
   *  EQUIPMENT & ITEMS
   * ================================================================ */
  {
    id: 'equipment',
    slug: 'equipment',
    title: 'Equipment & Items',
    category: 'items',
    categoryLabel: 'Items',
    summary:
      'Standard-issue weapons, tools, and stimulants available across the galaxy.',
    content: [
      /* ── Melee Weapons ── */
      {
        type: 'heading2',
        text: 'Melee Weapons',
      },
      {
        type: 'trait',
        name: 'Wrench (Strength)',
        description: '<span class="dice">1d6</span> damage.',
      },
      {
        type: 'trait',
        name: 'Baton (Strength)',
        description: '<span class="dice">2d4</span> damage.',
      },
      {
        type: 'trait',
        name: 'Knife (Dexterity)',
        description: '<span class="dice">1d4</span> damage.',
      },
      { type: 'divider' },

      /* ── Ranged Weapons ── */
      {
        type: 'heading2',
        text: 'Ranged Weapons',
      },
      {
        type: 'trait',
        name: 'Handgun (Dexterity)',
        description: '20 meters range. <span class="dice">1d8</span> damage.',
      },
      {
        type: 'trait',
        name: 'Rifle (Dexterity)',
        description: '30 meters range. <span class="dice">2d8</span> damage.',
      },
      { type: 'divider' },

      /* ── Stim Launcher System ── */
      {
        type: 'heading2',
        text: 'Stim Launcher System',
      },
      {
        type: 'trait',
        name: 'Stim Launcher',
        description:
          'Uses stim for ammo, which have different effects. 10 meter range.',
      },
      {
        type: 'trait',
        name: 'Med Stim',
        description: '<span class="dice">1d4</span> healing (Dexterity).',
      },
      {
        type: 'trait',
        name: 'Combat Stim',
        description:
          'Double damage on next attack (can only be used once per short rest per character).',
      },
      {
        type: 'trait',
        name: 'Stun Stim',
        description:
          'Incapacitate creature. If HP is less than 20, sleeps until damaged; if over 20, stunned for 1 turn and has disadvantage on next attack.',
      },
      {
        type: 'trait',
        name: 'Abstracto Stim',
        description:
          'For 4 turns you are affected by a hallucinogenic drug, each stage requires a Constitution saving throw to beat 12. <strong>First stage</strong> (on fail): seeing everything in rough 3d polygons, disadvantage to hit. <strong>Second stage:</strong> seeing everything in 2d, disadvantage to hit plus must roll d20 to move. <strong>Third stage:</strong> everything in abstract shapes and colors, must roll 10+ to stay calm or do one random action. <strong>Fourth stage:</strong> pass out, incapacitated until woken. After surviving all stages: permanent +1 Wisdom, +3 Insight, but permanent &minus;1 to History.',
      },
      {
        type: 'trait',
        name: 'Unstable Stim',
        description:
          'Has the same effect as one of the other four stims, but which is unknown until used.',
      },
      { type: 'divider' },

      /* ── Tools & Medical ── */
      {
        type: 'heading2',
        text: 'Tools & Medical',
      },
      {
        type: 'trait',
        name: 'Technician\'s Tools',
        description:
          'Used to tinker with any technology, from fixing Autos to rewiring locks on doors. Uses Technology skill (INT). Heals <span class="dice">1d6</span> for Autos.',
      },
      {
        type: 'trait',
        name: 'Quick-Seal Polymer Can',
        description:
          'A medical sealant used for quick wound treatment.',
      },
    ],
  },
];
