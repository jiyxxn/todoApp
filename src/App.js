import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState ([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원가기',
      checked: false,
    }
    // {
    //   id: 4,
    //   text: '쇼핑하기',
    //   checked: false,
    // }
  ]);

  const nextId = useRef(4);
  console.log(nextId);
  /*
    useRef() reference의 줄임말. Hook 함수의 일종
    DOM 요소에 이름을 달 때 사용, id 대신해서 사용, 컴포넌트 내에서만 사용
    DOM을 꼭 직접적으로 건드릴 때 사용, 즉 특정 input에 포커스 주기, 스크롤 박스 조작하기,
    Canvas 요소에 그림그리기 등
  */

  /** TodoList 만드는 함수, useCallback 함수 성능 최적화*/
  const onInsert = useCallback((value) => {
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    };
    setTodos(todos.concat(todo)); // todo 배열 끝에 요소 추가
    nextId.current += 1;
  }, [todos])

  const onToggle = useCallback((id) => {
    setTodos(todos.map(todo => todo.id === id? {...todo, checked: !todo.checked}: todo))
  }, [todos])

  const onRemove = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }, [todos])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
