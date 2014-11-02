module.exports = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  CLEAR_TODOS: "CLEAR_TODOS",

  actions: {
    addTodo: function(text) {
      this.dispatch(constants.ADD_TODO, {text: text});
    },
    toggleTodo: function(todo) {
      this.dispatch(constants.TOGGLE_TODO, {todo: todo});
    },
    clearTodos: function() {
      this.dispatch(constants.CLEAR_TODOS);
    }
  }
};
