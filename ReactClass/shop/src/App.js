/*eslint-disable */
import logo from './logo.svg';
import { button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import React,{ useState, useContext } from 'react';
import Data from './data.js';
import Detail from './Detail.js';
import axios, { Axios } from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

import Cart from './Cart/cart'

function App() {
  let [product, product변경] = useState(Data);
  let [switchOn,switchChange] = useState(false);
  let [재고,재고변경] = useState([10,11,12])
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">트레블투게더</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
              <Nav.Link href="#link" as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">예약확인/취소</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">나의 문의내역</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">내가 찜한상품</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">마이페이지</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="main">
            <h1 className="main-title">이번 가을엔 특가 타나봐</h1>
            <p className="main-desc">최저가로 가을 여행 떠나자! </p>
            <button type="button" class="btn btn-light">자세히</button>
          </div>
          <div className="container">


            <div className="row">
              {
                product.map((a, i) => {
                  return <Card product={a} key={i} />
                })
              }
            </div>


              {
                switchOn === true
                ?<div className="my-alert3">로딩중 입니다</div>
                :null
              }
            
            <button className="btn btn-primary" onClick={() => {
              // axios.post('서버URL', { id: 'codingapple', pw: 1234 })
              switchChange(true)
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  switchChange(false)
                  let newArray = [...product]
                  newArray.push(...result.data)
                  product변경(newArray)
                })
                .catch(() => {
                  switchChange(false)
                  console.log('실패했어요') ;
                })
            }}>더보기</button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail product={product} 재고={재고} 재고변경={재고변경}/>
        </Route>
        <Route path="/Cart">
          <Cart/>
        </Route>
      </Switch>


    </div>
  );
}


function Card(props) {

  return (
    <div className="col-md-4">
      <img src={props.product.img} alt="소백산꽃차이야기" width="100%" />
      <div className="card">
        <h4 className="card-title">{props.product.title}</h4>
        <p className="card-desc">{props.product.content}</p>
      </div>
    </div>
  )
}


export default App;
