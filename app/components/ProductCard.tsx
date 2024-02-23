import React, { FC } from "react";
import { Product } from "../lib/types/types";

const ProductCard: FC<Product> = ({
  title,
  description,
  image,
  id,
  category,
  price,
}) => {
   
    
  return (
    <div className="w-full flex lg:flex-row flex-col-reverse">
      <div className="md:p-4 lg:p-7 mb-5 p-3 border border-grayshade-50 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full justify-center justify-items-center justify-self-center col-auto">
        <img className="w-60 h-72" src={image} alt="image bor" />
        <div>
          <p className="font-semibold text-xl mb-2 h-auto">{title}</p>
          <p className="text-grayshade-100 mb-5 dark:text-grayshade-50 text-xs">
            {description}
            <a
              className="font-semibold text-grayshade-100 dark:text-white text-xs ml-1"
              href="/products/2"
            >
              Read More
            </a>
          </p>
          <span className="lable text rounded-3xl bg-slate-800 px-3 py-2 text-[#ffffff]">{category}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-grayshade-100 mt-4 dark:text-grayshade-50 text-xs">
              Price 
            </p>
            <p className="font-semibold text-grayshade-300 ">
                $ {price}
            </p>
          </div>
          <div className="flex text-white justify-between items-center">
            <button className="h-8 px-4 bg-blue-700 rounded-md button">
              
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
