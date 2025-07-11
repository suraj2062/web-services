import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const loginUser = (req, res) => {
  const { username, password } = req.body;
console.log("Env username:", process.env.USER_NAME);
  console.log("Env password:", process.env.PASS);
  console.log("Body username:", username);
  console.log("Body password:", password);
  if (
    username !== process.env.USER_NAME ||
    password !== process.env.PASS
  ) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign(
    { username: username },
    process.env.JWT_SECRET,
    { expiresIn:"1d" }
  );

  res.status(200).json({
    message: "Login successful",
    token
  });
};
