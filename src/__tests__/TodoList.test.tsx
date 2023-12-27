import {screen, render, fireEvent, within} from '@testing-library/react';
import TodoList from '../Components/TodoList.tsx';
import userEvent from '@testing-library/user-event';
import App from '../App.tsx';

test('기본 데이터 렌더링', () => {
  render(<TodoList />);
  expect(screen.getByText('밥 먹기'));
});

test('인풋 입력 후 등록시 아이템 렌더링', () => {
  render(<TodoList />);
  const input = screen.getByLabelText('todo-input');
  const createButton = screen.getByText('등록'); // 텍스트를 통해 가져오거나, 다른 방법을 사용할 수 있습니다.
  const todoList = screen.getByRole('list');

  fireEvent.change(input, {target: {value: '운동하기'}});
  fireEvent.click(createButton);

  expect(screen.getByText('운동하기'));
  expect(todoList.children.length).toBe(3); // 예시: 3개의 자식이 있다고 가정
});

test('아이템 삭제', async () => {
  render(<App />);
  const deleteButton =screen.getByTestId('todo_delete_button_1');
  const targetItemText =screen.getByTestId('todo_text_1');

 await userEvent.click(deleteButton);
  screen.debug();

  expect(targetItemText).not.toBeInTheDocument();
});

/**
 * 1번째 아이템 버튼 타겟
 * 클릭
 * 투두리스트에서 해당 아이템 없는지
 */
// test('투두리스트 아이템 체크', () => {
//   render(<TodoList />);
//   // const todoList = screen.getByRole('list');
//   // const todoCheckboxs = within(todoList).getByRole('checkbox');
//   const targetItemCheckbox = screen.getByTestId('todo_checkbox_1')
//
//   console.log(targetItemCheckbox);
//
//   // screen.debug();
//
//   fireEvent.click(targetItemCheckbox);
//
//   expect(targetItemCheckbox).toBeChecked();
// });

// test('투두 체크시 체크박스, 취소선', () => {
//   // 2번째 항목 체크박스를 가져와야함
//   const secondTodoCheckBox = screen.getAllByRole('checkbox')[1];
//
//   fireEvent.click(secondTodoCheckBox);
//
//   expect(secondTodoCheckBox).toBeChecked();
// });

