'use strict';
var React = require("react");
var Fluxxor = require("fluxxor");
var constants = require("./todos/constants.js");
var TodoStore = require("./todos/todo_store.js");

var stores = { "TodoStore": new TodoStore(constants) };
var flux = new Fluxxor.Flux(stores, constants.actions);

var TodoApplication = require("./todos/application.jsx")(Fluxxor, React);
var Application = TodoApplication.Application;
React.render(<Application flux={flux}/>, document.getElementById("todoApp"));
