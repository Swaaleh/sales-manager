import Header from "./components/Header";
import Product from "./components/Product";
import Counter from "./components/Counter";
import SalesList from "./components/SalesList";
import { useState } from "react";
function App(){
  const [sales, setSales] = useState(["Laptop", "Mobile", "Tablet"]);
  return(
    <div>
      <Header/>
      <SalesList sales={sales}/>
      <Product name="Laptop" price="500"/>
      <Product name="Mobile" price="200"/>
      <Counter/>
    </div>
  );
    
}
export default App;