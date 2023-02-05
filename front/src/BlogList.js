import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ Blogs, title, value }) => {
  let valeurArray = [];
  let ok = 0;
  for (let i = 0; i < Blogs.length; i++) {
    if (
      Blogs[i].title.toLowerCase().includes(value.toLowerCase()) == true &&
      value.length > 0
    ) {
      valeurArray[ok] = Blogs[i];
      ok++;
    }
  }

  console.log(valeurArray);

  return (
    <div className="bloglist">
      <h2>{title}</h2>

      <br />

      {Blogs &&
        value.length < 1 &&
        Blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog._id}`} className="blog-titre">
              {blog.title}
            </Link>

            <small className="blog-publication-date">
              Publié le : {blog.date}
            </small>
            <p className="blog-author">Publié par: {blog.author}</p>
          </div>
        ))}
      {Blogs.length == 0 && <h4>Aucun Blog disponible</h4>}
      {Blogs.length > 0 &&
        value.length > 0 &&
        valeurArray.map((blog) => (
          <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog._id}`} className="blog-titre">
              {blog.title}
            </Link>
            <small className="blog-publication-date">
              Publié le : {blog.date}
            </small>
            <p className="blog-author">Publié par: {blog.author}</p>
          </div>
        ))}
      {value.length > 0 && ok == 0 && <h4>Titre not Found</h4>}
    </div>
  );
};

export default BlogList;
