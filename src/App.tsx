import * as React from 'react';
import './App.css';

import { TodoForm } from './components/todo/TodoForm';

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
  }

  handleInput(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      currentTodo: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Todo-App">
          <TodoForm handleInput={this.handleInput} currentTodo={this.state.currentTodo} />
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete} />
                  {todo.name}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
