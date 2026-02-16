import type { Article } from '../types';

export const raceArticles: Article[] = [
  /* ================================================================
   *  RACE: AUTOS
   * ================================================================ */
  {
    id: 'autos',
    slug: 'autos',
    title: 'Autos',
    subtitle: 'Androids, Robots, Synthetics',
    category: 'races',
    categoryLabel: 'Races',
    bannerImage: '/images/races/autos/portrait.png',
    summary:
      'Complex, self-aware machines. Superior processing power but vulnerable to cascade failures and emotional subtlety.',
    content: [
      {
        type: 'image',
        src: '/images/races/autos/portrait.png',
        alt: 'Autos',
        float: 'right',
      },
      {
        type: 'paragraph',
        text: 'Autos (Androids, Robots, Synthetics) are complex, self-aware machines. They require less life support and have superior processing power, but they struggle with organic limitations and emotional subtlety.',
        dropCap: true,
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Racial Traits',
      },
      {
        type: 'trait',
        name: 'Attribute Score',
        description:
          'Your Intelligence score increases by 2, and your Constitution score increases by 1.',
      },
      {
        type: 'trait',
        name: 'Size',
        description: 'Medium (Typically between 5 and 7 feet tall).',
      },
      {
        type: 'trait',
        name: 'Speed',
        description: '30 feet.',
      },
      {
        type: 'trait',
        name: 'Construct Nature',
        description:
          'You do not need to eat, drink, or breathe. You are immune to disease and being poisoned. You do not sleep and instead enter a dormant state for 4 hours a day to perform software maintenance. You have disadvantage on Dexterity(sneak) because of your mechanical joints, however you do survive dismemberment',
      },
      {
        type: 'trait',
        name: 'Crossed Wires',
        description:
          'Your complex internal systems are vulnerable to cascade failures when heavily damaged. If you begin your turn with 5 hit points or fewer, you have disadvantage on all attack rolls and ability checks until the start of your next turn. This effect ends if you are healed above 5 hit points. Furthermore, when you take damage, you can only regain hit points through the use of Technician\'s Tools (repairing yourself or being repaired by another character using the tools). Standard healing items or medical kits have no effect on you.',
      },
      {
        type: 'trait',
        name: 'Integrated Tools',
        description:
          'You gain proficiency with the Technician\'s Tools (used for repair, slicing, and diagnostics). When making an ability check with Technician\'s Tools, you can add twice your proficiency bonus, instead of your normal proficiency bonus.',
      },
      {
        type: 'trait',
        name: 'Durable Plating',
        description:
          'When you aren\'t wearing armour, your AC is 14 + your Dexterity modifier. You can use your natural plating to determine your AC if the armour you wear would leave you with a lower AC. A shield\'s benefits apply as normal while you use your natural AC.',
      },
      {
        type: 'trait',
        name: 'LiDAR Vision',
        description: 'You have Darkvision out to a range of 60 feet.',
      },
    ],
  },

  /* ================================================================
   *  RACE: HUMANS
   * ================================================================ */
  {
    id: 'humans',
    slug: 'humans',
    title: 'Humans',
    category: 'races',
    categoryLabel: 'Races',
    bannerImage: '/images/races/humans/portrait.png',
    summary:
      'Adaptable and resourceful, 25th-century humans possess specialized knowledge and emergency instincts honed by centuries of expansion.',
    content: [
      {
        type: 'image',
        src: '/images/races/humans/portrait.png',
        alt: 'Humans',
        float: 'right',
      },
      {
        type: 'paragraph',
        text: 'Humans remain the most adaptable and resourceful species in the galaxy. Centuries of expansion across the stars have honed their instincts and broadened their expertise, producing individuals capable of thriving in any environment — from the gleaming spires of Earth to the dust-choked mines of frontier colonies.',
        dropCap: true,
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Racial Traits',
      },
      {
        type: 'trait',
        name: 'Attribute Score',
        description:
          'One ability score of your choice increases by 2, and a different ability score of your choice increases by 1.',
      },
      {
        type: 'trait',
        name: 'Size',
        description: 'Medium (5 to 6 feet tall).',
      },
      {
        type: 'trait',
        name: 'Speed',
        description: '30 feet.',
      },
      {
        type: 'trait',
        name: 'Emergency Protocols',
        description:
          'You are instinctively good at reacting to sudden dangers. You gain proficiency with Light Armor.',
      },
      {
        type: 'trait',
        name: '25th Century Wisdom',
        description:
          'Mankind\'s mastery over complex systems and diagnostics means that even basic education covers vast areas of specialized knowledge. You gain proficiency in one of the following skills: Investigation, Medicine, or Technology (a custom skill). Furthermore, once per long rest, you can expend a small amount of mental effort to temporarily gain expertise in a field you are proficient in. Choose one skill in which you have proficiency; you can add twice your proficiency bonus to the next ability check you make with that skill.',
      },
    ],
  },
];
