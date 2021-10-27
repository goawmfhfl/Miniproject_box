import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';



let 박스 = styled.div`
    padding : 20px;
    background : beige;
`
let 제목 = styled.h4`
    font-size : 25px;
`

function Detail(props) {

    let [alert, alert변경] = useState(true)

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
                    }}>주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{
                        history.push("/");
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

function Info(props){
    return(
    <p>재고 : {props.재고[0]}</p>
    )
}

export default Detail;