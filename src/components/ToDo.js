import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, toggleTodo } from '../redux/actions';

const Todo = ({ text, id, done, onClickDelete, onClickToggle }) => {
  return (
    <li>
      <div className="checkbox">
        <input id={`todo${id}`} type="checkbox" checked={done} onClick={onClickToggle} />
        <label for={`todo${id}`}>
          <i class="fa fa-check" />
        </label>
      </div>
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
