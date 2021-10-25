import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['🚲라이딩 일지','🏃🏻러닝 일지', '💻개발 일지']);
  let [좋아요,좋아요변경] = useState(0);
  
  // modal state
  let [modal,modal변경] = useState(0);
  let [누른제목, 누른제목변경] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
{
  글제목.map(function(글,i){
        return (
      <div className="list">
        <h3 onClick={()=>{누른제목변경(i)}}>{글}
          <span onClick={()=>{좋아요변경(좋아요 + 1)}}>❤️ </span>
  {좋아요}</h3>
        <p>10월 21일 발행</p>
        <hr/>
      </div>
      )})
}

      <button onClick={()=>{modal변경(!modal)}}>열고닫기</button>
    {
      modal === true
      ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      : null
    }
    </div>
  );
}

function Modal(props){
  return(
  <div className="modal">
    <p>{props.글제목[props.누른제목]}</p>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;