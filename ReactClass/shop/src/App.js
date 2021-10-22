import logo from './logo.svg';
import { button,Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">트레블투게더</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">항공권/예매</Nav.Link>
        <Nav.Link href="#link">숙소/숙박</Nav.Link>
        <NavDropdown title="마이페이지" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">예약확인/취소</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">나의 문의내역</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">내가 찜한상품</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className="main">
    <h1 className="main-title">이번 가을엔 특가 타나봐</h1>
    <p className="main-desc">최저가로 가을 여행 떠나자! </p>
    <button type="button" class="btn btn-light">자세히</button>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-4">
      <img src="https://d2ur7st6jjikze.cloudfront.net/offer_photos/109979/589591_medium_1634694798.jpg?1634694798" alt="소백산꽃차이야기" width="100%"/>
      <div className="card">
      <h4 className="card-title">소백산 꽃차이야기</h4>
      <p className="card-desc">소백산 아래 아름다운 소백산꽃차이야기</p>
      </div>
    </div>
    <div className="col-md-4">
    <img src="https://d2ur7st6jjikze.cloudfront.net/offer_photos/109982/589600_medium_1634697336.jpg?1634697336" alt="블렌딩티체험" width="100%"/>
    <div className="card">
      <h4 className="card-title">안동 어메니티 블랜딩티 체험</h4>
      <p className="card-desc">일상을 벗어난 장소에서 느낄 수 있는 감성을 차에 더하다</p>
    </div>
    </div>
    <div className="col-md-4">
    <img src="https://d2ur7st6jjikze.cloudfront.net/offer_photos/109981/589599_medium_1634695734.jpg?1634695734" alt="미엘도자기카페" width="100%"/>
    <div className="card">
      <h4 className="card-title">미엘도자기카페 체험</h4>
      <p className="card-desc">경북 김천에서 즐기는 미엘도자기 카페 체험</p>
    </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
