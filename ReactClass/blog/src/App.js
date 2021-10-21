import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['라이딩 일지','러닝 일지', '개발 일지']);
  let [좋아요1,좋아요변경1] = useState(0);
  let [좋아요2,좋아요변경2] = useState(0);
  let [좋아요3,좋아요변경3] = useState(0);
  
  // modal state
  let [modal,modal변경] = useState(false);

  // function 순서를변경(){
  //   var newArray = [...글제목];
  //   newArray[0] = '개발 일지';
  //   newArray[1] = '라이딩 일지';
  //   newArray[2] = '러닝 일지';
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h3>{글제목[0]}
        <span onClick={()=>{좋아요변경1(좋아요1 + 1)}}>❤️ </span>
        {좋아요1}</h3>
        <p>10월 19일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{글제목[1]}
        <span onClick={()=>{좋아요변경2(좋아요2 + 1)}}>❤️ </span>
        {좋아요2}</h3>
        <p>10월 20일 발행</p>
        <hr/>
      </div>

      <div className="list">
      <h3>{글제목[2]}
      <span onClick={()=>{좋아요변경3(좋아요3 + 1)}}>❤️ </span>
      {좋아요3}</h3>
      <p>10월 21일 발행</p>
        <hr/>
      </div>
      <button onClick={()=>{modal변경(!modal)}}>열고닫기</button>
    {
      modal === true
      ? <Modal></Modal>
      : null
    }

    </div>
  );
}

function Modal(){
  return(
  <div className="modal">
    <p>제목</p>
    <p>날짜</p>
    <p>내용</p>
  </div>
  )
}

export default App;