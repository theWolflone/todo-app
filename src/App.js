import React from "react";
import { TodoCounter } from "./todoCounter";
import { TodoSearch } from "./todoSearch";
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";
import { CreateTodoButton } from "./createTodoButton";

// import './App.css';

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />

      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
