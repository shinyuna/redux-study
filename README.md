# Redux Study Repository

- 리덕스 공식 문서와 노마드 코더 강의를 들으며 리덕스를 공부하고 정리한 저장소입니다.
- 바닐라 자바스크립트, 리액트 2가지 버전으로 나뉘어져 있습니다.

## action

---

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

---

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

---

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
