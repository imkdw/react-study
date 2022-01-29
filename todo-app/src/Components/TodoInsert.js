import { useState, useCallback, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import './styles/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const inputElem = useRef(null);

  const onChange = useCallback(e => setValue(e.target.value), []);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    onInsert(value);
    setValue('');
    inputElem.current.focus();
  }, [onInsert, value]);

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input placeholder='할 일을 입력하세요' value={value} onChange={onChange} ref={inputElem} />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert;
