const TodoTask = require("../models/todo.model");

module.exports = {
  create: async function (input) {
    try {
      const saveTask = await TodoTask.create({ content: input });

      if (!saveTask) {
        return null;
      }

      return saveTask;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  read: async function () {
    try {
      const readTask = await TodoTask.find({});

      if (!readTask) {
        return null;
      }
      return readTask;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  update: async function (id, content) {
    try {
      const updateTasks = await TodoTask.updateOne(
        { _id: id },
        { $set: { content: content } }
      );

      if (!updateTasks) {
        return null;
      }

      return updateTasks;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  delete: async function (id) {
    try {
      const deleteTask = await TodoTask.deleteOne({ _id: id });

      if (!deleteTask) {
        return null;
      }

      return deleteTask;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
