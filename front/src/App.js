import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Ajouter from "./Ajouter";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";
import UpdateBlog from "./UpdateBlog";
import { useState } from "react";
import React, { useContext } from "react";
import BlogList from "./BlogList";

// Créer un contexte
const MyContext = React.createContext();

function App() {
  const [someProp, setSomeProp] = useState("");
  const [constante, setConstante] = useState("");

  // Fonction qui sera passée en prop à ChildComponent
  const handleChildUpdate = (newProp) => {
    setSomeProp(newProp);
    let myConstante = newProp;
    setConstante(myConstante);

    setSomeProp(newProp);
    console.log(myConstante);
  };

  return (
    <Router>
      <div className="App">
        <Navbar handleUpdate={handleChildUpdate} />
        <div className="Contenu">
          <Routes>
            <Route path="/" element={<Home value={constante} />}></Route>
            <Route path="/ajouter" element={<Ajouter />}></Route>
            <Route path="/blogs/:id" element={<BlogDetail />}></Route>
            <Route path="/Update/:id" element={<UpdateBlog />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
