/*eslint-disable */
import logo from './logo.svg';
import { button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [product, product변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">트레블투게더</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" as={Link} to ="/">Home</Nav.Link>
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
              product.map(a => {
                return <Card product={a} />
              })
            }
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail product={product}/>
      </Route>
      <Route Path="/:id">
        <div>아무거나 적었을 때 이거 보여주셈</div>
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
        <p className="card-desc">{props.product.description}</p>
      </div>
    </div>
  )
}


export default App;
