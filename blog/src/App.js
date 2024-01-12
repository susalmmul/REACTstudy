/* eslint-disable */ //=> 터미널에 warning 메세지 없애는 방법

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal () {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {

  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(["긴 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={()=> {
        let copy = [...글제목];
        copy.sort()
        글제목변경(copy);
      }}>글순서변경</button>

      <button onClick={() => {
        let copy = [...글제목]; //[...] 깊은 복사 : 주소가 아닌, 프로퍼티 값만 복사하는 것. (독립적)
        copy[0] = "짧은코트 추천";
        글제목변경(copy);
      }}>글수정</button>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={function (){따봉변경(따봉 + 1)}}>❤️</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]} <span onClick={function (){따봉변경(따봉 + 1)}}>❤️</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]} <span onClick={function (){따봉변경(따봉 + 1)}}>❤️</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal />
    </div>
  );
}

export default App;
