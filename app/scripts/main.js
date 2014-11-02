'use strict';

var Fluxxor = require("fluxxor");
var React = require("react");

var constants = require("./todos/constants.js");
var TodoStore = require("./todos/todo_store.js")(constants);

var stores = {
  "TodoStore": new TodoStore()
};

var flux = new Fluxxor.Flux(stores, constants.actions);

var AppFactory = require("./todos/application.jsx"),
  Application = AppFactory.Application,
  TodoItem = AppFactory.TodoItem;
React.render(<Application flux={flux}/>, document.getElementById("todoApp"));
