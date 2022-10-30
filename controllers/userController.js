import fs from "fs";
import { generateToken } from "../helpers/token.js";

const dataPath = "../data/data.json";

export default {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const dataJSON = await JSON.parse(
        fs.readFileSync(new URL(dataPath, import.meta.url), "utf-8")
      );
      const { users } = dataJSON;
      const findUser = users.find((element) => element.username == username);

      if (!findUser) {
        return res.status(404).json({ message: "User not found" });
      }

      if (findUser.password === password) {
        const token = generateToken({
          id: findUser.id,
        });

        res.status(200).json({
          message: "Login Success!",
          token: token,
        });
      } else {
        res.status(403).json({
          message: "Wrong password!",
        });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
