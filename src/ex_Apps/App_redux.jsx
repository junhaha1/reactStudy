import './App.css';
import StrAddButton from './ex070/reduxExam/StrAddButton';
import 'bootstrap/dist/css/bootstrap.css';

function App(props) {
  
  return (
    <div>
      <h1>React Study</h1>
      <span>{props.store.getState().data.strInStore}</span><br/>
      <StrAddButton store={props.store}/>
    </div>
  )
}
export default App;
