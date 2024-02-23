import { Product } from "../lib/types/types";
import ProductCard from "./ProductCard";


const  getProudcuts: ()=> Promise<Product[]> = async()=> {
  const res = await fetch("https://fakestoreapi.com/products"); // https://api.escuelajs.co/api/v1 // bu api images ishlamadi va boshqa api ishlatdim
  return res.json();
}


const Products = async () => {
    const products = await getProudcuts()
  return (
    <div className="grid grid-cols-3 gap-10 p-16">
        {products.map(product=>  <ProductCard key={product.id} {...product} /> )}
    
    </div>
  );
};

export default Products;
