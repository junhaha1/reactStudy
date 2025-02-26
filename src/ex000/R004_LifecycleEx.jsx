import { Component } from "react";

class R004_LifecycleEx extends Component{
    render(){ //해당 함수를 호출 시 화면이 바뀜.
        console.log('3. render call');
        return (
            <h2>[ RENDER FUNCTION ]</h2>
        )
    }
}

export default R004_LifecycleEx;