import * as React from 'react';

import { TodoAdd } from './components/todo/TodoAdd';
import { TodoList } from './components/todo/TodoList';
import { addTodo, generateId } from './lib/todoHelpers';

interface AppProps { }

interface AppState {
  todos: TodoItem[];

  currentTodo: string;
}

interface TodoItem {
  id: number;
  name: string;
  isComplete: boolean;
}

class App extends React.Component<AppProps, AppState> {
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

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      currentTodo: e.currentTarget.value
    });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newId = generateId();
    const newTodo: TodoItem = { id: newId, name: this.state.currentTodo, isComplete: false };
    const todoList = addTodo(this.state.todos, newTodo);

    this.setState({
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
