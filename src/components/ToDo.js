import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, toggleTodo } from '../redux/actions';

const Todo = ({ text, id, done, onClickDelete, onClickToggle }) => {
  return (
    <li>
      <button onClick={onClickToggle}>{done ? '🍯' : '⏱'}</button>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClickDelete}>🗑</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickDelete: () => dispatch(deleteTodo(ownProps.id)),
    onClickToggle: () => dispatch(toggleTodo(ownProps.id)),
  };
};
export default connect(null, mapDispatchToProps)(Todo);
