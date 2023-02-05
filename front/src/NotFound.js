import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="404">
      <h2>Ooooooops......</h2>
      <p>La page que vous essayez d'acceder n'existe pas</p>
      <Link to="/"> Aller à la page d'accueil</Link>
    </div>
  );
};

export default NotFound;
