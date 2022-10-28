/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      {/* 메뉴바 (bootstrap) */}
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>ShoesShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav Link onClick={()=>{ navigate('/')}}>Home</Nav>
            <Nav Link onClick={()=>{ navigate('/detail')}}>Detail</Nav>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
            <>
              {/* banner */}
              <div className='main-bg'></div>
              {/* content(bootstrap) */}
              <div className='container'>
                <div className='row'>
                  {shoes.map(function (a, i) {
                      return <Card shoes={shoes[i]} i={i} key={shoes[i].id} />;
                  })}
                </div>
              </div>
              </>
            }/>

          <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />

          <Route path='/detail' element={<Detail shoes={shoes}/>} />
          <Route path='about' element={<About/>} >
            <Route path='member' element={<div>멤버임</div>}/>
            <Route path='location' element={<div>위치정보임</div>}/>
          </Route>
          <Route path='event' element={<Event/>} >
            <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
            <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
          </Route>
          <Route path='*' element={<div>없는페이지입니다</div>} />
        </Routes>
    </div> /* container end */
  );

  // 카드 리스트 컴포넌트
  function Card(props) {
    return (
      <div className='col-md-4'>
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width='80%;' />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </div>
    );
  }

  function About(){
    return(
      <div>
        <h4>회사정보 페이지</h4>
        <Outlet></Outlet>
      </div>
    )
  }
  function Event(){
    return (
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    );
  }
}
export default App;
