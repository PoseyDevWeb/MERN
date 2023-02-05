import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UseRecuperation from "./useRecuperation";

const UpdateBlog = () => {
  //const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();
  //const { Data: Blogs, isLoading, erreur } = UseRecuperation(url);
  const url = "http://localhost:5000/Api/Blog/" + id;

  let { Data: Blogs, isLoading, erreur } = UseRecuperation(url);

  const HandleBlogUpdating = (e) => {
    e.preventDefault();
    const title = Blogs.title;
    const date = Blogs.date;

    const blog = { title, body, date };

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("article ajouter avec succes.");

      window.location = "/";
    });
  };
  return (
    <div className="create-blog">
      {Blogs && (
        <form onSubmit={HandleBlogUpdating} className="form">
          <div className="form-group">
            <label htmlFor="title">Titre de l'article</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={Blogs.title}
              disabled
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Selectionez un auteur</label>
            <select
              required
              className="form-control"
              id="author"
              value={author}
              onChange={(e) => {
                let value = e.target.value;
                setAuthor(value);
              }}
            >
              <option value=""></option>
              <option value="Tony">Tony</option>
              <option value="Duplex">Duplex</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="body">Contenu de l'article</label>
            <textarea
              required
              value={body}
              onChange={(e) => {
                let value = e.target.value;
                setBody(value);
              }}
              className="form-control textarea"
              id="body"
              rows="10"
            ></textarea>
          </div>
          <div className="form-group">
            {!isLoading && (
              <button type="submit" className="btn-create">
                Valider les Modifications
              </button>
            )}
            {isLoading && (
              <button type="submit" className="btn-create" disabled>
                En cour de traitement ...
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateBlog;
