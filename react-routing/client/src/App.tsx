import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />}></Route>
          <Route path="details/:productId" element={<ProductDetails />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}
