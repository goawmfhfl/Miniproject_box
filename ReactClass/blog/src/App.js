import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['🚲라이딩 일지', '🏃🏻러닝 일지', '💻개발 일지']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);

  let [modal, modal변경] = useState(true);
  let [모달제목, 모달제목변경] = useState(0)

  // 입력값 저장
  let [입력,입력변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      
      {
        글제목.map(function (글, i) {
          return (
            <div className="list" key={i}>
              <h3 onClick={() => { 모달제목변경(i) }}>{글}
                <span onClick={() => { 좋아요변경(좋아요[i] + 1) }}>❤️ </span>
                {좋아요[i]}</h3>
              <p>10월 21일 발행</p>
              <hr />
            </div>
          )
        })
      }
      {/* {입력} */}

      <div className="publish">
        <input onChange={(e)=>{입력변경(e.target.value)}}/>
        <button onClick={()=>{
          let newArray = [...글제목]
          newArray.unshift(입력)
          글제목변경(newArray)
        }}>저장</button>
      </div>
      <button onClick={() => { modal변경(!modal) }}>열고닫기</button>

      <Profile />

      {
        modal === true
          ? <Modal 글제목={글제목} 모달제목={모달제목}></Modal>
          : null        
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <p>{props.글제목[props.모달제목]}</p>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// 옛날 컴포넌트 기본 문법
// class 변수/함수 보관하는 덩어리
class Profile extends React.Component {
  constructor() {
    super()
    this.state = { name: 'kim', age: 30 } // state
  }

  changeName = () => {
    this.setState({ name: 'park' })
  }

  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다</p>
        <button onClick={this.changeName}>버튼</button>
      </div>
    )
  }
}

export default App;
