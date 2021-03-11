import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

function Home({ toDos }) {
  console.log('🚀 ~ Home ~ toDos', toDos);
  return (
    <div className="container">
      <h1 className="title">W R U D T? 📝 </h1>
      <AddTodo />
      <ul>
        {toDos && toDos.length ? toDos.map(toDo => <Todo {...toDo} key={toDo.id} />) : <p>할 일 없냐? 움직여라!!🤬</p>}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return { toDos: state };
};
export default connect(mapStateToProps)(Home);
