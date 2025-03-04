import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { legacy_createStore as createStore } from 'redux';
import {Provider} from 'react-redux';
import reducers from './ex070/react_reduxCounter/reducers'; 

const store = createStore(reducers); 
const root = ReactDOM.createRoot(document.getElementById('root'));

const listner = () => {
    root.render(
        <Provider store = {store}>
            <App/> 
        </Provider>
        
    )
};

store.subscribe(listner); 
listner();