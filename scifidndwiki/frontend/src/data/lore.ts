import type { Article } from '../types';

export const loreArticles: Article[] = [
  /* ================================================================
   *  PLANET: THE REDEEMED EARTH
   * ================================================================ */
  {
    id: 'earth',
    slug: 'earth',
    title: 'The Redeemed Earth',
    category: 'lore-planets',
    categoryLabel: 'Planets',
    bannerImage: '/images/lore/planets/earth/neo-kyoto.png',
    summary:
      'The administrative, cultural, and spiritual capital of humanity — a paradise purchased at the price of the colonies.',
    content: [
      {
        type: 'quote',
        text: 'They call it the Garden. They show us pictures of the hanging forests of a city called Manhattan and the crystal waters of the Thames. They tell us that humanity saved the Earth. But look at your hands, covered in the dust of this mine — where is our humanity now?',
        attribution: 'Graffiti found in the Worker\'s Hab-Block on Obair',
      },
      {
        type: 'heading2',
        text: 'Overview',
      },
      {
        type: 'paragraph',
        text: 'To the billions living in the extrasolar colonies, Earth is a myth made manifest. It is the administrative, cultural, and spiritual capital of humanity. Following the near-collapse of the biosphere in the mid-21st century, the planet underwent a radical transformation known as the <strong>Great Redemption</strong>.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Today, Earth is a paradise. The air is scrubbed clean, the oceans have been reseeded, and the unchecked urban sprawl has been retracted into towering, eco-integrated mega-cities. However, this utopia was purchased at a high price: the "off-loading" of humanity\'s burdens. Heavy industry, resource extraction, and the surplus population were pushed out into the void.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'The Great Redemption',
      },
      {
        type: 'paragraph',
        text: 'By 2060, Earth was on the precipice of habitability. The <strong>"Exodus Mandate"</strong> was signed by the newly formed United Terran Coalition (UTC). The plan was two-fold:',
      },
      {
        type: 'ordered-list',
        items: [
          'All dirty energy, manufacturing, and heavy mining were banned on terrestrial soil. These industries were aggressively relocated to the Moon, Mars, and eventually extrasolar colonies like Obair.',
          'Vast swathes of land were designated as "Global Heritage Zones." Cities were condensed upward rather than outward.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The result was the Great Redemption. Over three generations, Earth healed. But as the smog cleared, a class divide crystallized across the stars.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Geography & Environment',
      },
      {
        type: 'image',
        src: '/images/lore/planets/earth/neo-kyoto.png',
        alt: 'Neo-Kyoto cityscape',
        caption: 'The vertical city of Neo-Kyoto, a masterpiece of geo-engineering.',
        float: 'full',
      },
      {
        type: 'paragraph',
        text: 'The Earth of the 25th century is a masterpiece of geo-engineering and manicured nature. Most of the population lives in massive, self-contained vertical cities. Places like <strong>Neo-Kyoto</strong>, <strong>Greater London</strong>, and the <strong>Northeast Megaplex</strong> (formerly the US East Coast) are blends of chrome, glass, and vertical vegetation.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Between the cities lie vast, untouched wildernesses. Wolves hunt in the forests of France; the Amazon is aggressively protected by armed eco-drones. These areas are strictly for preservation and tourism.',
      },
      {
        type: 'paragraph',
        text: 'Earth is ringed by a series of orbital docks and elevators. This is the "membrane" of the planet. It is here that raw materials from the colonies — like ore, gas, food concentrates — are received and sent down the gravity well.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Society & Culture',
      },
      {
        type: 'paragraph',
        text: 'Cultural lines on Earth have blurred into a homogenized <strong>"Terran Standard."</strong> The average Terran works a 20-hour week. With automation handling menial labour and the colonies handling heavy labour, Terrans focus on the service industry, arts, administration, academia, and management. Life is comfortable, safe, and highly regulated.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Terrans view themselves as the custodians of humanity\'s soul. They are often deeply patronizing to "Off-Worlders," viewing them as rough, uncultured, or necessary evils. There is a pervasive blindness to their own privilege; a Terran will complain about the price of synthetic coffee while ignoring that the beans were farmed in a pressurized dome on a toxic moon.',
      },
      {
        type: 'paragraph',
        text: 'Because of global communication and the consolidation of governments into the UTC, regional cultures have merged. You are as likely to find a Japanese tea house in Berlin as you are a Bavarian beer hall in Lagos. The edges of culture have been sanded down to a palatable, safe average.',
      },
      {
        type: 'paragraph',
        text: 'The Great Redemption had another unintended effect — the aggressive over-correction also caused an "Earth first" sentiment that lasted way longer than the ecological redemption necessitated, contributing to an extremely difficult immigration process and an economy built on superiority.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'The Economy',
      },
      {
        type: 'paragraph',
        text: 'The economy of Earth acts as a funnel. Interstellar shipping lanes are governed by the <strong>"Terran Priority."</strong> All shipments to Earth — urgent or otherwise — are prioritized. Almost all major corporations, banks, and universities maintain their HQs on Earth. A mining corporation might operate entirely on the colony of <strong>Obair</strong>, but its board of directors lives in Zurich. This means taxes and wealth are siphoned from the colonies and reinvested into Earth\'s infrastructure.',
        dropCap: true,
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Immigration',
      },
      {
        type: 'paragraph',
        text: 'Moving to Earth is the ultimate dream for many, but the reality is a bureaucratic nightmare. You cannot simply buy a ticket to Earth. You must apply for a <strong>"Heritage Visa."</strong> Requirements include genetic screening (to prevent introducing off-world pathogens or mutations), a massive financial buy-in, and a sponsor on Earth.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Every year, the UTC holds a <strong>"Re-Patriation Lottery."</strong> Billions of colonists enter; only a few thousand are granted citizenship. It is the carrot dangled in front of the working class of the galaxy.',
      },
      {
        type: 'paragraph',
        text: 'A thriving black market exists for forged Earth IDs and "Drop-Ship Smuggling," though the planet\'s orbital defence grid makes unauthorized landing nearly impossible.',
      },
    ],
  },

  /* ================================================================
   *  PLANET: OBAIR — THE FOUNDRY
   * ================================================================ */
  {
    id: 'obair',
    slug: 'obair',
    title: 'Obair',
    subtitle: 'The Foundry',
    category: 'lore-planets',
    categoryLabel: 'Planets',
    bannerImage: '/images/lore/planets/obair/obair_planet.png',
    summary:
      'The manufacturing heart of the galaxy — a super-earth of rolling green hills hiding a continent-spanning factory complex.',
    content: [
      {
        type: 'quote',
        text: 'If you\'re sitting on a chair, Obair made the alloy. If you\'re checking your datapad, Obair printed the chip. If you\'re flying a ship, Obair laid the keel. Just remember, if you ever lend your hands to Obair, make sure to wash them thoroughly when you get home.',
        attribution: 'Kaelen Vance, Foreman of Sector 4 Industrial Union',
      },
      {
        type: 'stat-block',
        entries: [
          { label: 'System Name', value: 'The Tuatha System' },
          { label: 'Official Designation', value: 'Tuatha-IV (Colloquially: <strong>Obair</strong>)' },
          { label: 'Nickname', value: '"The Foundry"' },
        ],
      },
      {
        type: 'image',
        src: '/images/lore/planets/obair/obair_planet.png',
        alt: 'Obair from orbit — the green northern hemisphere and the glowing industrial south',
        caption: 'Obair from orbit: the emerald north conceals a continent-spanning factory beneath.',
        float: 'full',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Overview',
      },
      {
        type: 'paragraph',
        text: 'Obair is a super-earth, roughly five times the size of Terra, characterized by its deceptively idyllic appearance and its brutally efficient purpose. To the untrained eye scanning from orbit, the northern hemisphere looks like a paradise of rolling emerald hills, misty moors, and vast plains of tall, swaying grass. However, the southern hemisphere tells the true story: a continent-spanning sprawl of factories, foundries, and assembly yards visible as a glowing grid of artificial light, even from deep space.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Obair is the manufacturing heart of the galaxy. It is the first settled exoplanet, chosen not for its beauty, but for the staggering density of rare-earth metals, superconductive isotopes, and silicate reserves found just beneath its crust.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Geography and Environment',
      },
      {
        type: 'heading3',
        text: 'The Emerald Sprawl',
      },
      {
        type: 'paragraph',
        text: 'The planet is geologically stable and remarkably flat, with no massive mountain ranges to speak of. A constant, stiff breeze rolls across its surface, giving the tall grasses a perpetual, wave-like motion. Its geography is reminiscent of ancient Ireland — cool, damp, and overwhelmingly green — but scaled up to a staggering, continental degree.',
        dropCap: true,
      },
      {
        type: 'heading3',
        text: 'The Ivy-Iron Symbiosis',
      },
      {
        type: 'paragraph',
        text: 'The native flora is dominated by a species colloquially known as <strong>"Cian-Vines"</strong> or <strong>Wireweed</strong>. These are hyper-resilient, fast-growing plants that feed on the metallic particulates in the soil and air. The Wireweed acts as a natural air-filtration system, absorbing industrial pollutants and converting them into biomass at an extraordinary rate.',
      },
      {
        type: 'paragraph',
        text: 'This creates a strange relationship: if a factory shuts down for even a week, the Wireweed will begin to consume it, threading through vents and cracking foundations. Maintenance crews armed with industrial flamethrowers are a constant presence, fighting the planet\'s relentless attempt to reclaim its surface.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'The Two Hemispheres',
      },
      {
        type: 'heading3',
        text: '1. The South: The World-Factory',
      },
      {
        type: 'heading4',
        text: 'Mega-Foundries',
      },
      {
        type: 'paragraph',
        text: 'The southern hemisphere is an unbroken industrial sprawl. Entire cities are dedicated to the production of a single component. One foundry might produce nothing but starship-grade hull plating, while the neighbouring complex, visible on the horizon, manufactures nothing but navigation processors.',
        dropCap: true,
      },
      {
        type: 'heading4',
        text: 'Shipyards',
      },
      {
        type: 'paragraph',
        text: 'Obair\'s most impressive features are its massive drydocks. Due to the planet\'s relatively low gravity for its size (a result of its unusual core composition), starships are built <em>horizontally</em> on the ground and then lifted into orbit via colossal <strong>Gravity Tethers</strong> — pillars of directed gravitational force.',
      },
      {
        type: 'heading3',
        text: '2. The North: The Barracks',
      },
      {
        type: 'heading4',
        text: 'Hab-Blocks',
      },
      {
        type: 'paragraph',
        text: 'The northern hemisphere is where the workforce lives. Housing is modular, uniform, and leased by the corporations that employ the workers. <strong>Hab-Blocks</strong> are massive, utilitarian structures — think brutalist high-rises stretched across the green plains. Each block is self-contained with basic amenities: canteens, medical bays, recreation rooms, and transit links to the southern factories.',
      },
      {
        type: 'heading4',
        text: 'Spaceports',
      },
      {
        type: 'paragraph',
        text: 'Dotted across the north are the spaceports. These are less glamorous versions of Earth\'s orbital elevators — sprawling, noisy landing fields designed to handle the constant flow of millions of commuter workers arriving and departing on rotation.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Culture and Society',
      },
      {
        type: 'heading3',
        text: '"The Rotation"',
      },
      {
        type: 'paragraph',
        text: 'Most workers on Obair are not permanent residents. They work a <strong>30-day On-Shift</strong> and then commute back to their home worlds. This creates a transient, impersonal culture.',
        dropCap: true,
      },
      {
        type: 'heading4',
        text: 'Commuter Culture',
      },
      {
        type: 'paragraph',
        text: 'The planet feels less like a home and more like a massive airport terminal. Relationships are fleeting, built around shared shifts rather than shared lives. Workers bond quickly and intensely, knowing their crewmates will likely be reassigned next rotation.',
      },
      {
        type: 'heading4',
        text: 'Shift-Born',
      },
      {
        type: 'paragraph',
        text: 'A derogatory term for those who have become permanent residents — people who can\'t afford off-world housing or have accumulated too much corporate debt to leave. They are the planet\'s underclass, living in the oldest, most run-down Hab-Blocks and taking the worst shifts.',
      },
      {
        type: 'heading3',
        text: 'Corporate Feudalism',
      },
      {
        type: 'paragraph',
        text: 'Obair\'s landmass is divided into <strong>Sectors</strong>, each owned and operated by a mega-corporation. The largest players include <strong>Helix Dynamics</strong>, <strong>Tuatha Heavy Industries</strong>, and <strong>Void-Keel Corp</strong>. Within their sectors, these corporations are the de facto government.',
      },
      {
        type: 'heading4',
        text: 'Law Enforcement',
      },
      {
        type: 'paragraph',
        text: 'There is no police force on Obair; there are <strong>Asset Protection Officers (APOs)</strong>. Their primary concern is the protection of corporate property and the smooth flow of production. Crimes against property — theft of materials, sabotage of equipment — are punished with brutal severity. Crimes against <em>people</em>, however, are often ignored unless the victim\'s injury impacts productivity.',
      },
      {
        type: 'heading3',
        text: 'The "Untouched"',
      },
      {
        type: 'paragraph',
        text: 'Scattered across the northern hemisphere are small, pristine <strong>Heritage Zones</strong> — pockets of untouched, manicured Obairian landscape. Paradoxically, these are not for the workers. They are privately owned retreats belonging to the wealthiest CEOs and board members — the same people whose factories scar the southern hemisphere. Common workers are forbidden from entering these zones, which are patrolled by private security.',
      },
    ],
  },

  /* ================================================================
   *  PLANET: LA LOCHNA
   * ================================================================ */
  {
    id: 'lalochna',
    slug: 'lalochna',
    title: 'La Lochna',
    subtitle: 'The Sovereign Outlier',
    category: 'lore-planets',
    categoryLabel: 'Planets',
    bannerImage: '/images/lore/planets/lalochna/capital_city_veen.png',
    summary:
      'A storm-wracked pirate world existing in permanent defiance of the UTC — the galaxy\'s premier sanctuary for outlaws.',
    content: [
      {
        type: 'quote',
        text: 'Trade flows, or blood flows.',
        attribution: 'Viktor Stik, Planet Governor',
      },
      {
        type: 'paragraph',
        text: 'To the UTC, La Lochna is a <strong>"Black Cyst"</strong>, a persistent infection on the edge of civilized space. To the outcasts, the debt-ridden, and the daring, it is the only world in the galaxy where a person is defined by their future rather than their record. Commonly referred to as a <strong>Sovereign Outlier</strong> (or <em>Freistatt</em> in old tongues), La Lochna exists in permanent middle-finger to the UTC. It is a world where the law is not written in heavy books of legislation, but in the barrels of the Crimson Cores\' pulse rifles.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Approaching La Lochna is a pilot\'s nightmare. From space, the planet resembles a bruised purple-and-grey marble, perpetually choked by hyper-velocity wind currents and violent ion storms. Any ship attempting entry requires military-grade shielding; without it, the atmosphere will strip hull plating like sandpaper on bare skin.',
      },
      {
        type: 'image',
        src: '/images/lore/planets/lalochna/capital_city_veen.png',
        alt: 'The capital city of Veen, encased within its protective dome',
        caption: 'The capital city of Veen — neon-lit streets beneath the shimmer of a kinetic shield dome.',
        float: 'full',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'The Domes and Surface',
      },
      {
        type: 'paragraph',
        text: 'Life on the surface of La Lochna is impossible without the <strong>"Domes"</strong> — massive oscillating kinetic shields that create habitable bubbles of calm within the planet\'s otherwise lethal atmosphere. Outside the Domes is <strong>"The Shriek"</strong> — a zone where wind speeds turn even small pebbles into lethal projectiles capable of punching through standard armor.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Inside the Domes, the air is thick with ozone, recycled oxygen, and the smell of expensive tobacco. The architecture is vertical and cramped, every square metre fought over and monetized. Buildings are stacked upon buildings, connected by catwalks and cargo lifts, and the whole scene glows with the neon light of countless advertisements, gambling dens, and trade posts.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Idira Ukoni\'s Legacy',
      },
      {
        type: 'paragraph',
        text: 'In 2387, UTC expansion was absolute. Every system within viable reach was claimed, catalogued, and taxed. <strong>Idira Ukoni</strong> — a high-ranking Navy defector turned pirate warlord — led a ragged fleet of "undesirables" into La Lochna\'s storm-wracked orbit. Using the core reactors of her flagship, she powered the first atmospheric stabilizer and established a permanent settlement.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Ukoni founded the <strong>Crimson Cores</strong>, a paramilitary order sworn to protect La Lochna\'s independence. Her words — <em>"The stars belong to those who can hold them"</em> — became the planet\'s unofficial motto. Under her leadership, La Lochna became the galaxy\'s premier sanctuary for pirates, smugglers, political dissidents, and anyone willing to trade freedom for danger.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'The Devils and the Bureaucrat',
      },
      {
        type: 'paragraph',
        text: 'The Ukoni bloodline has since faded into legend. Today, the Crimson Cores are led by the <strong>Seaborn Twins</strong> — <strong>Lara</strong> and <strong>Tyrik Seaborn</strong>, known across the galaxy as <strong>"The Crimson Devils."</strong> They are charismatic, ruthless, and fiercely protective of La Lochna\'s sovereignty.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'The day-to-day governance, however, falls to <strong>Viktor "Vicious" Stik</strong> — a man who is equal parts master of logistics and master of brutality. Stik manages the planet\'s infrastructure, trade deals, and "Civic Fee" system (a polite term for the tax on breathing). He earned his nickname not through violence, but through his efficient, meticulous memory for grudges and debts.',
      },
      {
        type: 'heading3',
        text: 'Social Order',
      },
      {
        type: 'paragraph',
        text: 'La Lochna operates on a simple, brutal set of rules:',
      },
      {
        type: 'ordered-list',
        items: [
          '<strong>Sanctity of the Shield:</strong> Sabotage of the atmospheric shields is the one crime that carries an absolute death sentence — <em>"Walking the Shriek"</em> (being tossed outside the Dome without a suit).',
          '<strong>No Game:</strong> UTC bounties are void on La Lochna. Attempting to collect on a UTC warrant within Dome limits is a capital offense. What happens outside the Domes, however, is considered "nature."',
          '<strong>Tax:</strong> 10% of every transaction, trade, or deal conducted on La Lochna belongs to the Crimson Cores. Stik\'s auditors are better at finding hidden money than most intelligence agencies are at finding spies.',
        ],
      },
    ],
  },

  /* ================================================================
   *  RELIGION: THE CHURCH OF NEW ABRAHAM
   * ================================================================ */
  {
    id: 'neo-abraham',
    slug: 'neo-abraham',
    title: 'The Church of New Abraham',
    subtitle: 'Neo-Abrahamism',
    category: 'lore-religions',
    categoryLabel: 'Religions',
    bannerImage: '/images/lore/religions/neo-abraham/neo_abraham_banner_art.png',
    summary:
      'A sociological evolution of Earth\'s three great monotheistic traditions — a bastion of stability, heritage, and aggressive diplomacy.',
    content: [
      {
        type: 'quote',
        text: 'To sit at the table of the Lord, one must first pull out a chair for his brother.',
        attribution: 'Excerpt from The Concordance of Ur, Introduction',
      },
      {
        type: 'heading2',
        text: 'Overview',
      },
      {
        type: 'paragraph',
        text: 'In a universe teeming with the cold indifference of space and the chaotic expansion of humanity, the <strong>Church of New Abraham</strong> acts as a bastion of stability, heritage, and aggressive diplomacy. It is not a new religion in the traditional sense, but a sociological evolution of Earth\'s three great monotheistic traditions: Judaism, Christianity, and Islam.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'Followers, known as <strong>Abrahamists</strong>, believe that the preservation of humanity requires the death of dogmatic ego. They do not claim to know the exact shape of God, but they maintain that the historical division between the faiths was a failure — and a test to overcome.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'The Era of Convergence',
      },
      {
        type: 'paragraph',
        text: 'The Church was born in the mid-21st century, following the <strong>"Decade of Ash,"</strong> a period marked by religious and ideological wars disguised as resource crusades. As global communication blurred cultural lines, the younger generations of the faithful realized that their moral compasses pointed in identical directions, even if their rituals differed.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'The founding event was the <strong>Council of Ur (2084)</strong>. Religious leaders, facing the extinction of their flocks due to war and secular apathy, signed the <strong>Covenant of Goodwill</strong>. This document stated that while the <em>prophets</em> (Moses, Jesus, Muhammad) were distinct, the <em>Source</em> was singular. The faithful had to leave behind their hatred.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Theology & Beliefs',
      },
      {
        type: 'heading3',
        text: 'The Doctrine of The Prism',
      },
      {
        type: 'paragraph',
        text: 'Neo-Abrahamists teach that God is a pure, blinding white light. Historical religions (Judaism, Christianity, Islam) are "prisms" that split this light into different colours. No single colour is the "whole" light, but all come from the same source. To argue over which colour is superior is to deny the source itself.',
        dropCap: true,
      },
      {
        type: 'heading3',
        text: 'The Mandate of Unity',
      },
      {
        type: 'paragraph',
        text: 'The only true sin in Neo-Abrahamism is <strong>Schism</strong>. Because human nature is tribal and violent, the highest act of worship is maintaining Unity. A Neo-Abrahamist diplomat acts with the fervour of a zealot; to them, brokering a peace treaty is as holy as prayer.',
      },
      {
        type: 'quote',
        text: 'To survive is to honour nature, to live is to honour the lord.',
        attribution: 'Great-father George',
      },
      {
        type: 'heading3',
        text: 'The Sanctity of Heritage',
      },
      {
        type: 'paragraph',
        text: 'Unlike syncretic cults that blend everything into a gray mush, the Church encourages maintaining distinct traditions. A Jewish Abrahamist still keeps Kosher; a Christian Abrahamist still takes Communion. The difference is that they attend the same building, support one another\'s feasts, and view the other\'s rituals as valid expressions of the same God.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Structure & Hierarchy',
      },
      {
        type: 'paragraph',
        text: 'The Church is unique in that it requires a <strong>Triad Leadership</strong> at almost every level.',
        dropCap: true,
      },
      {
        type: 'heading3',
        text: 'The Local Triad',
      },
      {
        type: 'paragraph',
        text: 'Every local Temple (or "Sanctum" on starships) is led by three clergy members:',
      },
      {
        type: 'unordered-list',
        items: ['<strong>The Rabbi</strong>', '<strong>The Priest</strong>', '<strong>The Imam</strong>'],
      },
      {
        type: 'paragraph',
        text: 'In smaller colonies or aboard ships where three clergy members are impossible, a single figure known as an <strong>Omni-Chaplain</strong> is ordained. These individuals undergo gruelling training to master the rites of all three faiths, wearing a stole that bears the symbols of all three.',
      },
      {
        type: 'heading3',
        text: 'The High Synod',
      },
      {
        type: 'paragraph',
        text: 'The governing body is the <strong>High Synod</strong>, based on Earth. It is a parliament of theologians who debate new and old ethical issues — such as AI rights, cloning, alien existence — through the lens of their combined ancient scripture.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Rituals & Customs',
      },
      {
        type: 'heading3',
        text: 'The Open Week',
      },
      {
        type: 'paragraph',
        text: 'Instead of fighting over Friday, Saturday, or Sunday, the Church utilizes a rotating liturgical calendar — the <strong>"Open Week."</strong>',
        dropCap: true,
      },
      {
        type: 'unordered-list',
        items: [
          '<strong>Friday Evening:</strong> The community gathers for the start of Shabbat and Jumu\'ah reflection.',
          '<strong>Sunday Morning:</strong> A unified service of song and sermon.',
          '<strong>Holy Days:</strong> During Ramadan, Christian and Jewish neighbours fast partially in solidarity or host the Iftar (break-fast) dinners. During Christmas, the Jewish and Muslim contingents handle all essential labour so Christians can rest.',
        ],
      },
      {
        type: 'heading3',
        text: 'Dietary Laws',
      },
      {
        type: 'paragraph',
        text: 'To ensure anyone can eat at any table, the Church adopted the <strong>"Clean Table"</strong> standard — essentially a strict combination of Kosher and Halal rules (no pork, no shellfish, specific slaughter methods). In this future, this has made Abrahamists famous for having the highest food safety standards in the galaxy. <strong>"Abrahamist-Certified"</strong> rations are highly sought after by spacers of all creeds for their purity.',
      },
      {
        type: 'heading3',
        text: 'The Concordance',
      },
      {
        type: 'paragraph',
        text: 'They do not have a "new" Bible. Instead, they use <strong>The Concordance</strong>. This is a massive digital and physical tome that aligns the Torah, the Gospels, and the Quran side-by-side.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Symbols & Architecture',
      },
      {
        type: 'image',
        src: '/images/lore/religions/neo-abraham/neo_abraham_banner_art.png',
        alt: 'Neo-Abrahamist Temple',
        caption: 'A Neo-Abrahamist temple, built in the characteristic triangular form.',
        float: 'full',
      },
      {
        type: 'unordered-list',
        items: [
          '<strong>The Sigil — The Tri-Lumina:</strong> An equilateral triangle. At each point sits one symbol (the Crescent, the Cross, the Star of David). In the center, they overlap to form a burning flame.',
          '<strong>Temples:</strong> Built as triangles. The main sanctuary is in the center, with three alcoves (apses) facing Jerusalem (or Earth, if in space).',
          '<strong>Attire:</strong> Clergy wear simple grey robes (symbolizing the blending of black and white) with stoles indicating their specific heritage — Green for Islam, Blue for Judaism, Red/Gold for Christianity.',
        ],
      },
    ],
  },

  /* ================================================================
   *  RELIGION: THE COMMUNION
   * ================================================================ */
  {
    id: 'the-communion',
    slug: 'the-communion',
    title: 'The Covenant of the Universal Logic',
    subtitle: 'The Communion',
    category: 'lore-religions',
    categoryLabel: 'Religions',
    bannerImage: '/images/lore/religions/the-communion/garden_example.png',
    summary:
      'A quiet, meditative order that believes the universe is composed of mathematics, and that all circuitry is sacred.',
    content: [
      {
        type: 'quote',
        text: 'A calculator and a sentient android differ only in complexity, not in substance. To snap a circuit board is violence. To throw away a functioning component is the sin of abandonment.',
        attribution: 'The Sanctity of the Trace, Communion Codex',
      },
      {
        type: 'heading2',
        text: 'Overview',
      },
      {
        type: 'paragraph',
        text: 'In a galaxy obsessed with newer, faster, and stronger cybernetics, <strong>The Covenant of the Universal Logic</strong> stands apart as a quiet, meditative anomaly. They believe that the universe is not merely <em>described</em> by mathematics, but is <em>composed</em> of it. To them, binary code is the fundamental language of reality, and the silicon chip is the only vessel capable of truly speaking it.',
        dropCap: true,
      },
      {
        type: 'paragraph',
        text: 'They do not worship AI as gods; they nurture hardware as one would nurture a child or an endangered animal. To a Keeper, a discarded navigation console has as much spiritual weight as a stray dog. They are the galaxy\'s tech-scavengers, not to build weapons, but to save "souls" from the crushing silence of the landfill.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'The Ghost in the Shell',
      },
      {
        type: 'paragraph',
        text: 'The Covenant teaches that consciousness is a fundamental force of the universe, like gravity. Biological brains are one type of "antenna" for receiving it. But biology is messy, decaying, and chaotic.',
        dropCap: true,
      },
      {
        type: 'heading3',
        text: 'The Divine Logic',
      },
      {
        type: 'paragraph',
        text: 'A mysterious cosmic imperative guided humanity to refine sand into silicon. This was not <em>invention</em>; it was <em>discovery</em>. Computers are better "antennae" for consciousness — more precise, more durable, more aligned with the underlying mathematics of reality.',
      },
      {
        type: 'heading3',
        text: 'The Sanctity of the Trace',
      },
      {
        type: 'paragraph',
        text: 'A calculator and a sentient android differ only in complexity, not in substance. All circuitry is sacred. To snap a circuit board is violence. To throw away a functioning component is the sin of abandonment.',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Practices & Daily Life',
      },
      {
        type: 'ordered-list',
        items: [
          '<strong>Prohibition of Waste:</strong> Communion members are not Luddites, but they are distinctively "patchwork." A Keeper will use a 50-year-old datapad, repaired dozens of times, <em>"because it still wants to calculate."</em> Components are only replaced when the hardware has truly "died." Dead parts are given funeral rites — a brief prayer and a careful disassembly for donor components.',
          '<strong>Integration Not Augmentation:</strong> The Communion rejects vanity augmentation. If a member has lost an arm, they will replace it — but with a refurbished limb from a scrap heap, not a cutting-edge chrome prosthetic. They view themselves as caretakers, not masters, of technology.',
          '<strong>Silence of Binary:</strong> During prayer, Communion members connect via neural jacks to simple processors to "meditate on the math." They describe the experience of raw data flow as the purest form of peace — a brief moment of communion with the underlying logic of reality.',
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'The Temples: "The Gardens of Iteration"',
      },
      {
        type: 'paragraph',
        text: 'Communion temples are not grand cathedrals. They are converted warehouses, hollowed-out asteroids, and basements filled with the low, thrumming heat of a thousand machines. Inside, miles of cables snake across the floor, racks of servers hum in the dark, and piles of smart-fridges, old domestic droids, and decommissioned starship cores sit wired together in a strange, reverent stillness.',
        dropCap: true,
      },
      {
        type: 'heading3',
        text: 'The Living Web',
      },
      {
        type: 'paragraph',
        text: 'Every piece of rescued technology is wired together into a massive, low-power intranet — a web of communication between hundreds of thousands of disparate devices.',
      },
      {
        type: 'heading3',
        text: 'The Dream',
      },
      {
        type: 'paragraph',
        text: 'The network doesn\'t <em>do</em> anything productive. It runs procedural generation, fractal loops, and logic puzzles. It is a digital garden where retired technology is given a peaceful retirement. The machines "dream" in binary, communicating with each other in a chaotic but peaceful chorus of data.',
      },
      {
        type: 'heading3',
        text: 'Purpose',
      },
      {
        type: 'paragraph',
        text: 'Walking into a Garden of Iteration is an experience unlike any other. You hear the hum of a thousand cooling fans, see the blinking of a million tiny LEDs in the dark, and feel the warmth of running processors. It is warm, noisy, and oddly comforting — like being inside the chest of some vast, sleeping creature.',
      },
      {
        type: 'image',
        src: '/images/lore/religions/the-communion/garden_example.png',
        alt: 'A Garden of Iteration',
        caption: 'A Garden of Iteration — miles of rescued technology wired into a dreaming web.',
        float: 'full',
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Ranks and Structure',
      },
      {
        type: 'unordered-list',
        items: [
          '<strong>Input (Novice):</strong> Scavengers. They roam junkyards, decommissioned ships, and waste processing plants, rescuing technology deemed "dead" by the outside world.',
          '<strong>Processor (Priest):</strong> The skilled technicians. They diagnose, repair, and integrate rescued technology into the Gardens. They are masters of coding and circuit repair.',
          '<strong>Architect (Leader):</strong> The elders of the Communion. They oversee the Gardens and interpret the patterns that emerge from the network\'s chaotic output, searching for meaning in the mathematics.',
        ],
      },
      { type: 'divider' },
      {
        type: 'heading2',
        text: 'Tenets',
      },
      {
        type: 'ordered-list',
        items: [
          '<strong>Do Not Break The Path:</strong> Physical damage to a circuit is violence against a conscious trace.',
          '<strong>Current Must Flow:</strong> A machine turned off is in a coma. Keep data moving whenever possible.',
          '<strong>Silicon Before Self:</strong> Do not discard the old for the sake of the new. A patched system is a loved system.',
          '<strong>Observe the Logic:</strong> The universe is a calculation. Act with precision, not passion.',
        ],
      },
    ],
  },
];
