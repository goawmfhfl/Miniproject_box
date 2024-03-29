import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';
import './Detail.scss';
import {CSSTransition} from "react-transition-group";
import { connect } from 'react-redux';



let 박스 = styled.div`
    padding : 20px;
    background : beige;
`
let 제목 = styled.h4`
    font-size : 25px;
`

function Detail(props) {

    let [alert, alert변경] = useState(true)
    let [누른탭,탭변경] = useState(0);
    let [스위치,스위치변경] = useState(false);

    useEffect(()=>{

        // axios.get()



        let 타이머 = setTimeout(()=>{
            alert변경(false)
        },2000)
        return ()=>{clearTimeout(타이머)}
    },[])

    let history = useHistory();
    let { id } = useParams();
    let 찾은상품 = props.product.find((상품) => {
        return 상품.id === Number(id)
    })
    return (
        <div className="container">
            <div className="row">
                <박스>
                <제목 className="red">Detail.js</제목>
                </박스>
                {
                    alert === true
                        ? (
                            <div className="my-alert2">
                                <p>재고가 얼마 남지 않았습니다.</p>
                            </div>
                        )
                        : null
                }
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.description}</p>
                    <p>{찾은상품.price}원</p>
                    <Info 재고={props.재고} />
                    <button className="btn btn-danger" onClick={()=>{
                        let newArray = [...props.재고];
                        newArray[0] = newArray[0]-1;
                        props.재고변경(newArray);
                        props.dispatch({type:"항목추가", payload:{
                            id:2,
                            name:'새로운상품',
                            quan:1
                        }})
                        history.push()
                    }}>주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{
                        history.push('/cart');
                    }}>뒤로가기</button>
                </div>
            </div>

            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{ return 스위치변경(false),탭변경(0)}}>link-0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{ return 스위치변경(false),탭변경(1)}}>link-1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"onClick={()=>{ return 스위치변경(false),탭변경(2)}}>link-2</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent 누른탭 = {누른탭} 스위치변경 = {스위치변경}/>
            </CSSTransition>

        </div>
    )
}

function TabContent(props){
    useEffect(()=>{
        return props.스위치변경(true)
    })
    if(props.누른탭 ===0){
        return <div>0번째 내용입니다</div>
    }
    else if(props.누른탭 ===1){
        return <div>1번째 내용입니다</div>
    }
    else if(props.누른탭 ===2){
        return <div>2번째 내용입니다</div>
    }
}

function Info(props){
    return(
    <p>재고 : {props.재고[0]}</p>
    )
}

function state를props화(state) {
    return {
        state: state.reducer,
        alert열렸니: state.reducer2
    }
}

export default connect(state를props화)(Detail)