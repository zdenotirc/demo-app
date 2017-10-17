import * as React from 'react';
import './App.css';

interface AppProps { }

interface AppState {
  todos: TodoItem[];
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
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id}><input type="checkbox" defaultChecked={todo.isComplete} />{todo.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
