import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductDetails from './ProductDetails';

const productData = {
  id: 1,
  name: "Adidas Sport 811",
  description: "This product features at least 20% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.",
  price: 189.99,
  image_url: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cb9aaddde35469b9f6adac637736015_9366/Ultraboost_5X_Shoes_Black_JH7244_01_standard_hover.jpg",
};

export const App: React.FC = () => (
  <ProductDetails product={productData} />
);

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
