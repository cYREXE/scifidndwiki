import { Link } from 'react-router-dom';
import { articles } from '../data/content';

export default function HomePage() {
  const classCount = articles.filter((a) => a.category === 'classes').length;
  const planetCount = articles.filter((a) => a.category === 'lore-planets').length;
  const religionCount = articles.filter((a) => a.category === 'lore-religions').length;
  const raceCount = articles.filter((a) => a.category === 'races').length;

  return (
    <div className="home">
      <div className="home__ornament">✦ ✦ ✦</div>

      <h1 className="home__title">Campaign Compendium</h1>
      <p className="home__tagline">A Player's Reference for the Stars Beyond</p>

      <div className="home__divider" />

      <p className="home__intro">
        Tjenare Boys! Här kommer allt material jag förberett hitills. Ingen av detta är skrivet i sten såklart och det finns säkert hål som måste täppas, men använd detta som inspo. Disclaimer: Om text ser AI-genererad ut så är det för att en AI har transkriberat allt källmaterial för att formatera om det inom en snygg design, dessvärre innebär detta lite.. kreativa friheter här och där.

        
      </p>
      <p className="home__intro">
        Changelog 1.3 - La till ett character sheet under "Tools". Fixad Auto beskrivningen till senaste versionen.
      </p>
      <p className="home__intro">
        Changelog 1.2 - Har fixat mobilanpassningen för classes, allt ska nu gå att se utan att scrolla horizontellt.
      </p>
      <p className="home__intro">
        Changelog 1.1 - Har lagt till innehåll på class features samt spells som hade blivit borttaget, nu finns det lite mer lore från källmaterialet inbakat i beskrivningarna. 
      </p>

      <div className="category-grid">
        <Link to="/classes" className="category-card">
          <div className="category-card__icon">⚔️</div>
          <div className="category-card__title">Character Classes</div>
          <div className="category-card__desc">
            Explore the roles and abilities available to your character — from hardened
            engineers to cunning technomancers.
          </div>
          <span className="category-card__count">
            {classCount} {classCount === 1 ? 'class' : 'classes'} available
          </span>
        </Link>

        <Link to="/races" className="category-card">
          <div className="category-card__icon">👤</div>
          <div className="category-card__title">Playable Races</div>
          <div className="category-card__desc">
            Choose your origin — play as a resourceful Human or a resilient Auto, each
            with unique abilities and traits.
          </div>
          <span className="category-card__count">
            {raceCount} {raceCount === 1 ? 'race' : 'races'} available
          </span>
        </Link>

        <Link to="/lore/planets" className="category-card">
          <div className="category-card__icon">🌍</div>
          <div className="category-card__title">Planets & Places</div>
          <div className="category-card__desc">
            Discover the worlds of the known galaxy — from the redeemed Earth to the
            storm-wracked pirate haven of La Lochna.
          </div>
          <span className="category-card__count">
            {planetCount} {planetCount === 1 ? 'world' : 'worlds'} documented
          </span>
        </Link>

        <Link to="/lore/religions" className="category-card">
          <div className="category-card__icon">🕯️</div>
          <div className="category-card__title">Religions & Faiths</div>
          <div className="category-card__desc">
            Learn about the belief systems that have survived — and evolved — across
            centuries of interstellar expansion.
          </div>
          <span className="category-card__count">
            {religionCount} {religionCount === 1 ? 'faith' : 'faiths'} recorded
          </span>
        </Link>

        <Link to="/items" className="category-card">
          <div className="category-card__icon">🔧</div>
          <div className="category-card__title">Equipment & Items</div>
          <div className="category-card__desc">
            Browse the weapons, tools, and stimulants available across the galaxy —
            from wrenches to the notorious Abstracto Stim.
          </div>
          <span className="category-card__count">Standard issue gear</span>
        </Link>

        <Link to="/classes/spells" className="category-card">
          <div className="category-card__icon">✨</div>
          <div className="category-card__title">Spell Lists</div>
          <div className="category-card__desc">
            Reference the programs, abilities, and techniques available to each class
            — organized by level for quick lookup.
          </div>
          <span className="category-card__count">5 class spell lists</span>
        </Link>
      </div>
    </div>
  );
}
