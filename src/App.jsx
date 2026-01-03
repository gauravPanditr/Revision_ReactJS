import { product_fetch } from "./apis/product_api";
import "./App.css";
import {useEffect, useState} from "react";
import ProductCard from "./components/Cards";
import Login from "./pages/Login";

export default function App() {
   
  //   const [products, setProducts] = useState([]);
  //   const [loading,setLoding]=useState(true);
  //   const [error,setError]=useState(false);
  //  useEffect(() => {
  //   const loadProducts = async () => {
  //     try {
  //       const data = await product_fetch();
  //       setProducts(data);
  //     } catch (err) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadProducts();
  // }, []);
    
  //       {/* {[...products]
  // .sort((a, b) => a.price - b.price)
  // .map(product => (
  //   <ProductCard key={product.id} product={product} />
  // ))} */}
 return (

        <div className="bg-gray-950 max-w-full max-h-full">
 <Login/>
   

        </div>

    );
}
