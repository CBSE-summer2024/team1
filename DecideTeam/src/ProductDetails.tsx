import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductProps {
  product: Product;
}

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="card shadow-lg w-full max-w-3xl h-auto mx-auto">
        <figure>
          <img 
            src={product.imageUrl} 
            alt="Product" 
            className="w-full h-[32rem] object-cover" 
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{product.name}</h2> 
          <p className="text-sm text-black">{product.description}</p> 
          <div className="card-actions flex justify-end items-center space-x-4"> 
          <span className="text-lg font-semibold text-black">${product.price.toFixed(2)}</span>
            <button className="btn btn-primary">Add to Cart</button>
            
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;




