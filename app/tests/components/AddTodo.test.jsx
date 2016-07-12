var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');
var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();

  });

  it('should call onAddTodo if valid text entered', () => {
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.todoText.value = 'trial text';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('trial text');
  });

  it('should not call onAddTodo if invalid text entered', () => {
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.todoText.value = '~~';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
