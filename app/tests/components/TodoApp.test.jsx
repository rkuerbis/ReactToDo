var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text'
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    var updatedTodos = todoApp.state.todos.map((todo) => {
      if (todo.text === todoText) {
        expect(todo.text).toBe(todoText);
      };
    });

     expect(todoApp.state.todos[0].text).toBe(todoText);

  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };
    var todo, updatedTodos;
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    var updatedTodos = todoApp.state.todos.map((todo) => {
      if (todo.id === todoData.id) {
        expect(todo.completed).toBe(false);

        todoApp.handleToggle(todo.id);
        expect(todo.completed).toBe(true);
      };
    });
  });
});
