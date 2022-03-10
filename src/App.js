import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Main from './components/main/Main';
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import React, {useState} from "react";
function App() {

  const [cart, setcart] = useState([0])

  const onAdd=(item)=>{
    const exist=cart.find((x)=>x.id === item.id);
    if(exist){

      setcart(cart.map((x)=>
        x.id=== item.id ? {...exist,qty:exist.qty +1}:x)
      );
    }
    else{
        setcart([...cart,{...item,qty:1}])
    }
  }

  return (
    <>
      <Navbar cart={cart.length-1} onAdd={onAdd} />
      <Header />
     <div className="gridy">
      <Products onAdd={onAdd}/>
       </div>
   
      <Footer />
    </>
  );
}

export default App;
