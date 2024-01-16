import React from 'react';
import NavBar from './Component/NavBar';
import Hero from './Component/Hero';
import Analytics from './Component/Analytics';
import Newsletter from './Component/Newsletter';
import Cards from './Component/Cards';
import Footer from './Component/Footer';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Analytics/>
      <Newsletter/>
      <Cards></Cards>
      <Footer></Footer>
    </div>

  );
}

export default App;
