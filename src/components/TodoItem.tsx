import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between py-3 group">
      <div className="flex items-center">
        <span className="w-2 h-2 bg-gray-700 rounded-full mr-4"></span>
        <span className="text-gray-700 text-lg font-medium">{todo.text}</span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-400 hover:bg-red-500 text-gray-800 font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
      >
        Delete
      </button>
    </li>
  );
}
