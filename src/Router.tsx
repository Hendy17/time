import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { History } from './pages/History';
import { Home } from './pages/Home/index';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* Rota principal (Home) */}
        <Route index element={<Home />} />
        {/* Sub-rota (History) */}
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
