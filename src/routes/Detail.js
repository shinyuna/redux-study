import React from 'react';
import { connect } from 'react-redux';

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <p>Created at: {toDo?.id}</p>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    toDo: state.find(toDo => toDo.id === +id),
  };
}
export default connect(mapStateToProps)(Detail);
