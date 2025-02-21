import Header from "./components/Header";
import Product from "./components/Product";
import Counter from "./components/Counter";
function App(){
  return(
    <div>
      <Header/>
      <Product name="Laptop" price="500"/>
      <Product name="Mobile" price="200"/>
      <Counter/>
    </div>
  );
    
}
export default App;