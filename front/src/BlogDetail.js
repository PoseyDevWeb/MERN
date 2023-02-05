import React from "react";
import { Link, useParams } from "react-router-dom";
import UseRecuperation from "./useRecuperation";

const BlogDetail = () => {
  const { id } = useParams();
  const url = "http://localhost:5000/Api/Blog/" + id;

  const { Data: Blogs, isLoading, erreur } = UseRecuperation(url);

  const HandeleDelete = () => {
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      console.log("suprimé avec succé");
      window.location = "/";
    });
  };

  return (
    <div className="bloglist">
      {isLoading && <div>En cours de traitement...</div>}
      {Error && <div>{erreur}</div>}
      {Blogs && (
        <div className="blog">
          <h2 className="blog-titre"> {Blogs.title}</h2>
          <small className="blog-publication-date">{`Publié le ${Blogs.date}`}</small>
          <p className="blog-body">{Blogs.body}</p>
          <p className="blog-author">{`Publié par : ${Blogs.author}`}</p>
          <br />
          <button className="btn-create" onClick={HandeleDelete}>
            Suprimer
          </button>

          <Link to={`/Update/${Blogs._id}`} className="buttonUpdate">
            Modifier
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
