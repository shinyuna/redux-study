import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

const ToDo = ({ text, id, onClickDeleteToDo }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClickDeleteToDo}>삭제</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickDeleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(ToDo);
