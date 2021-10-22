import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [노래,노래변경] = useState(['🎧 가을에 듣기 좋은 음악','🚲 가을에 가기 좋은 관광지', '👖 가을에 입기 좋은 패션'])
  let songs = '가을 노래 추천'
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{노래}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  )
}

export default App;
