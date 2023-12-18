import {render, screen} from '@testing-library/react';
import TodoList from '../Components/TodoList.tsx';

test('기본 데이터 렌더링', () => {
  render(<TodoList />);
  expect(screen.getByText('밥 먹기'));
});
