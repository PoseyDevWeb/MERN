import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogList from "./BlogList";
import UseRecuperation from "./useRecuperation";

//let nom = "azim";

const Home = (props) => {
  //{/*npx json-server --watch data/db.json --port 8000*/}

  const url = `http://localhost:5000/Api/Blog`;
  const { Data: Blogs, isLoading, erreur } = UseRecuperation(url);

  //console.log(props.value);
  const location = useLocation();

  return (
    <div className="home">
      {Error && <div>{Error}</div>}
      {isLoading && <div>En cours de traitement</div>}
      {Blogs && (
        <BlogList
          Blogs={Blogs}
          title={"Listes des blogs"}
          value={props.value}
        />
      )}
    </div>
  );
};

export default Home;
