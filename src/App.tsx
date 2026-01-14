import { useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { Todo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-blue-200 flex items-start justify-center pt-12 px-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-black mb-8 tracking-wider">
          TODO LIST APP
        </h1>

        {/* Todo Input */}
        <TodoInput onAdd={handleAddTodo} />

        {/* Todo List */}
        <div className="mt-8">
          <TodoList todos={todos} onDelete={handleDeleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
