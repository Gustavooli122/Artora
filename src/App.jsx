import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import { ArticlesProvider } from './contexts/ArticlesContext';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArticlesDetailPages from './pages/ArticlesDetailPage';
import ArticlesPage from './pages/ArticlesPage';
import { slugify } from './lib/utils';

function App() {
  return (
    <ArticlesProvider> <ProductProvider>
     
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/produtos/:id" element={<ProductDetailPage/>} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticlesDetailPages/>} />
          </Routes>
        </Router>
      
    </ProductProvider></ArticlesProvider>
  );
}

export default App;