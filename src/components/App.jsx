import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

export const App = () => {
  const Home = lazy(() => import('../pages/Home'));
  const Products = lazy(() => import('../pages/Products'));
  const ProductDetails = lazy(() => import('../pages/ProductDetails'));
  const About = lazy(() => import('../pages/About'));
  const NotFound = lazy(() => import('../pages/NotFound'));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<h1>Mission</h1>} />
          <Route path="team" element={<h1>Team</h1>} />
          <Route path="reviews" element={<h1>Reviews</h1>} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
};