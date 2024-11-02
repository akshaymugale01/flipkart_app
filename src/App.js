import Header from "./Header";
import { useState, useEffect } from "react";
import { Data } from "./Data";
import Card from "./Card";
import Navbar from "./Navbar.js";
import { Route, Routes } from "react-router-dom";

function App() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    
    filter("");
  }, []);

  const filter = (names) => {
    const filtered = Data.filter((item) => item.name.includes(names));
    console.log(filtered);
    setCategory(filtered);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {category.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  actualPrice={item.actualPrice}
                  offerPrice={item.offerPrice}
                />
              ))}
            </div>
          }
        />
        <Route
          path="/cart"
          element={<Navbar text={"This is Cart Page"} />}
        />
        <Route
          path="/orders"
          element={<Navbar text={"This is Orders Page"} />}
        />
      </Routes>
    </>
  );
}

export default App;
