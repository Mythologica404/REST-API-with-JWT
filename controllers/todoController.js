import fs from "fs";

const dataPath = "../data/data.json";

const dataJSON = await JSON.parse(
  fs.readFileSync(new URL(dataPath, import.meta.url), "utf-8")
);

export default {
  async getAllTodo(req, res) {
    try {
      const { todos } = dataJSON;

      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getTodoByUserID(req, res) {
    const { todoId } = req.params;

    try {
      const { todos } = dataJSON;
      const findTodoByUserID = todos.find((element) => element.id == todoId);

      return res.status(200).json(findTodoByUserID);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
