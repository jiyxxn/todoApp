import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss'

function TodoInsert({onInsert}) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    console.log(e);
    setValue(e.target.value);
  }, [value]); // 배열 안에는 바뀌는 state값

  const onSubmit = useCallback((e) => {
    onInsert(value);
    setValue(''); // 입력이 완료되면 입력창이 비어있어야 하므로 공백문자 삽입
    e.preventDefault();
    // submit 이벤트는 브라우저에서 새로고침을 발생시킨다
  }, [value])

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input type='text' placeholder='할일을 입력하세요'
      onChange={onChange} value={value} />
      <button type="submit"> <MdAdd/> </button>
    </form>
  )
}

export default TodoInsert 