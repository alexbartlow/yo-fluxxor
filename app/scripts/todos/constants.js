var constants = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  CLEAR_TODOS: "CLEAR_TODOS",

  actions: {
    addTodo: function(text) {
      this.dispatch(module.exports.ADD_TODO, {text: text});
    },
    toggleTodo: function(todo) {
      this.dispatch(module.exports.TOGGLE_TODO, {todo: todo});
    },
    clearTodos: function() {
      this.dispatch(module.exports.CLEAR_TODOS);
    }
  }
};

module.exports = constants;
