import './App.css';
import {connect} from 'react-redux';
import StrAddButton from './ex070/react_redux/StrAddButton';
import 'bootstrap/dist/css/bootstrap.css'

function App(props) {

  return (
    <div>
      <h1>React-redux</h1>
      <span>{props.strInApp}</span><br/>
      <StrAddButton appProp=', world'/>
    </div>
  )
}

const mapStateToProps = (state,  props) => {
  console.log('Props from main: ' + props.mainProp);
  console.log('state.data.strInStore: ' + state.data.strInStore);
  return {
    strInApp: state.data.strInStore,
  }
};
App = connect(mapStateToProps, null)(App);
export default App;