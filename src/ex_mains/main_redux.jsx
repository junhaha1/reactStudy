import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { legacy_createStore as createStore } from 'redux';
import reducers from './ex070/reduxExam/redusers'; //R070

const store = createStore(reducers); //해당 경로로 외부 저장소를 생성, 초기 생성값은 redusers에서 받음.
const root = ReactDOM.createRoot(document.getElementById('root'));

const listner = () => {
    root.render(
        <App store = {store}/>
    )
};

store.subscribe(listner); //listner가 store를 구독하여 store의 변경 등을 감지
listner();