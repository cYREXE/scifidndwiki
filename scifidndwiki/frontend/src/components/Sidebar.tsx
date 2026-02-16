import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navigation } from '../data/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'sidebar-overlay--visible' : ''}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* Header */}
        <div className="sidebar__header">
          <Link to="/" className="sidebar__title" onClick={onClose}>
            Campaign Compendium
          </Link>
          <div className="sidebar__subtitle">Player's Reference Guide</div>
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav">
          {navigation.map((section) => (
            <NavSection key={section.label} section={section} onNavigate={onClose} />
          ))}
        </nav>
      </aside>
    </>
  );
}

/* ─── Collapsible Section ─── */

function NavSection({
  section,
  onNavigate,
}: {
  section: (typeof navigation)[number];
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="nav-section">
      <button className="nav-section__toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="nav-section__icon">{section.icon}</span>
        {section.label}
        <span className={`nav-section__chevron ${isOpen ? 'nav-section__chevron--open' : ''}`}>
          ▶
        </span>
      </button>

      <div
        className="nav-section__children"
        style={{ maxHeight: isOpen ? '500px' : '0px' }}
      >
        {section.categories?.map((cat) => (
          <div key={cat.id} className="nav-category">
            <Link
              to={cat.basePath}
              className="nav-category__label"
              onClick={onNavigate}
            >
              <span className="nav-category__icon">{cat.icon}</span>
              {cat.label}
            </Link>
            {cat.articles.map((article) => (
              <NavLink
                key={article.slug}
                to={`${cat.basePath}/${article.slug}`}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
                onClick={onNavigate}
              >
                {article.title}
              </NavLink>
            ))}
          </div>
        ))}

        {/* Standalone article links (no sub-categories) */}
        {section.articles?.map((article) => (
          <NavLink
            key={article.slug}
            to={`${article.basePath}/${article.slug}`}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link--active' : ''}`
            }
            onClick={onNavigate}
          >
            {article.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
