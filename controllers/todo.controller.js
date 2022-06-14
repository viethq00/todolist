const todoRepository = require("../repositories/todo.repository");

module.exports = {
  className: "saveData",
  saveTasks: async function (req, res, next) {
    try {
      const input = req.body.content;
      const saveData = await todoRepository.create(input);
      if (!saveData) {
        return null;
      }
      res.redirect("/");
      return saveData;
    } catch (error) {
      next(error);
    }
  },

  findTasks: async function (req, res, next) {
    try {
      const findData = await todoRepository.read();

      if (!findData) {
        return null;
      }
      console.log(findData);
      return findData;
    } catch (error) {
      next(error);
    }
  },

  editTask: async function (req, res, next) {
    try {
      const editContent = req.body.content;
      const id = req.params.id;
      const editData = await todoRepository.update(id, editContent);
      if (!editData) {
        return null;
      }
      res.redirect("/");
      return editData;
    } catch (error) {
      next(error);
    }
  },

  deleteTask: async function (req, res, next) {
    try {
      const id = req.params.id;
      console.log(id);
      const deleteTask = await todoRepository.delete(id);
      if (!deleteTask) {
        return null;
      }
      res.redirect("/");
      return deleteTask;
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
