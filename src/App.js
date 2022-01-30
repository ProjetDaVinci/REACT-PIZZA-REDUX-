import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch("db.json").then((resp) =>
      resp.json().then((json) => {
        setPizzas(json.pizzas);
      })
    );
  }, []);

  console.log("pizzas", pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home dataSource={pizzas} />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
