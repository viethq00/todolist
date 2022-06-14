var express = require("express");
var router = express.Router();

const data = require("../controllers/todo.controller");

/* GET home page. */
router
  .route("/")
  .get(async (req, res, next) => {
    const tasks = await data.findTasks();
    res.render("layout", { todoTasks: tasks });
  })
  .post(data.saveTasks);

router
  .route("/edit/:id")
  .get(async (req, res, next) => {
    const tasks = await data.findTasks();
    res.render("edit", { todoTasks: tasks, idTask: req.params.id });
  })
  .post(data.editTask);

router.get("/delete/:id", data.deleteTask);

module.exports = router;
