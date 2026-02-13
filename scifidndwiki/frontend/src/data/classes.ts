import type { Article } from '../types';

export const classArticles: Article[] = [
  /* ================================================================
   *  CLASS: THE ENGINEER — Description
   * ================================================================ */
  {
    id: 'the-engineer',
    slug: 'the-engineer',
    title: 'The Engineer',
    category: 'classes',
    categoryLabel: 'Classes',
    bannerImage: '/images/classes/the-engineer/portrait.png',
    summary:
      'Durable, highly trained technicians capable of handling catastrophic systems failure and heavy machinery. The essential lifelines of any crew.',
    content: [
      {
        type: 'image',
        src: '/images/classes/the-engineer/portrait.png',
        alt: 'The Engineer',
        float: 'right',
      },
      {
        type: 'paragraph',
        text: 'Durable, highly trained technicians capable of handling catastrophic systems failure and heavy machinery. They are the essential lifelines of any crew, valued for their ability to fix anything, from a leaking cryogenic pipe to a fried FTL drive core.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'The Engineer is the backbone of interstellar travel. You are not a theorist confined to a clean lab; you are a problem-solver who operates where the danger is greatest — deep in the engine room, crawling through maintenance conduits, or patching holes in the hull. Your expertise is comprehensive, spanning from delicate circuit splicing to heavy-duty welding and structural stabilization.',
      },
      {
        type: 'paragraph',
        text: 'This hands-on, high-risk work demands specialization beyond mere training. To prevent devastating accidents common to high-energy systems, many Engineers undergo a procedure to install <strong>Bio-Conduits</strong>: internal metal conductors, often anchored by a specialized plate in the forearm or a modified cybernetic hand. This augmentation allows you to channel and disperse massive electrical currents harmlessly, making you immune to typical electrical shorts and even weaponized discharges.',
      },
      {
        type: 'paragraph',
        text: 'As a result of constant physical labor and carrying dense metal augmentations, you tend to be solidly built — strong, muscled, and deliberate in your movements. You rely on rugged, mid-grade armor and heavy-duty modified tools, which you can use for everything from emergency field repairs to stunning a hostile target with a focused <strong>Foul Discharge</strong>. Your mission is always to keep the systems running and the crew alive, no matter the cost.',
      },
      { type: 'divider' },
      {
        type: 'stat-block',
        entries: [
          { label: 'Primary Attributes', value: 'Intelligence, Constitution' },
          { label: 'Hit Dice', value: '<span class="dice">1d10</span> per Engineer level' },
          {
            label: 'Proficiencies',
            value:
              '<strong>Armor:</strong> Light and Medium Armor, Shields. <strong>Weapons:</strong> Simple Weapons, plus Blaster Pistols and Heavy Tools (Wrenches used in combat).',
          },
          { label: 'Saving Throws', value: 'Constitution, Intelligence' },
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Table',
      },
      {
        type: 'table',
        headers: ['Level', 'Prof. Bonus', 'Class Features', 'Battery', 'Cantrips', 'Prep. Spells', '1st', '2nd', '3rd'],
        rows: [
          ['1', '+2', 'Bio-Conduit, Foul Discharge, Field Repair', '3', '2', '2', '2', '-', '-'],
          ['2', '+2', 'Overclocked Strike', '3', '3', '3', '2', '1', '-'],
          ['3', '+2', 'Kinetic Grounding', '4', '3', '4', '2', '2', '-'],
          ['4', '+2', 'ASI, Structural Insight', '4', '4', '5', '3', '2', '-'],
          ['5', '+3', 'Extra Attack, Chain Discharge', '5', '4', '6', '3', '3', '1'],
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Features',
      },
      {
        type: 'trait',
        name: 'Bio-Conduit (Level 1)',
        description:
          'Your cybernetic metal implants make you a superb conductor. You have automatic <strong>resistance to electrical damage</strong>, and any electrical attack against you has <strong>disadvantage</strong>.',
      },
      {
        type: 'trait',
        name: 'Foul Discharge (Level 1)',
        description:
          'Starting at 1st level, you can use your implanted conductivity to deliver a shock. You force a creature within 5 meters to make a <strong>DC 13 Constitution Saving Throw</strong>. On a failed save, the target takes <span class="dice">1d8</span> Lightning damage. If the target is an Auto, machine, or wearing heavy metal armor, it has <strong>disadvantage</strong> on the saving throw. This action empties the battery embedded within you — at first you have a total of 3 uses before it is depleted. You recharge by either receiving electrical damage or finding a source of electricity. Both damage and capacity increase at higher levels.',
      },
      {
        type: 'trait',
        name: 'Field Repair (Level 1)',
        description:
          'You are uniquely skilled at patching up mechanical systems under pressure. You can use Technician\'s Tools to attempt to repair yourself (if you\'re an Auto) or an Auto (if you are Human) or another machine as a <strong>bonus action</strong>, restoring <span class="dice">1d6</span> hit points or temporary hit points. You can use this a number of times equal to your proficiency bonus per long rest.',
      },
      {
        type: 'trait',
        name: 'Overclocked Strike (Level 2)',
        description:
          'Starting at 2nd level, you can channel your Bio-Conduit\'s energy directly into your tools. When you hit a creature with a melee weapon attack (like your Heavy Wrench), you can expend 1 Battery charge to deal an extra <span class="dice">1d6</span> lightning damage to the target. This damage increases to <span class="dice">2d6</span> if the target is an Auto, a machine, or wearing heavy metal armor.',
      },
      {
        type: 'trait',
        name: 'Kinetic Grounding (Level 3)',
        description:
          'Your body has become a literal shock absorber for the world around you. When you take damage from a source you can see, you can use your <strong>reaction</strong> to brace yourself. You gain <strong>Resistance</strong> to the damage from that attack. If the damage type was Lightning, you instead take <strong>no damage</strong> and regain 1 Battery charge. You can use this feature a number of times equal to your Constitution modifier per long rest.',
      },
      {
        type: 'trait',
        name: 'Ability Score Improvement (Level 4)',
        description:
          'You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.',
      },
      {
        type: 'trait',
        name: 'Structural Insight (Level 4)',
        description:
          'Your eyes are trained to see the "stress lines" in everything. Your melee weapon attacks deal <strong>double damage</strong> to objects and structures. When you use your Quick Diagnostic cantrip on a target, the bonus to your next attack roll increases from +2 to your Intelligence modifier. You are considered one size larger when determining your carrying capacity and the weight you can push, drag, or lift.',
      },
      {
        type: 'trait',
        name: 'Chain Discharge (Level 5)',
        description:
          'Your control over your Bio-Conduit allows you to arc energy between enemies. When you use Foul Discharge, if the primary target fails their saving throw, you can expend 1 additional Battery charge to cause the lightning to leap to a second creature within 3 meters of the first. The second creature must make the same saving throw or take the same damage. At 5th level, the base damage of Foul Discharge also increases to <span class="dice">2d8</span>.',
      },
      { type: 'divider' },
      {
        type: 'image',
        src: '/images/classes/the-engineer/level5.png',
        alt: 'The Engineer at the height of their power',
        caption: 'A fully realized Engineer — master of Bio-Conduit energy and the most powerful version of their class.',
        float: 'full',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE ENGINEER — Spells
   * ================================================================ */
  {
    id: 'the-engineer-spells',
    slug: 'the-engineer-spells',
    title: 'Engineer Spells',
    subtitle: 'Programs & Discharges',
    category: 'class-spells',
    categoryLabel: 'Class Spells',
    bannerImage: '/images/classes/the-engineer/portrait.png',
    summary:
      'The complete list of spells available to the Engineer class, from cantrips like Foul Discharge and Quick Diagnostic to devastating 2nd-level programs like Diabolical Discharge.',
    content: [
      /* ── Cantrips ── */
      { type: 'heading2', text: 'Cantrips' },
      {
        type: 'spell-block',
        name: 'Foul Discharge',
        level: 'Evocation cantrip',
        properties: [
          { label: 'Casting Time', value: '1 Bonus action' },
          { label: 'Range', value: '5 meters' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'You channel the raw, unrefined energy stored in your internal conduits into a nearby target. Choose a creature within range; it must make a <strong>Constitution saving throw</strong> against a fixed <strong>DC 13</strong>. On a failed save, the target takes <span class="dice">1d8</span> lightning damage. If the target is an Auto, a machine, or a creature wearing heavy metal armor, it has <strong>disadvantage</strong> on the saving throw. This cantrip requires energy from your Bio-Conduit. Each use consumes 1 charge of your Battery Capacity. You cannot cast this cantrip if your battery is depleted. You regain charges by receiving lightning damage (1 charge per instance of damage) or by spending 1 minute connected to a power source.',
      },
      {
        type: 'spell-block',
        name: 'Kinetic Rebound',
        level: 'Transmutation cantrip',
        properties: [
          { label: 'Casting Time', value: '1 reaction (when hit by melee)' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'The creature that hit you must succeed on a <strong>Strength saving throw</strong> or be pushed 2 meters away from you. If the target is made of metal or wearing heavy metal armor, it has <strong>advantage</strong> on the saving throw.',
      },
      {
        type: 'spell-block',
        name: 'Thermal Grip',
        level: 'Transmutation cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Touch' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Permanent (until broken)' },
        ],
        description:
          'You touch two metal objects together and fuse them. Alternatively, you can seal a small breach in a hull or pipe. <strong>Combat Use:</strong> If used on a creature wearing metal armor, their AC increases by 1, but their movement speed is reduced by 3 meters until they use an action to break the weld (Strength check vs. your Spell Save DC). <strong>Utility:</strong> This can "lock" a standard metal door or repair minor structural damage.',
      },
      {
        type: 'spell-block',
        name: 'Magnetize Grip',
        level: 'Transmutation cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '10 meters' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'You target a metal object weighing no more than 10kg. <strong>If cast on a surface:</strong> any creature made of metal or wearing heavy metal armor starting its turn within 2 meters must succeed on a Strength save or have speed reduced to 0. <strong>If cast on a weapon:</strong> you can pull a disarmed metal weapon to your hand.',
      },
      {
        type: 'spell-block',
        name: 'Quick Diagnostic',
        level: 'Divination cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '10 meters' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'You immediately learn: <strong>Integrity Status</strong> (full / damaged / critical), <strong>Fault Detection</strong> (specific cause of malfunction), <strong>Weak Point</strong> (if enemy Auto/robot, your next attack roll has +2 bonus).',
      },

      /* ── 1st-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '1st-Level Spells' },
      {
        type: 'spell-block',
        name: 'Arc Flash',
        level: '1st-level Evocation',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '5-meter cone' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'You short-circuit your Bio-Conduit to create a blinding burst of electricity. Each creature in the cone must make a <strong>Constitution saving throw</strong>. On a failed save, <span class="dice">1d8</span> lightning damage and <strong>Blinded</strong> until the end of their next turn. On a success, half damage, not blinded. <strong>Battery Synergy:</strong> Expend 1 Battery charge to increase damage by <span class="dice">1d8</span> and increase range to a 10-meter cone.',
      },
      {
        type: 'spell-block',
        name: 'Siphon',
        level: '1st-level Necromancy',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Touch' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Make a melee spell attack. On a hit, target takes <span class="dice">1d4</span> lightning damage. If the target is an Auto, machine, or carries a battery, restore 1 Battery charge.',
      },
      {
        type: 'spell-block',
        name: 'Percussive Maintenance',
        level: '1st-level Transmutation',
        properties: [
          { label: 'Casting Time', value: '1 bonus action' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Your next melee weapon attack deals an extra <span class="dice">1d6</span> force damage. If the target is an Auto, construct, or mechanical creature, it must succeed on a <strong>Strength save</strong> or be <strong>Stunned</strong> until the end of your next turn. <em>At Higher Levels:</em> +<span class="dice">1d6</span> per slot above 1st.',
      },

      /* ── 2nd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '2nd-Level Spells' },
      {
        type: 'spell-block',
        name: 'Kinetic Redirection',
        level: '2nd-level Abjuration',
        properties: [
          { label: 'Casting Time', value: '1 Reaction' },
          { label: 'Range', value: '2 meters' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Reduce incoming ranged attack damage by <span class="dice">2d10</span> + Intelligence modifier. If reduced to 0, redirect the projectile to a different target within 5 meters.',
      },
      {
        type: 'spell-block',
        name: 'Pressure Weld',
        level: '2nd-level Evocation',
        properties: [
          { label: 'Casting Time', value: '1 Action' },
          { label: 'Range', value: 'Self (5-meter radius)' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'You vent a burst of steam or coolant. Each creature within 5 meters makes a <strong>Constitution save</strong>. On a failure, <span class="dice">3d6</span> Fire or Cold damage (your choice) and speed halved until the start of your next turn.',
      },
      {
        type: 'spell-block',
        name: 'Magnetic Tether',
        level: '2nd-level Transmutation',
        properties: [
          { label: 'Casting Time', value: '1 Action' },
          { label: 'Range', value: '10 meters' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Target makes a <strong>Strength save</strong>. On failure, the target is <strong>Restrained</strong>. As an action on subsequent turns, you can pull the restrained creature up to 5 meters toward you.',
      },
      {
        type: 'spell-block',
        name: 'Diabolical Discharge',
        level: '2nd-level Evocation',
        properties: [
          { label: 'Casting Time', value: '1 Action' },
          { label: 'Range', value: '10 meters' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
          { label: 'Cost', value: '2 Battery Charges' },
        ],
        description:
          'Target makes a <strong>Constitution save</strong>. On failure: <span class="dice">4d8</span> lightning damage and <strong>Paralyzed</strong> until end of next turn. On success: half damage, not paralyzed. Auto / machine / heavy metal armor: <strong>disadvantage</strong> on save, paralysis lasts an additional round. <em>At Higher Levels:</em> +<span class="dice">1d8</span> per slot above 2nd.',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE VANGUARD — Description
   * ================================================================ */
  {
    id: 'the-vanguard',
    slug: 'the-vanguard',
    title: 'The Vanguard',
    category: 'classes',
    categoryLabel: 'Classes',
    bannerImage: '/images/classes/the-vanguard/portrait.png',
    summary:
      'The highest tier of security and tactical response, trained to handle threats from internal sabotage and piracy to deep-space biological anomalies.',
    content: [
      {
        type: 'image',
        src: '/images/classes/the-vanguard/portrait.png',
        alt: 'The Vanguard',
        float: 'right',
      },
      {
        type: 'paragraph',
        text: 'The Vanguard represents the highest tier of security and tactical response, trained to handle threats ranging from internal sabotage and piracy to deep-space biological anomalies. Whether serving as a corporate marine, a private security detail, or a planetary defence trooper, your life has been dedicated to preparation, positioning, and high-stakes engagement.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'You are defined by your mastery of modern weaponry and your commitment to the survival of your unit. You focus on tactical awareness and defensive manoeuvres. You train constantly to react faster than anyone else, using kinetic and plasma-based firearms with deadly efficiency.',
      },
      {
        type: 'paragraph',
        text: 'Your augmentations are usually military-grade — subdermal ballistic plating, enhanced sensory arrays, or specialized combat processors — all designed to make you a human shield for your allies. You are the one who sets the perimeter, and knows exactly how many shots it takes to stop an enemy dead in its tracks. You rely on heavy armour, precision movement, and the sheer force of modern firepower.',
      },
      { type: 'divider' },
      {
        type: 'stat-block',
        entries: [
          { label: 'Primary Ability', value: 'Dexterity' },
          { label: 'Hit Dice', value: '<span class="dice">1d10</span> per Vanguard level' },
          {
            label: 'Proficiencies',
            value:
              '<strong>Armor:</strong> All Armor (Light, Medium, Heavy), Shields. <strong>Weapons:</strong> Simple and Martial Weapons, All Ranged Weapons (Rifles, Pistols, Heavy).',
          },
          { label: 'Saving Throws', value: 'Strength, Constitution' },
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Table',
      },
      {
        type: 'table',
        headers: ['Level', 'Prof. Bonus', 'Class Features', 'Cantrips', 'Prep. Spells', '1st', '2nd', '3rd'],
        rows: [
          ['1', '+2', 'Combat Reflexes, Defensive Posture', '2', '4', '2', '-', '-'],
          ['2', '+2', 'Specialized Training', '3', '5', '2', '1', '-'],
          ['3', '+2', 'Quick-draw', '3', '6', '2', '2', '-'],
          ['4', '+2', 'ASI, Integrated Weapon Link', '3', '7', '3', '2', '-'],
          ['5', '+3', 'The Indomitable Human Spirit', '3', '8', '3', '3', '1'],
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Features',
      },
      {
        type: 'trait',
        name: 'Combat Reflexes (Level 1)',
        description:
          'Your training allows you to react instantly to threats. You gain proficiency in the <strong>Perception</strong> skill. When surprised, you can spend your reaction to make a single ranged or melee attack against one creature that surprised you.',
      },
      {
        type: 'trait',
        name: 'Defensive Posture (Level 1)',
        description:
          'As a <strong>bonus action</strong> on your turn, you can enter a defensive posture until the start of your next turn. While in this posture, your AC increases by 1, and you gain <strong>advantage</strong> on saving throws against being frightened. You can use this a number of times equal to your proficiency bonus per long rest.',
      },
      {
        type: 'trait',
        name: 'Specialized Training (Level 2)',
        description:
          'You know how to maximize the damage output. When you hit a creature, you can reroll any damage die that results in a 1 or 2, but you must use the new roll, even if the new roll is also a 1 or 2. You can do this twice per long rest.',
      },
      {
        type: 'trait',
        name: 'Quick-draw (Level 3)',
        description:
          'Before a fight starts, no matter what you rolled in initiative, you can choose a creature to target. If you\'re using a handgun you don\'t need to roll to hit; if you\'re using a rifle you have to make an attack roll. This does <strong>not</strong> work with heavy weaponry or daggers.',
      },
      {
        type: 'trait',
        name: 'Ability Score Improvement (Level 4)',
        description:
          'You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.',
      },
      {
        type: 'trait',
        name: 'Integrated Weapon Link (Level 4)',
        description:
          'A neural link connects your optics directly to your firearm\'s targeting computer, compensating for recoil and windage. Being within 5 feet of a hostile creature doesn\'t impose <strong>disadvantage</strong> on your ranged attack rolls. Additionally, when you use your Focus cantrip, the extra damage increases from <span class="dice">1d4</span> to <span class="dice">1d8</span> Radiant damage.',
      },
      {
        type: 'trait',
        name: 'The Indomitable Human Spirit (Level 5)',
        description:
          'You can force your body to perform at a temporal pace that others cannot follow. Once per long rest, at the end of your turn, you can choose to immediately take one <strong>additional turn</strong>. During this extra turn, any Vanguard spells (level 2 or lower) you cast do not expend spell slots. Additionally, any weapon attacks made during this turn deal an extra <span class="dice">1d8</span> Kinetic damage. This surge is immensely taxing — once the extra turn ends, you cannot use your Reaction or your Defensive Posture feature until the end of your next turn.',
      },
      { type: 'divider' },
      {
        type: 'image',
        src: '/images/classes/the-vanguard/level5.png',
        alt: 'The Vanguard at the height of their power',
        caption: 'A fully realized Vanguard — an indomitable force of modern firepower and the most powerful version of their class.',
        float: 'full',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE VANGUARD — Spells
   * ================================================================ */
  {
    id: 'the-vanguard-spells',
    slug: 'the-vanguard-spells',
    title: 'Vanguard Spells',
    subtitle: 'Tactical Programs & Combat Protocols',
    category: 'class-spells',
    categoryLabel: 'Class Spells',
    bannerImage: '/images/classes/the-vanguard/portrait.png',
    summary:
      'The complete list of spells available to the Vanguard class, from cantrips like Focus and Suppressive Fire to the devastating 3rd-level Null-Point Grenade.',
    content: [
      /* ── Cantrips ── */
      { type: 'heading2', text: 'Cantrips' },
      {
        type: 'spell-block',
        name: 'Focus',
        level: 'Cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 minute' },
        ],
        description:
          'You focus on a target with intense precision. The next attack roll made against the target before the end of your next turn has <strong>Advantage</strong>. If the attack hits, it deals an extra <span class="dice">1d4</span> Radiant damage.',
      },
      {
        type: 'spell-block',
        name: 'Suppressive Fire',
        level: 'Cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '30 feet' },
          { label: 'Components', value: 'S, M (Rifle)' },
          { label: 'Duration', value: '1 round' },
        ],
        description:
          'Target must make a <strong>Wisdom saving throw</strong>. On failure, speed is halved and takes a penalty to its next attack roll equal to your proficiency bonus.',
      },
      {
        type: 'spell-block',
        name: 'Shield Pulse',
        level: 'Cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '10 feet' },
          { label: 'Components', value: 'S, M (Force shield)' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Target must succeed on a <strong>Strength saving throw</strong> or be pushed 10 feet away. If pushed into an object or creature, it takes <span class="dice">1d6</span> Force damage.',
      },

      /* ── 1st-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '1st-Level Spells' },
      {
        type: 'spell-block',
        name: 'Intercept',
        level: '1st-level Abjuration',
        properties: [
          { label: 'Casting Time', value: '1 reaction (when ally within 5 feet is hit)' },
          { label: 'Range', value: '5 feet' },
          { label: 'Components', value: 'S, M (force shield)' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'You swap places with the target and become the target of the attack. You have <strong>resistance</strong> to the triggering attack\'s damage. If the attack still hits you, you can immediately make one melee weapon attack against the attacker.',
      },
      {
        type: 'spell-block',
        name: 'Redirection Field',
        level: '1st-level Abjuration',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 hour' },
        ],
        description:
          'You gain <span class="dice">2d6</span> Temporary Hit Points. While you have these temporary HP, any creature that hits you with a melee attack takes Force damage equal to your Dexterity modifier.',
      },
      {
        type: 'spell-block',
        name: 'Sonar Ping',
        level: '1st-level Divination',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Self (30-foot radius)' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'You learn the location of invisible creatures, hidden traps, or secret doors within 30 feet. For 1 minute, you cannot be surprised by creatures that were within the radius.',
      },

      /* ── 2nd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '2nd-Level Spells' },
      {
        type: 'spell-block',
        name: 'Deployable Cover',
        level: '2nd-level Conjuration',
        properties: [
          { label: 'Casting Time', value: '1 bonus action' },
          { label: 'Range', value: '10 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '10 minutes' },
        ],
        description:
          'Creates a 10-foot-wide, 5-foot-tall barrier with AC 10 and 30 HP. Provides <strong>Three-Quarters Cover</strong> (+5 AC / Dex saves). Allies can see and shoot through from one side; the barrier blocks from the opposite side.',
      },
      {
        type: 'spell-block',
        name: 'Little Friend Says Hello',
        level: '2nd-level Evocation',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '90 feet' },
          { label: 'Components', value: 'S, M (ranged weapon)' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Choose up to 3 creatures — make separate ranged attack rolls. On a hit: weapon damage + <span class="dice">1d8</span> Force. If targeting only one creature with all three bursts, the target makes a <strong>Dex save</strong>: <span class="dice">4d8</span> Force on fail, half on success.',
      },
      {
        type: 'spell-block',
        name: 'Tether',
        level: '2nd-level Transmutation',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Target makes a <strong>Strength save</strong>. On failure, <strong>Restrained</strong>. Takes <span class="dice">2d6</span> Lightning damage at the start of each turn. Use a bonus action to pull 15 feet toward you. The target repeats the save at the end of each turn.',
      },

      /* ── 3rd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '3rd-Level Spells' },
      {
        type: 'spell-block',
        name: 'Null-Point Grenade',
        level: '3rd-level Evocation',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Creates a 15-foot-radius sphere of <strong>difficult terrain</strong>. Creatures entering or starting their turn in the sphere make a <strong>Strength save</strong>: on fail, <span class="dice">3d8</span> Force damage and pulled to the center. On success, half damage, not pulled. Ranged attacks through the sphere have <strong>Disadvantage</strong>.',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE TECHNOMANCER — Description
   * ================================================================ */
  {
    id: 'the-technomancer',
    slug: 'the-technomancer',
    title: 'The Technomancer',
    category: 'classes',
    categoryLabel: 'Classes',
    bannerImage: '/images/classes/the-technomancer/portrait.png',
    summary:
      'Masters of data, software, and remote infiltration. They treat computer systems as a living ecosystem, bridging the gap between human thought and digital logic.',
    content: [
      {
        type: 'image',
        src: '/images/classes/the-technomancer/portrait.png',
        alt: 'The Technomancer',
        float: 'right',
      },
      {
        type: 'paragraph',
        text: 'The masters of data, software, and remote infiltration. They treat computer systems as a living ecosystem, using their augmented minds to bridge the gap between human thought and digital logic.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'You are an architect of the digital domain. The Technomancer (often called a <em>Slicer</em>) commands the software, data streams, and artificial intelligences that govern life in the 25th century. Your workspace is the cybernetic deep, and your weapon is the processing power of your mind.',
      },
      {
        type: 'paragraph',
        text: 'Competition in your field is fierce, driving almost all practitioners to undergo <strong>Neural Augmentation</strong>, a fusion of organic brain tissue with high-speed computational components. This allows you to interface directly with computer networks via specialized data cables or, in some cases, remotely through advanced signal relay. You possess the unique ability to "talk" to a machine, treating encrypted logs and locked systems as problems of language and logic.',
      },
      {
        type: 'paragraph',
        text: 'Due to your focus on the abstract world of data, you often find physical confrontations draining and prefer to operate from the shadows, using your intellect to manipulate the battlefield remotely. You deploy complex software Programs, like granting <strong>Root Access</strong> to security bots or installing a <strong>System Shutdown</strong> to disable defences and gather critical intelligence. You are often reserved, finding solace and certainty in the code, and seeing the physical world as a messy, unpredictable inconvenience.',
      },
      { type: 'divider' },
      {
        type: 'stat-block',
        entries: [
          { label: 'Primary Ability', value: 'Intelligence' },
          { label: 'Hit Dice', value: '<span class="dice">1d6</span> per Technomancer level' },
          {
            label: 'Proficiencies',
            value:
              '<strong>Armor:</strong> Light Armor. <strong>Weapons:</strong> Simple Weapons.',
          },
          { label: 'Saving Throws', value: 'Dexterity, Intelligence' },
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Table',
      },
      {
        type: 'table',
        headers: ['Level', 'Prof. Bonus', 'Class Features', 'Cantrips', 'Prep. Spells', '1st', '2nd', '3rd'],
        rows: [
          ['1', '+2', 'Neural Augmentation, --no-cache-dir', '3', '4', '2', '-', '-'],
          ['2', '+2', 'Heuristic Modeling', '3', '5', '3', '-', '-'],
          ['3', '+2', 'Multi-Threaded Processing', '3', '6', '4', '2', '-'],
          ['4', '+2', 'ASI, The Expert\'s Conundrum', '4', '7', '4', '3', '-'],
          ['5', '+3', 'Man vs. Nature', '4', '9', '4', '3', '1'],
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Features',
      },
      {
        type: 'trait',
        name: 'Neural Augmentation (Level 1)',
        description:
          'Your augmented mind processes data instantly. You have proficiency in the <strong>Technology</strong> skill. If you already have proficiency, you gain expertise (double proficiency bonus). You can use a wire to physically connect to a computer terminal as an action, giving you <strong>advantage</strong> on the next Technology check against that system.',
      },
      {
        type: 'trait',
        name: '--no-cache-dir (Level 1)',
        description:
          'You have learned to clear your neural pathways of junk data. Once per day when you finish a <strong>Short Rest</strong>, you can recover expended spell slots with a combined level equal to or less than half your Technomancer level (rounded up).',
      },
      {
        type: 'trait',
        name: 'Heuristic Modeling (Level 2)',
        description:
          'After a long rest, roll two <span class="dice">d20</span>s and record the results. You can replace any attack roll, saving throw, or ability check made by you or a creature you can see with one of these rolls. You must choose before the roll is made. Unused simulations expire at the end of your next long rest.',
      },
      {
        type: 'trait',
        name: 'Multi-Threaded Processing (Level 3)',
        description:
          'You can use a <strong>Bonus Action</strong> to cast a Technomancer cantrip that normally has a casting time of 1 Action. Usable a number of times equal to your Intelligence modifier per long rest.',
      },
      {
        type: 'trait',
        name: 'Ability Score Improvement (Level 4)',
        description:
          'You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.',
      },
      {
        type: 'trait',
        name: 'The Expert\'s Conundrum (Level 4)',
        description:
          'Choose one alignment: <strong>White Hat</strong> (resistance to Psychic and Lightning damage; use your reaction to grant an ally your Intelligence modifier as a bonus on Int/Wis saves within 30 feet), <strong>Grey Hat</strong> (once per Short Rest, reroll a failed ability check or saving throw), or <strong>Black Hat</strong> (add your Intelligence modifier to the total damage of Technomancer spells and cantrips).',
      },
      {
        type: 'trait',
        name: 'Man vs. Nature (Level 5)',
        description:
          'When you cast a Technomancer spell targeting a robotic, machine, or electronic target, you can attempt to force it to target an organic creature instead. Make a <strong>Neural Interfacing Check</strong> (<span class="dice">1d20</span> + Int + Prof) against DC 10 + target\'s Wisdom modifier. <strong>Success:</strong> the organic creature is treated as a machine — damage halved, other effects apply in full. <strong>Failure:</strong> the spell fails, no slot is expended, but the action is wasted and you take <span class="dice">1d8</span> damage.',
      },
      { type: 'divider' },
      {
        type: 'image',
        src: '/images/classes/the-technomancer/level5.png',
        alt: 'The Technomancer at the height of their power',
        caption: 'A fully realized Technomancer — lord of the digital domain and the most powerful version of their class.',
        float: 'full',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE TECHNOMANCER — Spells
   * ================================================================ */
  {
    id: 'the-technomancer-spells',
    slug: 'the-technomancer-spells',
    title: 'Technomancer Spells',
    subtitle: 'Programs & Exploits',
    category: 'class-spells',
    categoryLabel: 'Class Spells',
    bannerImage: '/images/classes/the-technomancer/portrait.png',
    summary:
      'The complete list of spells available to the Technomancer class, from cantrips like DDOS and Network Scan to devastating 3rd-level exploits like Botnet Virus and System Over Soul.',
    content: [
      /* ── Cantrips ── */
      { type: 'heading2', text: 'Cantrips' },
      {
        type: 'spell-block',
        name: 'Predictive Patterns',
        level: 'Cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Until start of next turn' },
        ],
        description:
          'You gain a <strong>+2 bonus to AC</strong> and <strong>Advantage</strong> on Dexterity saving throws until the start of your next turn.',
      },
      {
        type: 'spell-block',
        name: 'DDOS',
        level: 'Cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Target robot, turret, or computer must succeed on an <strong>Intelligence save</strong> or take <span class="dice">1d8</span> psychic damage and have <strong>disadvantage</strong> on its next attack roll. Damage increases by <span class="dice">1d8</span> at 5th level.',
      },
      {
        type: 'spell-block',
        name: 'Wireless Uplink',
        level: 'Cantrip',
        properties: [
          { label: 'Casting Time', value: '1 bonus action' },
          { label: 'Range', value: '30 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Create a short-range wireless bridge to an electronic device. Perform simple interactions (open a door, toggle a light, view a camera feed) without physical connection. Cannot perform full hacking.',
      },
      {
        type: 'spell-block',
        name: 'Network Scan',
        level: 'Cantrip',
        properties: [
          { label: 'Casting Time', value: '1 bonus action' },
          { label: 'Range', value: 'Self (30-foot radius)' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 minute' },
        ],
        description:
          'Reveals all active electronic signatures for 1 minute. You know the location of cameras, turrets, sensors, and networked devices within 30 feet, even through darkness or cover. Lead or energy shielding blocks detection.',
      },

      /* ── 1st-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '1st-Level Spells' },
      {
        type: 'spell-block',
        name: 'System Hijack',
        level: '1st-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Target robot or turret makes an <strong>Intelligence save</strong>. On failure, <strong>Charmed</strong>. Use a Bonus Action to command it to Attack, Dash, or Interact. The effect ends if the target is damaged by you or your allies.',
      },
      {
        type: 'spell-block',
        name: 'Thermal Spike',
        level: '1st-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 minute' },
        ],
        description:
          'Target makes an <strong>Intelligence save</strong>. On failure: <span class="dice">3d8</span> fire damage + <span class="dice">1d8</span> fire on its next turn. On success: <span class="dice">1d8</span> fire damage.',
      },
      {
        type: 'spell-block',
        name: 'Ghost Protocol',
        level: '1st-level',
        properties: [
          { label: 'Casting Time', value: '1 bonus action' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 10 minutes' },
        ],
        description:
          'You become <strong>invisible</strong> to electronic sensors, cameras, and robotic creatures. Does not hide you from organic eyes. Ends if you attack or cast another spell.',
      },
      {
        type: 'spell-block',
        name: 'Buffer Overflow',
        level: '1st-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '30 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 round' },
        ],
        description:
          'Target machine makes an <strong>Intelligence save</strong> or is <strong>Stunned</strong> until the start of your next turn. Attacks against the stunned target have <strong>Advantage</strong>.',
      },
      {
        type: 'spell-block',
        name: 'Malware Injection',
        level: '1st-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Target makes an <strong>Intelligence save</strong> each turn. On failure: <span class="dice">1d6</span> lightning damage and speed halved.',
      },

      /* ── 2nd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '2nd-Level Spells' },
      {
        type: 'spell-block',
        name: 'IFF Spoof',
        level: '2nd-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '90 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Target robot makes an <strong>Intelligence save</strong>. On failure, it views its allies as hostile and your allies as friendly. It attacks its own allies. The target repeats the save at the end of each turn.',
      },
      {
        type: 'spell-block',
        name: 'Root Access',
        level: '2nd-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Touch' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Bypass an electronic lock, door, or terminal instantly. If the system is <strong>Hardened</strong>, you gain Advantage on a Technology check instead of bypassing automatically.',
      },
      {
        type: 'spell-block',
        name: 'Data Steal',
        level: '2nd-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Target makes an <strong>Intelligence save</strong>. On failure: +2 to your Spell Save DC against the target; the target takes <span class="dice">2d6</span> psychic damage at the start of each of its turns. You learn one piece of information the machine knows.',
      },
      {
        type: 'spell-block',
        name: 'Critical Overload',
        level: '2nd-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Target makes an <strong>Intelligence save</strong>. On failure: <span class="dice">4d8</span> fire damage and the target emits a shockwave (15-foot radius, <strong>Dex save</strong>, <span class="dice">3d8</span> fire on fail). <em>At Higher Levels:</em> +<span class="dice">1d8</span> per slot above 2nd.',
      },
      {
        type: 'spell-block',
        name: 'Packet Storm',
        level: '2nd-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '90 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Creates a 20-foot cube of digital interference. Robots within the area are <strong>Blinded</strong> and <strong>Deafened</strong>. Smart weapons fired through the area have <strong>Disadvantage</strong>.',
      },

      /* ── 3rd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '3rd-Level Spells' },
      {
        type: 'spell-block',
        name: 'Botnet Virus',
        level: '3rd-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '90 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration' },
        ],
        description:
          'Target makes an <strong>Intelligence save</strong>. On failure: <strong>Incapacitated</strong>. At the start of each of your turns, the virus spreads to another machine within 20 feet. An affected machine repeats the save at the end of its turn to purge the virus.',
      },
      {
        type: 'spell-block',
        name: 'System Over Soul',
        level: '3rd-level',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 5 minutes' },
        ],
        description:
          'Your speed is doubled, you gain +2 AC, and you have <strong>advantage</strong> on Dexterity saves. You can use a bonus action each turn to Dash, Disengage, Hide, or Use an Object. When you Dash, you can move through hostile space — each hostile creature must make a <strong>Strength save</strong> or be knocked <strong>Prone</strong>. When the spell ends, you take <span class="dice">2d6</span> psychic damage.',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE SPLICER — Description
   * ================================================================ */
  {
    id: 'the-splicer',
    slug: 'the-splicer',
    title: 'The Splicer',
    category: 'classes',
    categoryLabel: 'Classes',
    bannerImage: '/images/classes/the-splicer/portrait.png',
    summary:
      'A master of "Wetware" — part field medic, part chemical engineer, part geneticist. Splicers synthesize combat stimulants, antitoxins, and corrosive acids on the fly.',
    content: [
      {
        type: 'image',
        src: '/images/classes/the-splicer/portrait.png',
        alt: 'The Splicer',
        float: 'right',
      },
      {
        type: 'paragraph',
        text: 'In the 25th century, the line between medicine and engineering has blurred. The Splicer is a master of "Wetware" — the complex, messy systems of organic life. You are a combination of a field medic, a chemical engineer, and a geneticist.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Splicers are often found on the fringes of settled space, where official medical supplies are scarce and "creative" solutions are required. You carry a <strong>Portable Chem-Lab</strong>, a sophisticated rig of vials, injectors, and scanners, allowing you to synthesize combat stimulants, experimental antitoxins, or corrosive acids on the fly.',
      },
      {
        type: 'paragraph',
        text: 'To aid your work, you have undergone <strong>Olfactory and Visual Augmentation</strong>, allowing you to "see" pheromones, detect airborne toxins, and track the biological trail of a creature through a dark corridor. Your unique training allows you to alter your own bio-chemistry slightly, triggering a hormone release or increasing cell division with a thought. You are often clinical, perhaps a bit insensitive.',
      },
      { type: 'divider' },
      {
        type: 'stat-block',
        entries: [
          { label: 'Primary Ability', value: 'Wisdom' },
          { label: 'Hit Dice', value: '<span class="dice">1d8</span> per Splicer level' },
          {
            label: 'Proficiencies',
            value:
              '<strong>Armor:</strong> Light and Medium Armor. <strong>Weapons:</strong> Simple Weapons, Stim-Launchers, and Surgical Blades. <strong>Tools:</strong> Medical Kit, Chem-Lab.',
          },
          { label: 'Saving Throws', value: 'Wisdom, Intelligence' },
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Table',
      },
      {
        type: 'table',
        headers: ['Level', 'Prof. Bonus', 'Class Features', 'Cantrips', 'Prep. Spells', '1st', '2nd', '3rd'],
        rows: [
          ['1', '+2', 'Field Autopsy, Chemical Synthesis', '3', '4', '1', '-', '-'],
          ['2', '+2', 'Hazardous Tolerance', '4', '5', '2', '1', '-'],
          ['3', '+2', 'Potions Master', '4', '6', '3', '2', '-'],
          ['4', '+2', 'ASI, Pro-active Senses', '4', '8', '3', '3', '-'],
          ['5', '+2', 'Pact Of The Flesh', '4', '10', '3', '3', '1'],
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Features',
      },
      {
        type: 'trait',
        name: 'Field Autopsy (Level 1)',
        description:
          'You can spend 1 minute examining a biological sample (blood, a corpse, a plant). The DM tells you one of: the creature\'s resistances, its current health status, or the time since it was last at this location.',
      },
      {
        type: 'trait',
        name: 'Chemical Synthesis (Level 1)',
        description:
          'During a short rest, you can synthesize a random Stim to use in a Stim Launcher or by itself. Roll a <span class="dice">d20</span>: if lower than 10 you get an unstable stim; if above 10, roll a <span class="dice">d4</span> to determine which: 1 = Med Stim, 2 = Combat Stim, 3 = Stun Stim, 4 = Abstracto Stim.',
      },
      {
        type: 'trait',
        name: 'Hazardous Tolerance (Level 2)',
        description:
          'You gain <strong>resistance to Poison damage</strong> and have <strong>advantage</strong> on saving throws against being Poisoned or Diseased. You can breathe normally in thin-oxygen or airborne-toxin environments.',
      },
      {
        type: 'trait',
        name: 'Potions Master (Level 3)',
        description:
          'When you roll for Chemical Synthesis, you can roll the <span class="dice">d20</span> twice and take either result. If you roll an Unstable Stim, you can spend one 1st-level spell slot to stabilize it into a random stable stim (<span class="dice">d4</span>).',
      },
      {
        type: 'trait',
        name: 'Ability Score Improvement (Level 4)',
        description:
          'You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.',
      },
      {
        type: 'trait',
        name: 'Pro-active Senses (Level 4)',
        description:
          'Your augments have a "pre-reflex" buffer. You <strong>cannot be surprised</strong> while conscious. You gain a bonus to Initiative rolls equal to your <strong>Wisdom modifier</strong>.',
      },
      {
        type: 'trait',
        name: 'Pact Of The Flesh (Level 5)',
        description:
          'Whenever you cast a Splicer spell with a range of Self, you can choose to target one <strong>willing creature you can touch</strong> instead. The target gains all benefits and suffers all costs/drawbacks. You must still maintain Concentration if required.',
      },
      { type: 'divider' },
      {
        type: 'image',
        src: '/images/classes/the-splicer/level5.png',
        alt: 'The Splicer at the height of their power',
        caption: 'A fully realized Splicer — master of organic chemistry and the most powerful version of their class.',
        float: 'full',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE SPLICER — Spells
   * ================================================================ */
  {
    id: 'the-splicer-spells',
    slug: 'the-splicer-spells',
    title: 'Splicer Spells',
    subtitle: 'Compounds & Mutations',
    category: 'class-spells',
    categoryLabel: 'Class Spells',
    bannerImage: '/images/classes/the-splicer/portrait.png',
    summary:
      'The complete list of spells available to the Splicer class, from cantrips like Hemostatic Foam and Caustic Slough to the terrifying 3rd-level Abominable Evolution.',
    content: [
      /* ── Cantrips ── */
      { type: 'heading2', text: 'Cantrips' },
      {
        type: 'spell-block',
        name: 'Vigorous Vapour',
        level: 'Cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '2 sq meter cube (you in centre)' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'You emit a medicinal vapour, granting you and all affected creatures <strong>advantage</strong> on their next saving throw.',
      },
      {
        type: 'spell-block',
        name: 'Hemostatic Foam',
        level: 'Abjuration cantrip',
        properties: [
          { label: 'Casting Time', value: '1 bonus action' },
          { label: 'Range', value: 'Touch' },
          { label: 'Components', value: 'S, M (quick-seal polymer)' },
          { label: 'Duration', value: '1 minute' },
        ],
        description:
          'Target gains temporary HP equal to your Wisdom modifier (minimum 1). While the target has these temporary HP, it cannot suffer the <strong>Bleeding</strong> condition.',
      },
      {
        type: 'spell-block',
        name: 'Pheromone Trace',
        level: 'Divination cantrip',
        properties: [
          { label: 'Casting Time', value: '1 bonus action' },
          { label: 'Range', value: '30 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration' },
        ],
        description:
          'You gain <strong>advantage</strong> on Perception and Survival checks to find or track that creature. The target cannot benefit from Half-Cover against your attacks.',
      },
      {
        type: 'spell-block',
        name: 'Caustic Slough',
        level: 'Conjuration cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '30 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Target makes a <strong>Dex save</strong> or takes <span class="dice">1d6</span> acid damage. If the target is a machine or Auto, it takes a <strong>-1 AC penalty</strong> until the end of its next turn.',
      },

      /* ── 1st-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '1st-Level Spells' },
      {
        type: 'spell-block',
        name: 'Neuro-Inhibitor Cloud',
        level: '1st-level Enchantment',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '20 feet (10-foot cube)' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 2 minutes' },
        ],
        description:
          'Organic creatures within the area make a <strong>Constitution save</strong>. On failure: <strong>disadvantage</strong> to hit and cannot make reactions. Target repeats the save at the end of each turn (maximum 2 turns).',
      },
      {
        type: 'spell-block',
        name: 'Invoke Adrenaline',
        level: '1st-level Enchantment',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'You boost your adrenaline, gaining <strong>+1 Dexterity</strong> until your next rest. Casting this more than once before resting requires a <strong>Constitution save DC 10</strong> or you take <span class="dice">1d8</span> damage.',
      },
      {
        type: 'spell-block',
        name: 'Ocular Irritant',
        level: '1st-level Conjuration',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '30 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 minute' },
        ],
        description:
          'Target makes a <strong>Dex save</strong> or is <strong>Blinded</strong>. The target makes a <strong>Constitution save</strong> at the end of each of its turns to end the effect.',
      },

      /* ── 2nd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '2nd-Level Spells' },
      {
        type: 'spell-block',
        name: 'Calcification',
        level: '2nd-level Abjuration',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Touch' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '10 minutes' },
        ],
        description:
          'Target\'s AC increases by <strong>+2</strong>. The target gains <strong>resistance to Slashing damage</strong>. The target\'s skin appears grey and stony.',
      },
      {
        type: 'spell-block',
        name: 'Necrosis Spit',
        level: '2nd-level Necromancy',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Target makes a <strong>Constitution save</strong>. On failure: <span class="dice">3d6</span> necrotic damage and <strong>Infected</strong>. While infected: <span class="dice">1d6</span> necrotic at the start of each turn. Creatures within 5 feet of the infected target must make a Constitution save or take <span class="dice">1d6</span> necrotic damage (they do not become carriers).',
      },
      {
        type: 'spell-block',
        name: 'Corrosive Touch',
        level: '2nd-level Evocation',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Touch' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Deliver <span class="dice">3d8</span> acid damage. If the target is wearing metal armor or is a mechanical construct, its AC is <strong>reduced by 1 permanently</strong> (until repaired).',
      },

      /* ── 3rd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '3rd-Level Spells' },
      {
        type: 'spell-block',
        name: 'Abominable Evolution',
        level: '3rd-level Transmutation',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 Hour' },
        ],
        description:
          'You gain <strong>+4 Strength</strong>, <strong>+15 feet speed</strong>. Your melee attacks deal an extra <span class="dice">1d8</span> damage. Your Splicer spell save DC increases by +2 and you restore all spell slots. You <strong>cannot</strong> use tools or cast spells requiring Material components. When the spell ends: <span class="dice">2d10</span> necrotic damage (unreducible), two levels of <strong>Exhaustion</strong>. Once per Long Rest.',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE THESPIAN — Description
   * ================================================================ */
  {
    id: 'the-thespian',
    slug: 'the-thespian',
    title: 'The Thespian',
    category: 'classes',
    categoryLabel: 'Classes',
    bannerImage: '/images/classes/the-thespian/portrait.png',
    summary:
      'A master of "Soft Power" — whether a corporate negotiator, a luxury-deck socialite, or a spy, the Thespian is a professional at managing people through charm and deception.',
    content: [
      {
        type: 'image',
        src: '/images/classes/the-thespian/portrait.png',
        alt: 'The Thespian',
        float: 'right',
      },
      {
        type: 'paragraph',
        text: 'Even in the 25th century, the most valuable currency isn\'t credits — it\'s reputation. The Thespian is a master of the "Soft Power" that keeps the gears of civilization turning. Whether you were a high-tier corporate negotiator, a beloved luxury-deck socialite, or a spy, you are a professional at managing people.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'You are flamboyant by design, often wearing high-fashion <strong>Smart-Fabrics</strong> that shimmer in the dark or project a soft, welcoming glow. You carry yourself with an air of extravagance.',
      },
      {
        type: 'paragraph',
        text: 'To aid in your role, you have undergone <strong>Vocal Cord Modulation</strong> and <strong>Advanced Reflective Skin plates</strong>, allowing your voice and appearance to change according to your need. Will you change your voice to calm someone down? Or will you pretend to be someone else entirely?',
      },
      { type: 'divider' },
      {
        type: 'stat-block',
        entries: [
          { label: 'Primary Ability', value: 'Charisma' },
          { label: 'Hit Dice', value: '<span class="dice">1d6</span> per Thespian level' },
          {
            label: 'Proficiencies',
            value:
              '<strong>Armor:</strong> Light Armor. <strong>Weapons:</strong> Simple Weapons, Handgun, and Monofilament Whips. <strong>Tools:</strong> One musical instrument.',
          },
          { label: 'Saving Throws', value: 'Charisma, Dexterity' },
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Table',
      },
      {
        type: 'table',
        headers: ['Level', 'Prof. Bonus', 'Class Features', 'Cantrips', 'Prep. Spells', '1st', '2nd', '3rd'],
        rows: [
          ['1', '+2', 'Pitch Perfect, Social Chameleon', '2', '4', '2', '-', '-'],
          ['2', '+2', 'Well-travelled', '2', '5', '3', '1', '-'],
          ['3', '+2', 'Crowd Work', '2', '6', '3', '2', '-'],
          ['4', '+2', 'ASI, Social Engineering', '3', '7', '3', '3', '1'],
          ['5', '+3', 'Bright-Burn, Font of Reputation', '3', '8', '3', '3', '2'],
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Class Features',
      },
      {
        type: 'trait',
        name: 'Pitch Perfect (Level 1)',
        description:
          'As a <strong>bonus action</strong>, choose one creature within 60 feet. They gain a <strong>Thespian Die</strong> (<span class="dice">1d6</span>). Once within 10 minutes, they can add the roll to one ability check, attack roll, or saving throw.',
      },
      {
        type: 'trait',
        name: 'Social Chameleon (Level 1)',
        description:
          'You have <strong>advantage</strong> on any Charisma (Persuasion or Deception) checks.',
      },
      {
        type: 'trait',
        name: 'Well-travelled (Level 2)',
        description:
          'Add half your proficiency bonus (rounded down) to any ability check that doesn\'t already include your proficiency bonus.',
      },
      {
        type: 'trait',
        name: 'Crowd Work (Level 3)',
        description:
          'When you use Pitch Perfect, you can choose a second ally within 60 feet. That ally gains <strong>Advantage</strong> on their next attack roll before the start of your next turn. Usable a number of times equal to your Proficiency Bonus per long rest.',
      },
      {
        type: 'trait',
        name: 'Ability Score Improvement (Level 4)',
        description:
          'You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.',
      },
      {
        type: 'trait',
        name: 'Social Engineering (Level 4)',
        description:
          'When you arrive in a new location, spend 1 hour scanning the room. You identify a <strong>Contact</strong> willing to provide one piece of insider information or a minor favor for free.',
      },
      {
        type: 'trait',
        name: 'Bright-Burn (Level 5)',
        description:
          'When you cast <strong>Spotlight</strong>, the beam sears the target. The target takes <span class="dice">2d6</span> fire damage at the start of each of its turns while the spell is active. Creatures within 5 feet must make a <strong>Constitution save</strong> or be <strong>Blinded</strong>.',
      },
      {
        type: 'trait',
        name: 'Font of Reputation (Level 5)',
        description:
          'You regain all Thespian Dice on a Short or Long Rest. Your Thespian Die increases to <span class="dice">1d8</span>.',
      },
      { type: 'divider' },
      {
        type: 'image',
        src: '/images/classes/the-thespian/level5.png',
        alt: 'The Thespian at the height of their power',
        caption: 'A fully realized Thespian — master of reputation and the most powerful version of their class.',
        float: 'full',
      },
    ],
  },

  /* ================================================================
   *  CLASS: THE THESPIAN — Spells
   * ================================================================ */
  {
    id: 'the-thespian-spells',
    slug: 'the-thespian-spells',
    title: 'Thespian Spells',
    subtitle: 'Performances & Illusions',
    category: 'class-spells',
    categoryLabel: 'Class Spells',
    bannerImage: '/images/classes/the-thespian/portrait.png',
    summary:
      'The complete list of spells available to the Thespian class, from cantrips like Screech and Dazzle to the powerful 3rd-level Faux Riot and Identity Hijack.',
    content: [
      /* ── Cantrips ── */
      { type: 'heading2', text: 'Cantrips' },
      {
        type: 'spell-block',
        name: 'Screech',
        level: 'Evocation cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'V' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Target makes a <strong>Wisdom save</strong> or takes <span class="dice">1d4</span> psychic damage and has <strong>disadvantage</strong> on its next attack roll.',
      },
      {
        type: 'spell-block',
        name: 'Dazzle',
        level: 'Illusion cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '30 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 round' },
        ],
        description:
          'Target makes a <strong>Constitution save</strong> or is <strong>Dazzled</strong> (no Reactions, speed halved).',
      },
      {
        type: 'spell-block',
        name: 'Audio Ghost',
        level: 'Illusion cantrip',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'V' },
          { label: 'Duration', value: '1 minute' },
        ],
        description:
          'Throw your voice or create ghost audio (footsteps, a door closing, a whispered conversation). You can mimic a specific voice. An Investigation check vs. your Spell Save DC reveals the illusion.',
      },

      /* ── 1st-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '1st-Level Spells' },
      {
        type: 'spell-block',
        name: 'Jarring Retribution',
        level: '1st-level Evocation',
        properties: [
          { label: 'Casting Time', value: '1 reaction (when hit by melee)' },
          { label: 'Range', value: 'Self (10-foot radius)' },
          { label: 'Components', value: 'V' },
          { label: 'Duration', value: 'Instantaneous' },
        ],
        description:
          'Each creature within 10 feet makes a <strong>Constitution save</strong>. On failure: <span class="dice">2d8</span> thunder damage and pushed 10 feet. On success: half damage, not pushed.',
      },
      {
        type: 'spell-block',
        name: 'Spotlight',
        level: '1st-level Illusion',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'You emit an intense light focusing on one creature. All attacks against the target have <strong>Advantage</strong>. The target cannot benefit from <strong>Invisible</strong> or <strong>Half-Cover</strong>.',
      },
      {
        type: 'spell-block',
        name: 'Prompt Injection',
        level: '1st-level Enchantment',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '60 feet' },
          { label: 'Components', value: 'V' },
          { label: 'Duration', value: '1 round' },
        ],
        description:
          'Target makes a <strong>Wisdom save</strong> or follows a one-word command: <em>Approach, Drop, Flee, Halt,</em> or <em>Grovel</em>. Machines and Autos have <strong>disadvantage</strong> on the save.',
      },

      /* ── 2nd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '2nd-Level Spells' },
      {
        type: 'spell-block',
        name: 'Decoy',
        level: '2nd-level Illusion',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Self' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: '1 minute' },
        ],
        description:
          'You create three holographic duplicates. When targeted, roll a <span class="dice">d20</span>: 6+ with 3 dupes, 8+ with 2, 11+ with 1 — the attack hits a duplicate instead. Each duplicate has AC = 10 + your Dex modifier and disappears when hit.',
      },
      {
        type: 'spell-block',
        name: 'Aura of Gravitas',
        level: '2nd-level Enchantment',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Self (30-foot radius)' },
          { label: 'Components', value: 'V, S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'You and your allies cannot be <strong>Charmed</strong> or <strong>Frightened</strong>. Hostile creatures starting their turn in the aura must make a <strong>Wisdom save</strong>: on failure, they have <strong>Disadvantage</strong> on attacks against anyone other than you.',
      },
      {
        type: 'spell-block',
        name: 'Condemnation',
        level: '2nd-level Enchantment',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '30 feet' },
          { label: 'Components', value: 'V' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Target makes a <strong>Wisdom save</strong>. On failure: <span class="dice">3d6</span> psychic damage and <strong>Frightened</strong> with speed reduced to 0. The target repeats the save at the end of each of its turns.',
      },

      /* ── 3rd-Level ── */
      { type: 'divider' },
      { type: 'heading2', text: '3rd-Level Spells' },
      {
        type: 'spell-block',
        name: 'Faux Riot',
        level: '3rd-level Illusion',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: '120 feet' },
          { label: 'Components', value: 'S' },
          { label: 'Duration', value: 'Concentration, up to 1 minute' },
        ],
        description:
          'Creates a 20-foot cube that is <strong>Heavily Obscured</strong> for enemies but clear for allies. Enemies starting their turn in the cube or entering it must make an <strong>Investigation check</strong> or be <strong>Restrained</strong>.',
      },
      {
        type: 'spell-block',
        name: 'Identity Hijack',
        level: '3rd-level Illusion',
        properties: [
          { label: 'Casting Time', value: '1 action' },
          { label: 'Range', value: 'Touch' },
          { label: 'Components', value: 'V, S' },
          { label: 'Duration', value: '1 hour' },
        ],
        description:
          'You look and sound exactly like the target creature. You gain a <strong>+10 bonus to Deception checks</strong>. This is a physical light-wrap; an Investigation check vs. your Spell Save DC reveals the disguise. If you attack or cast a spell, viewers get a new check with <strong>Advantage</strong>.',
      },
    ],
  },
];
