const BlogModel = require("../Models/BlogModel");

//create a blog

exports.ControlCreateBlog = async (req, res) => {
  const date = new Date();
  const jour = date.getDate();
  const mois = date.getMonth() + 1;
  const annee = date.getFullYear();
  const DateJour = `${jour}/${mois}/${annee}`;

  const title = req.body.title;
  const titre = await BlogModel.findOne({ title });

  if (titre) {
    return res
      .status(404)
      .send(`L'article ${title} existe deja, impossible d'ajouter un autre, `);
  } else {
    const Blog = new BlogModel({
      title,
      author: req.body.author,
      date: DateJour,
      body: req.body.body,
    });

    Blog.save((error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(Blog);
      }
    });
  }
};

// get all blogs

exports.ControlGetAllBlogs = (req, res) => {
  BlogModel.find((error, Blog) => {
    if (error) {
      res.status(500).send(error);
    } else if (!Blog) {
      res.status(404).send("La table est vide ! vueilez ajouter des blogs");
    } else {
      res.status(200).send(Blog);
    }
  });
};

//get on Blog

exports.ControlGetOneBlog = (req, res) => {
  BlogModel.findById(req.params.id, (error, Blog) => {
    if (error) {
      res.status(500).send(error);
    } else if (!Blog) {
      res.status(404).send("Blog introuvable");
    } else {
      res.status(200).send(Blog);
    }
  });
};

//put a blog

exports.ControlUpdateBlog = (req, res) => {
  BlogModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, Blog) => {
      if (error) {
        res.status(500).send(error);
      } else if (!Blog) {
        res.status(404).send("Blog introuvable");
      } else {
        res.status(200).send(Blog);
      }
    }
  );
};

// Delete a Blog

exports.ControlDeleteBlog = (req, res) => {
  BlogModel.findByIdAndDelete(req.params.id, (error, Blog) => {
    if (error) {
      res.status(500).send(error);
    } else if (!Blog) {
      res.status(404).send("Blog Introuvable");
    } else {
      res
        .status(200)
        .send(`le blog de id = ${req.params.id} a été bien suprimé`);
    }
  });
};

//Delete all blogs

exports.ControlDeleteAllBlog = (req, res) => {
  BlogModel.deleteMany((error, Blog) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Tous les Blogs ont eté suprimé");
    }
  });
};
