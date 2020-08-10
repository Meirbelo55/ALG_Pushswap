import React from 'react';
import '../../App.css';
import Header from "../Header";
import Footer from "../Footer";
import WelcomePage from "../Acceuil";
function App() {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <Footer />
    </div>
  );
}

export default App;
