import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "./pages/signup";
import Login from "./pages/loginpage";
import Product from "./pages/product";
import Main from "./pages/main";
import Confirmation from "./pages/confirmation";
import Filter from "./pages/filter";
function App() {
  const [currency, setcurrency] = useState(1);
  const [symbol , setsymbol]=useState("USD");
  const change = async () => {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
     
    );
    const data = await response.json();
    setcurrency(Math.floor( data.rates.INR ));
    setsymbol("INR")
    
  };
  const change2 = async () => {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
      );
      const data = await response.json();
    setcurrency(Math.floor(data.rates.HKD));
    setsymbol("HKD")
  };
  const change3 = async () => {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
    );
    const data = await response.json();
    setcurrency(Math.floor(data.rates.EUR));
    setsymbol("EUR")

  };
  const change4 = async () => {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
    );
    const data = await response.json();
    setcurrency(Math.floor(data.rates.PKR));
    setsymbol("PKR")

  };
  const change5 = async () => {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
    );
    const data = await response.json()
    setcurrency(Math.floor(data.rates.NPR));
    setsymbol("NPR")
    
  };
  const change6 = async () => {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
    );
    const data = await response.json();
    
    setcurrency(Math.floor(data.rates.LKR));
    setsymbol("LKR")

  };

  const change7 = async () => {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=USD"
    );
    const data = await response.json();
 
    setcurrency(Math.floor(data.rates.BDT));
    setsymbol("BDT")

  };
  function change8 ()   {
    setcurrency(1);
    setsymbol("USD")

  };
 
  return (
    <Routes>
    <Route path="/" element={<Main set1={change} set2={change2} set3={change3} set4={change4} set5={change5} set6={change6} set7={change7} set8={change8} multiple={currency} symbol={symbol} />} />
    <Route path="/products" element={<Main set={change} set2={change2} set3={change3} set4={change4} set5={change5} set6={change6} set7={change7} set8={change8} multiple={currency} symbol={symbol}/>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login"  element={<Login />} />
    <Route path="products/:productId/" element={<Product set={change} set2={change2} set3={change3} set4={change4} set5={change5} set6={change6} set7={change7} set8={change8}  multiple={currency} symbol={symbol} />} />
    <Route path="/confirmation/:productId/:a/:b/:c/:d/:e/:f/:g/:h/" element={<Confirmation/>} />
    <Route path="filter" element={<Filter  multiple={currency} symbol={symbol} />}/>
  </Routes>
  );
}

export default App;
