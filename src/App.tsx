import * as React from 'react';

import { TodoAdd } from './components/todo/TodoAdd';
import { TodoList } from './components/todo/TodoList';
import { addTodo, generateId } from './lib/todoHelpers';
import { TodoItemModel } from './models/TodoItem';

interface AppProps { }

interface AppState {
  todos: TodoItemModel[];

  currentTodo: string;

  errorMessage: string;
}

class App extends React.PureComponent<AppProps, AppState> {
  state = {
    todos: [
      { id: 1, name: 'Learn JSX', isComplete: true },
      { id: 2, name: 'Professional C#', isComplete: false },
      { id: 3, name: 'Bitcoin Fundamentals', isComplete: false },
    ],
    currentTodo: '',
    errorMessage: ''
  };

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      currentTodo: e.currentTarget.value
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = generateId();
    const newTodo: TodoItemModel = { id: newId, name: this.state.currentTodo, isComplete: false };
    const todoList = addTodo(this.state.todos, newTodo);

    this.setState({
      ...this.state,
      todos: todoList,
      currentTodo: '',
      errorMessage: ''
    });
  }

  handleEmptySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      errorMessage: 'Error - Todo cannot be empty!'
    });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoAdd
            handleInput={this.handleInput}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo}
          />
          <div className="Todo-List">
            <TodoList todos={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
