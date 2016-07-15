var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');


var TodoApp = React.createClass({
  getInitialState: function () {
  return {
    showCompleted: false,
    searchText: '',
    todos: [
      {
        id: uuid(),
        text: 'Walk the dog'
      }, {
        id: uuid(),
        text: 'Clean the yard'
      }, {
        id: uuid(),
        text: 'Leave mail on porch'
      }, {
        id: uuid(),
        text: 'Play video games'
      }
    ]
  };
},

handleAddTodo: function (text) {
  this.setState({
    todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: text
      }
    ]
  });

},

handleSearch: function (showCompleted, searchText) {
  this.setState({
    showCompleted: showCompleted,
    searchText: searchText.toLowerCase()
  });
},

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <h1 className="text-center page-title">TodoApp</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
        {/* Some comment here */}
      </div>



    )
  }
});


module.exports = TodoApp;
