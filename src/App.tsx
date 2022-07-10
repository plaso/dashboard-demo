import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Spinner from './components/Spinner';
import NewNomination from './views/NewNomination/NewNomination';
import Nominations from './views/Nominations/Nominations';

function App() {
  return (
    <div className="App bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="md:ml-60 p-8">
        <React.Suspense fallback={<Spinner />}>
          <Routes>
            <Route index element={<Nominations />} />
            <Route path="new" element={<NewNomination />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
