import {useState} from 'react';

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

const App = () => {
  const [todoList, setTodoList] = useState(initTodoList);

  return (
    <div>
      <h1>TODO LIST</h1>

      <section>
        <input type={'text'} />
        <button type={'submit'}>등록</button>
      </section>

      <ul>
        {todoList.map((item: Todo, index: number) => (
          <li key={index}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
