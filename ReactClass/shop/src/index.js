import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


let test초기값 = [
  { id:0, name: '최재영', gender: "M", Phone: '01012341234'},
  { id:1, name: '정재모', gender: "M", Phone: '01012341234'},
  { id:2, name: '윤봉민', gender: "M", Phone: '01012341234'}
]

function reducer3(state = test초기값, 액션){
}

let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if (액션.type === '닫아줘') return state = false;
  else return state;
}


let 초기값 = [
  { id: 0, name: '멋진 신발', quan: 2, change: '변경사항없음' },
  { id: 1, name: '멋진 신발2', quan: 3, change: '변경사항있음' },
  { id: 2, name: '엄청 멋진 신발3', quan: 5, change: '변경완료' }
]

function reducer(state = 초기값, 액션) {
  if (액션.type === '항목추가') {

  let found =  state.findIndex((a)=>{ return a.id ===액션.데이터.id});
  console.log(found);

  if(found >= 0){
    let copy = [...state];  
    copy[found].quan++;
    return copy;
  }else{      
  let copy = [...state]
  copy.push(액션.데이터);
  return copy;
  }
} else if (액션.type === '수량증가') {

    let copy = [...state];
    copy[액션.데이터].quan++;
    return copy;
  } else if (액션.type === '수량감소') {
    let copy = [...state];
    copy[액션.데이터].quan--;
    return copy;
  } else {
    return state
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
