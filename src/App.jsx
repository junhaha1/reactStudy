import { Route, Routes } from 'react-router-dom';
import './App.css';
import ReactRouter from './ex080/R089_reactRouter';
import ReactRouter2 from './ex080/R089_reactRouter2';

function App(props) {
  
  return (
    <div>
      {/*<App/>에다가 <BroweRouter> 태그로 감싸지 않으면 <Routes> 태그를 쓸때마다
        <Routes> 태그를 <BroweRouter> 태그로 감싸야 함.*/}
      <Routes>
        <Route exact path='/' element={<ReactRouter/>}></Route>
        <Route exact path='/second' element={<ReactRouter2/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
