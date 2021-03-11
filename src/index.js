import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './style.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

/* 바닐라 DOTO JS
import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};
const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};
const dispatchAddTodo = text => {
  store.dispatch(addTodo(text));
};
const dispatchDeleteTodo = e => {
  store.dispatch(deleteTodo(e.target.parentNode.id));
};

const paintTodo = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(todo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodo);

const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  dispatchAddTodo(todo);
};

form.addEventListener('submit', onSubmit);
*/
