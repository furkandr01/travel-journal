import React from "react"
import Navbar from "./components/Navbar.js";
import data from "./data.js"
import Place from "./components/Place.js";

function App() {
  const places = data.map(item => {
    return (
      <Place
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className="places-lists">
        {places}
      </section>
      <hr width="1400px" color="#F5F5F5"/>
    </div>
  );
}

export default App;
