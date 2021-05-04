import React, { ChangeEventHandler, useState } from 'react';

// import { Container } from './styles';

function TodoList() {
  const [todos, setTodo] = useState<string[]>([]);
  const [text, setText] = useState<string>('vazio');

  function handleAddTodo() {
    setTodo([...todos, text]);
  }

  const handleSetValueTodo: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.currentTarget.value);
  };

  return (
    <div>
      <input
        onChange={handleSetValueTodo}
        value={text}
        placeholder="Digite algo"
      />
      <button type="button" id="button" onClick={handleAddTodo}>
        Click
      </button>

      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
