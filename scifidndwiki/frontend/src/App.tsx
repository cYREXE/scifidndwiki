import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import {
  ClassArticlePage,
  ClassSpellsArticlePage,
  PlanetArticlePage,
  ReligionArticlePage,
  RaceArticlePage,
  ItemArticlePage,
} from './pages/ArticlePage';
import CharacterSheetPage from './pages/CharacterSheetPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      /* ─── Classes ─── */
      { path: 'classes', element: <CategoryPage /> },
      { path: 'classes/:slug', element: <ClassArticlePage /> },

      /* ─── Class Spells ─── */
      { path: 'classes/spells', element: <CategoryPage /> },
      { path: 'classes/spells/:slug', element: <ClassSpellsArticlePage /> },

      /* ─── Races ─── */
      { path: 'races', element: <CategoryPage /> },
      { path: 'races/:slug', element: <RaceArticlePage /> },

      /* ─── Lore — Planets ─── */
      { path: 'lore/planets', element: <CategoryPage /> },
      { path: 'lore/planets/:slug', element: <PlanetArticlePage /> },

      /* ─── Lore — Religions ─── */
      { path: 'lore/religions', element: <CategoryPage /> },
      { path: 'lore/religions/:slug', element: <ReligionArticlePage /> },

      /* ─── Items ─── */
      { path: 'items', element: <CategoryPage /> },
      { path: 'items/:slug', element: <ItemArticlePage /> },

      /* ─── Tools ─── */
      { path: 'tools/character-sheet', element: <CharacterSheetPage /> },

      /* ─── Lore redirect ─── */
      { path: 'lore', element: <Navigate to="/lore/planets" replace /> },

      /* ─── 404 ─── */
      {
        path: '*',
        element: (
          <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
            <h1 className="page-title">Lost in the Void</h1>
            <p style={{ marginTop: '1rem', color: 'var(--phb-text-muted)' }}>
              The star charts have no record of this location.
            </p>
          </div>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
