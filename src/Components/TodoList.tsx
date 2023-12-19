import {ChangeEvent, useState} from 'react';

interface Todo {
  todo: string;
  isDone: boolean;
}

const initTodoList = [
  {
    todo: '밥 먹기',
    isDone: true,
  },
  {
    todo: '책 읽기',
    isDone: false,
  },
];

const TodoList = () => {
  const [todoList, setTodoList] = useState(initTodoList);
  const [todoInputText, setTodoInputText] = useState('');

  const onChangeInputTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInputText(e.target.value);
  };

  const onSubmit = () => {
    setTodoList((prev: Todo[]) => [
      ...prev,
      {
        todo: todoInputText,
        isDone: false,
      },
    ]);
  };

  return (
    <div>
      <h1>TODO LIST</h1>

      <section>
        <input
          type={'text'}
          aria-label="todo-input"
          onChange={onChangeInputTodo}
        />
        <button type={'submit'} onClick={onSubmit}>
          등록
        </button>
      </section>

      <ul>
        {todoList.map((item: Todo, index: number) => (
          <li key={index}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
