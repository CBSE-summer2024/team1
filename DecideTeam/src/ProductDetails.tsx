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





// import React from 'react';

// const ProductDetails: React.FC = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="card shadow-lg w-full max-w-sm h-96">
//         <figure>
//           <img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cb9aaddde35469b9f6adac637736015_9366/Ultraboost_5X_Shoes_Black_JH7244_01_standard_hover.jpg" alt="Product" className="w-full h-48 object-cover"/>
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">Product Name</h2>
//           <p className="text-sm">This is a detailed description of the product.</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">Add to Cart</button>
//             <button className="btn btn-secondary">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
