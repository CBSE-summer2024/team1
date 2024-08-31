
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

const sizes = [40, 41, 42, 43, 44, 45, 46, 47];

const ProductDetails: React.FC<ProductProps> = ({ productId }) => {

  const [product,setProduct]=useState<Product>()

  useEffect(()=>{
    const getProductAndSet= async()=>{
      const {data} = await fetchProductById(productId);
      setProduct(data)
    }
    getProductAndSet()
  },[])

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSizeClick = (size: number) => {
    setSelectedSize(size);
  };


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
            <h3 className="mt-6 text-lg font-bold">Size :</h3>
            <div className="mt-2 flex flex-wrap gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded ${
                    selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="mt-6 space-x-8">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-secondary">Add to WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;




