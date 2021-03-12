# Redux Study Repository

- 리덕스 공식 문서와 노마드 코더 강의를 들으며 리덕스를 공부하고 정리한 저장소입니다.
- 바닐라 자바스크립트, 리액트 2가지 버전으로 나뉘어져 있습니다.

---

## action

액션은 type 필드를 갖고 있는 객체이며, 어떤 작업을 할지 정의하는 역할을 합니다.
아래는 액션을 생성해 주는 함수입니다. (action creator)

```js
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text,
  };
};
```

## reducer

리듀서는 현재 상태와 액션 객체를 받아 상태를 업데이트 하는 방법을 결정하고 새로운 상태를 반환하는 함수입니다. 액션 type을 기반으로 이벤트를 처리하는 이벤트 리스너라고 생각할 수 있습니다.

- 리듀서는 오직 액션을 기반으로 새 상태 값을 계산합니다.
- 리듀서는 직접 상태를 변경하지 못합니다. 대신, immutable updates를 통해 상태를 복사하고 그 복사본을 변경합니다.
- 리듀서는 비동기 작업, 임의의 값을 계산하여 부작용을 일으키면 안됩니다.

```js
const reducer = (state = initialState, action) => {
  ...
  return state
};
```

## store

현재 애플리케이션의 상태를 보관하고 있는 객체 느낌..

스토어는 redux에서 제공하는 createStore를 통해 리듀서를 전달하여 생성됩니다.

```js
import { createStore } from 'redux';

const store = createStore(reducer);
```

### store의 메서드

- dispatch: 상태는 오직 action객체를 전달한 store.dispatch를 통해서 업데이트 됩니다.
- getState: 현재 상태 값을 리턴
- subscribe: 함수 형태의 값을 받아 액션이 디스패치 될 때마다 전달한 함수가 실행됨.

```js
const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);
el.addEventListener('click', () => {
  countStore.dispatch({ type: 'Add' });
});
```

## React Redux

```shell
npm i --save redux-react
```

store를 만드는 것 까진 바닐라 JS와 같지만, subscribe, dispatch를 하기 위해 redux-react가 필요하다.
redux store를 앱에서 사용하기 위해 아래와 같이 코드를 작성해준다.

```js
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
```

### store와 component를 연결

React Redux는 컴포넌트를 스토어에 연결할 수 있는 connect 함수를 제공합니다.
connect 함수는 두개의 인수를 받습니다.

mapStateToProps(state, ownProps): 스토어의 상태가 바뀔 때마다 호출되고, getState 역할을 합니다. 해당 컴포넌트에서 필요한 상태를 반환해야합니다. 두번째 인자는 해당 컴포넌트의 props.
mapDispatchToProps(dispatch, ownProps): dispatch 작업을 전달하는 함수를 반환합니다.

```js
function mapStateToProps(state) {
  return { toDos: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addToDo: todo => dispatch(actionCreators.addToDo(todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

---

## Redux Toolkit

리덕스의 단점인 많은 양의 코드를 줄일 수 있는 package입니다.

### Create Action

action type과 action creator를 자동으로 생성해주고, dispatch를 통해 전달된 값을 payload 합니다.

```js
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('ADD');
console.log(addTodo); // { type: "ADD", payload: undefined }
```

### Create Reducer

toolkit을 사용하면 switch case를 사용할 필요가 없어지고,
새로운 state를 리턴하거나 현재의 state를 mutate 할 수 있습니다.

- state를 mutate하면 immer.js 아래에서 작동하기 때문에 알아서 새로운 state를 리턴해준다. 단 mutate를 할 땐 리턴을 해선 안된다. 리턴은 무조건 새로운 state만 가능합니다.

```js
const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload),
});
```

### Configure Store

configureStore를 사용하면 Redux developer tools를 사용할 수 있습니다.

- Redux developer tools은 리덕스를 사용하는 웹 사이트에서 해당 서비스의 state를 확인할 수 있습니다.

```js
const store = configureStore({ reducer });
```

### Create Slice

create slice는 action, reducer 이 두 가지 역할을 모두 수행합니다.

```js
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(todo => todo.id !== action.payload),
  }
})

const store = configureStore({ toDos.reducer });
const { add, remove } = toDos.actions
```
