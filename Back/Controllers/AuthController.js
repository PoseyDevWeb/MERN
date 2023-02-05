const bcrypt = require("bcrypt");
const UserModel = require("../Models/AuthModel");
const jwt = require("jsonwebtoken");
const saltRound = 10;
const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// login

exports.Login = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    res.status(404).send(`Username Incorrecte`);
  } else {
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      res.status(401).send("Password Invalid");
    } else {
      if (!passwordValid && !user) {
        res.status(402).send("Password and username Invalide");
      } else {
        const token = createToken(user.id);
        res.cookie("jwt", token, { httpOnly: true, maxAge });
        res.status(200).send("Login succeful" + user);
      }
    }
  }
};

//Signup

exports.Signup = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  const passwordhash = await bcrypt.hash(password, saltRound);
  const AllUser = await UserModel.find();
  let exist = false;
  //const exist = await bcrypt.compare(passwordhash, password);

  if (user) {
    res.status(404).send("username deja utilisé , utiliser un autre ");
  } else {
    for (let i = 0; i < AllUser.length; i++) {
      exist = await bcrypt.compare(password, AllUser[i].password);
      if (exist === true) {
        i = AllUser.length;
      }
    }

    if (exist) {
      res
        .status(401)
        .send("ce mot de passe existe deja : vueillez creer un autre");
    } else {
      const newUser = new UserModel({ username, password: passwordhash });
      newUser.save((error) => {
        if (error) {
          res
            .status(500)
            .send("la creation de l'utilisateur a échoué : " + error);
        } else {
          res.status(200).send(`creation reussie : ${newUser}`);
        }
      });
    }
  }
};

//get All users

exports.ControlGetAllUser = (req, res) => {
  UserModel.find((error, user) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(user);
    }
  });
};

//get User by Id

exports.ControlGetOneUser = (req, res) => {
  UserModel.findById(req.params.id, (error, user) => {
    if (error) {
      res.status(500).send(error);
    } else if (!user) {
      res.status(404).send("utilisateur suprimé");
    } else {
      res.status(200).send(user);
    }
  });
};

//Delete by Id

exports.ControlDeleteOneUser = async (req, res) => {
  UserModel.findByIdAndDelete(req.params.id, (error, user) => {
    if (error) {
      res.status(500).send(error);
    } else if (!user) {
      res.status(404).send("utilisateur introuvable");
    } else {
      res.status(200).send(`${user.username} est suprimé avec succée`);
    }
  });
};

//Delete All user

exports.ControlDeleteAllUser = async (req, res) => {
  UserModel.deleteMany((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("suppression reussi");
    }
  });
};

//Update one by id

exports.ControlUpdateUser = async (req, res) => {
  UserModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, user) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(`modification reussi : ${user}`);
      }
    }
  );
};
