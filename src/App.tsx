import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { Home } from '@/pages/Home';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout><Home /></MainLayout>} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
