import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductDetails from './ProductDetails';

const productData = {
  id: 1,
  name: "Adidas Sport 811",
  description: "This product features at least 20% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.",
  price: 189.99,
  imageUrl: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cb9aaddde35469b9f6adac637736015_9366/Ultraboost_5X_Shoes_Black_JH7244_01_standard_hover.jpg",
};

export const App: React.FC = () => (
  <div className="min-h-screen bg-white">
    <header className="bg-gray-100 text-black p-4 mb-8 shadow-md flex justify-between items-center">
      <button className="text-3xl font-bold">mart</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">log in</button>
    </header>
    <ProductDetails product={productData} />
  </div>
);

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
