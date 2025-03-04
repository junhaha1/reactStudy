import './App.css';
import {connect} from 'react-redux';
import MyCounter from './ex070/react_reduxCounter/MyCounter';
import 'bootstrap/dist/css/bootstrap.css'

function App(props) {

  return (
    <div>
      <MyCounter/>
    </div>
  )
}

export default App;