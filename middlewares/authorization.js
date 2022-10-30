import { verifyToken } from "../helpers/token.js";
import fs from "fs";

const dataPath = "../data/data.json";

const authentication = async (req, res, next) => {
  const token = req.headers["token"];
  try {
    if (!token) {
      return res.status(403).json({
        message: "Failed to access this, Your credentials not valid",
      });
    }

    const decode = verifyToken(token);
    const id = decode.id;

    const dataJSON = await JSON.parse(
      fs.readFileSync(new URL(dataPath, import.meta.url), "utf-8")
    );
    const { users } = dataJSON;
    const findUser = users.find((element) => element.id == id);

    if (!findUser) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    req.user = {
      name: findUser.name,
      username: findUser.username,
    };
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default authentication;
