import * as React from 'react';

import { TodoAdd } from './components/todo/TodoAdd';
import { TodoList } from './components/todo/TodoList';
import { addTodo, generateId } from './lib/todoHelpers';
import { TodoItemModel } from './models/TodoItem';

interface AppProps { }

interface AppState {
  todos: TodoItemModel[];

  currentTodo: string;
}

class App extends React.PureComponent<AppProps, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: true },
        { id: 2, name: 'Professional C#', isComplete: false },
        { id: 3, name: 'Bitcoin Fundamentals', isComplete: false },
      ],
      currentTodo: ''
    };

    // this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      currentTodo: e.currentTarget.value
    });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newId = generateId();
    const newTodo: TodoItemModel = { id: newId, name: this.state.currentTodo, isComplete: false };
    const todoList = addTodo(this.state.todos, newTodo);

    this.setState({
      ...this.state,
      todos: todoList,
      currentTodo: ''
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Todo-App">
          <TodoAdd
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
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
