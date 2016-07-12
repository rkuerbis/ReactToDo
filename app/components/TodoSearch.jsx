var React = require('react');
var TodoApp = require('TodoApp');
var TodoList = require('TodoList');

var TodoSearch = React.createClass({

   handleSearch: function () {
     var showCompleted = this.refs.showCompleted.checked;
     var searchText = this.refs.searchText.value;

     this.props.onSearch(showCompleted, searchText);

     console.log('input count', $('input').length);
   },

  render: function () {

    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos." onChange={this.handleSearch}/>

        </div>
        <div>
          <lable>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>  Show completed todos.
          </lable>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
