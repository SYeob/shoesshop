/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import styled from 'styled-components'



function Detail(props) {
  let {id} = useParams();
  let findItem = props.shoes.find(function(x){
    return x.id == id
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mt-4'>
          <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;


// let YellowBtn = styled.button`
//   background: yellow;
//   color: black;
//   padding: 10px;
// `

// let box = styled.div`
//   background: grey;
//   padding: 20px;
// `
