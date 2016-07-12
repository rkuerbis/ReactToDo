var React = require('react');
var TodoApp = require('TodoApp');
var TodoList = require('TodoList');

var AddTodo = React.createClass({
   handleSubmit: function (e) {
     e.preventDefault();
     var {todos} = this.props;
     var todoText = this.refs.todoText.value;

     console.log('input count', $('input').length);

     if (todoText.match(/^[ -}]*$/) && todoText.length > 0) {
       this.refs.todoText.value = '';
       this.props.onAddTodo(todoText);
     } else {
       this.refs.todoText.focus();
     }

   },

  render: function () {

    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit} className="countdown-form">
          <input type="text" ref="todoText" placeholder="Enter todo statement."/>
          <button className="button expanded">Enter</button>
        </form>

      </div>
    );
  }
});

module.exports = AddTodo;
