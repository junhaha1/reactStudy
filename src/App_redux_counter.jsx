import './App.css';
import MyCounter from './ex070/reduxCounter/MyCounter';
import 'bootstrap/dist/css/bootstrap.css';

function App(props) {
  
  return (
    <div>
      <MyCounter store = {props.store}/>
    </div>
  )
}
export default App;
