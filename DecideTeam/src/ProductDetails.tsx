import React, { useEffect, useState } from 'react';
import {fetchProductById} from "Shared/dist/index"
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

interface ProductProps {
  productId: number;
}

const ProductDetails: React.FC<ProductProps> = ({ productId }) => {

  const [product,setProduct]=useState<Product>()

  useEffect(()=>{
    const getProductAndSet= async()=>{
      const {data} = await fetchProductById(productId);
      setProduct(data)
    }
    getProductAndSet()
  },[])
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-5">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img src={product?.image_url} alt={product?.name} className="rounded-lg shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 mt-5 lg:mt-0">
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="mt-4 text-lg">{product?.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-semibold">${product?.price}</span>
            </div>
            <div className="mt-6">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;




