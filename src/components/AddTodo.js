import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  );
};

export default connect(null, { addTodo })(AddTodo);
