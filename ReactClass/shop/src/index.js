import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {HashRouter} from 'react-router-dom';
import{Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert초기값 = true;

function reducer2(state=alert초기값, 액션){
  if(액션.type === '닫아줘')return state = false;
  else return state;
}


let 초기값 =[
  {id : 0, name :'멋진 신발', quan : 2,change : '변경사항없음'},
  {id : 1, name :'멋진 신발2',quan : 3,change : '변경사항있음'},
  {id : 2, name :'엄청 멋진 신발3',quan : 5,change : '변경완료'}
]  

function reducer(state = 초기값, 액션){
  if(액션.type==='항목추가'){
    let copy =[...state]
    copy.push(액션.payload);
    return copy
  }

  if(액션.type === '수량증가'){

    let copy = [...state];
    copy[0].quan++;
    return copy;
  }else if(액션.type === '수량감소'){
    let copy = [...state];
    copy[0].quan--;
    return copy;
  }else{
    return state
  }
}

let store = createStore(combineReducers({reducer, reducer2}));


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
