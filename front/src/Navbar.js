import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ handleUpdate }) => {
  const [hommePage, setHommePage] = useState(false);
  const [inputValue, setInputValue] = useState();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHommePage(true);
    } else {
      handleUpdate("");
      setHommePage(false);
    }
  }, [location]);

  const HandeleChange = (e) => {
    //setInputValue(e.target.value);
    let inputvalue = e.target.value;
    handleUpdate(e.target.value);
    console.log(inputvalue);
  };

  return (
    <nav className="navbar">
      <div>
        <Link className="logo" to="/">
          azimdev Blog
        </Link>
      </div>
      <ul className="liens">
        <li>
          <Link to="/" className="liens">
            Accueil
          </Link>
        </li>

        <li>
          <Link to="/ajouter" className="liens buttonArticle">
            Creer Article
          </Link>
        </li>
      </ul>

      <form className="nav-search">
        {hommePage && (
          <input
            type="=search"
            className="search"
            id="search"
            placeholder="rechercher titre de blog"
            required
            onChange={HandeleChange}
          />
        )}
        {hommePage && (
          <button
            onClick={(e) => {
              e.preventDefault();
              // handleUpdate(inputValue);
            }}
          >
            ok
          </button>
        )}
      </form>
    </nav>
  );
};

export default Navbar;
