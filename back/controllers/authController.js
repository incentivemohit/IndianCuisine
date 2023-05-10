const { User } = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//register a user
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.json({ data: "User Already Exists" });
  } else {
    try {
      let user = await User.create({
        name,
        email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.Pass_sec
        ).toString(),
      });

      if (user) {
        res.status(201).json({ data: "success" });
      } else {
        res.status(400);
      }
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  }
};

//login a user
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    !user && res.status(401).json("Wrong credentials");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.Pass_sec
    ).toString(CryptoJS.enc.Utf8);

    hashedPassword != req.body.password &&
      res.status(401).json("password doesn't match");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "3d",
      }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {}
};

module.exports = {
  register,
  login,
};
